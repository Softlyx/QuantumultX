import subprocess
import random
import time

# 定义多个账号的认证信息列表
authentication_cookies = [
    "",""
    # 添加更多账号的认证信息
]

# 随机生成延迟时间，单位为秒
delay = random.randint(1800, 7200)  # 随机生成30分钟到2小时的延迟时间
print(f"将在{delay // 60}分钟后执行签到任务...")

# 等待随机延迟时间
time.sleep(delay)

# 循环处理每个账号的签到
for idx, cookie in enumerate(authentication_cookies, start=1):
    # 构建命令
    command = f'p115 check -c "{cookie}"'

    # 调用命令并获取输出
    result = subprocess.run(command, shell=True, capture_output=True, text=True)

    # 解析输出
    output = result.stdout.strip()
    if result.returncode == 0:
        print(f"账号{idx}签到成功！")
        print("返回信息：")
        print(output)
    else:
        print(f"账号{idx}签到失败。错误信息：")
        print(result.stderr)
    print()  # 打印空行，用于分隔不同账号的输出
