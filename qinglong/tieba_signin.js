# -*- coding:utf-8 -*-
import os
import requests
import hashlib
import time
import copy
import logging
import re


logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# API_URL
LIKIE_URL = "http://c.tieba.baidu.com/c/f/forum/like"
TBS_URL = "http://tieba.baidu.com/dc/common/tbs"
SIGN_URL = "https://tieba.baidu.com/sign/add"
Ba_TBS = "http://tieba.baidu.com/f?kw="

#更新这里的cookie
HEADERS = {
    'Host': 'tieba.baidu.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
    'cookie':'XXXXXXXXXXXX', # 此处填写签到时的cookie
}
SIGN_DATA = {
    "ie": "utf-8",
}

SUCCESS_COUNT=0
FAIL_COUNT=0


# VARIABLE NAME
COOKIE = "Cookie"
BDUSS = "bduss"
EQUAL = r'='
EMPTY_STR = r''
TBS = 'tbs'
PAGE_NO = 'page_no'
ONE = '1'
TIMESTAMP = "timestamp"
DATA = 'data'
FID = 'fid'
SIGN_KEY = 'tiebaclient!!!'
UTF8 = "utf-8"
SIGN = "sign"
KW = "kw"

s = requests.Session()


def get_tbs(bduss):
    logger.info("获取tbs开始")
    headers = copy.copy(HEADERS)
    headers.update({COOKIE: EMPTY_STR.join([BDUSS, EQUAL, bduss])})
    try:
        tbs = s.get(url=TBS_URL, headers=headers, timeout=5).json()[TBS]
    except Exception as e:
        logger.error("获取tbs出错" + e)
        logger.info("重新获取tbs开始")
        tbs = s.get(url=TBS_URL, headers=headers, timeout=5).json()[TBS]
    logger.info("获取tbs结束")
    return tbs


def get_favorite(bduss):
    logger.info("获取关注的贴吧开始")
    # 客户端关注的贴吧
    returnData = {}
    i = 1
    data = {
        'BDUSS': bduss,
        '_client_type': '2',
        '_client_id': 'wappc_1534235498291_488',
        '_client_version': '9.7.8.0',
        '_phone_imei': '000000000000000',
        'from': '1008621y',
        'page_no': '1',
        'page_size': '200',
        'model': 'MI+5',
        'net_type': '1',
        'timestamp': str(int(time.time())),
        'vcode_tag': '11',
    }
    data = encodeData(data)
    try:
        res = s.post(url=LIKIE_URL, data=data, timeout=5).json()
    except Exception as e:
        logger.error("获取关注的贴吧出错" + e)
        return []
    returnData = res
    if 'forum_list' not in returnData:
        returnData['forum_list'] = []
    if res['forum_list'] == []:
        return {'gconforum': [], 'non-gconforum': []}
    if 'non-gconforum' not in returnData['forum_list']:
        returnData['forum_list']['non-gconforum'] = []
    if 'gconforum' not in returnData['forum_list']:
        returnData['forum_list']['gconforum'] = []
    while 'has_more' in res and res['has_more'] == '1':
        i = i + 1
        data = {
            'BDUSS': bduss,
            '_client_type': '2',
            '_client_id': 'wappc_1534235498291_488',
            '_client_version': '9.7.8.0',
            '_phone_imei': '000000000000000',
            'from': '1008621y',
            'page_no': str(i),
            'page_size': '200',
            'model': 'MI+5',
            'net_type': '1',
            'timestamp': str(int(time.time())),
            'vcode_tag': '11',
        }
        data = encodeData(data)
        try:
            res = s.post(url=LIKIE_URL, data=data, timeout=5).json()
        except Exception as e:
            logger.error("获取关注的贴吧出错" + e)
            continue
        if 'forum_list' not in res:
            continue
        if 'non-gconforum' in res['forum_list']:
            returnData['forum_list']['non-gconforum'].append(res['forum_list']['non-gconforum'])
        if 'gconforum' in res['forum_list']:
            returnData['forum_list']['gconforum'].append(res['forum_list']['gconforum'])

    t = []
    for i in returnData['forum_list']['non-gconforum']:
        if isinstance(i, list):
            for j in i:
                if isinstance(j, list):
                    for k in j:
                        t.append(k)
                else:
                    t.append(j)
        else:
            t.append(i)
    for i in returnData['forum_list']['gconforum']:
        if isinstance(i, list):
            for j in i:
                if isinstance(j, list):
                    for k in j:
                        t.append(k)
                else:
                    t.append(j)
        else:
            t.append(i)
    logger.info("获取关注的贴吧结束")
    return t


def encodeData(data):
    s = EMPTY_STR
    keys = data.keys()
    for i in sorted(keys):
        s += i + EQUAL + str(data[i])
    sign = hashlib.md5((s + SIGN_KEY).encode(UTF8)).hexdigest().upper()
    data.update({SIGN: str(sign)})
    return data

def getTbs(kw):
    # 正则表达式学得不太好，用得有点呆板，凑合用
    url = "https://tieba.baidu.com/f?kw="+kw+"&fr=index&fp=0&ie=utf-8"
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    response.encoding = response.apparent_encoding
    html = response.text
    match = re.search(r"'tbs': \"(.*)\"    };", html)
    if match:
        tbs = match.group(0).split('"')[1]
        return tbs
    return None


def client_sign(bduss, tbs, fid, kw):
    global SUCCESS_COUNT
    global FAIL_COUNT
    global TXT_LOG
    # 客户端签到
    logger.info("开始签到贴吧：" + kw)
    data = copy.copy(SIGN_DATA)
    tbs = getTbs(kw)
    data.update({BDUSS: bduss, FID: fid, KW: kw, TBS: tbs, TIMESTAMP: str(int(time.time()))})
    data = encodeData(data)
    res = s.post(url=SIGN_URL,headers=HEADERS, data=data, timeout=5).json()
    if res.get("no") == 0:
        SUCCESS_COUNT += 1
        print("成功")
        TXT_LOG = TXT_LOG + kw + "吧-签到成功\n"
    else:
        FAIL_COUNT += 1
        print("失败")
        TXT_LOG = TXT_LOG + kw + "吧-签到失败\n"
        


def main():
    global SUCCESS_COUNT
    global FAIL_COUNT
    global TXT_LOG
    TXT_LOG = " "
    #更新这里的bduss
    b = "XXXXXXXXXXXXXXXX" # 此处填写bduss
    print("开始签到")
    tbs = get_tbs(b)
    favorites = get_favorite(b)
    for j in favorites:
        client_sign(b, tbs, j["id"], j["name"])
    print("本次签到成功%d个，失败%d个" % (SUCCESS_COUNT, FAIL_COUNT))
    #更新这里的通知秘钥
    # 此处****替换为server酱个人key
    #text = 'https://sctapi.ftqq.com/*************.send?title=贴吧签到成功'+str(SUCCESS_COUNT)+'个，失败'+ str(FAIL_COUNT)+"个"+' &desp=签到成功！！'
    # 此处****替换为pushplus个人token
    text = 'http://www.pushplus.plus/send?token=XXXXXXXXXXXXXXXXXXX&title=百度贴吧签到&content=签到成功' + str(SUCCESS_COUNT) + '个，签到失败' + str(FAIL_COUNT) + "个\n\n" + TXT_LOG + '&template=html'
    requests.get(text)


if __name__ == '__main__':
    main()
