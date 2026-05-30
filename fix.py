with open("/home/jules/verification/verify_cuj.py", "r") as f:
    code = f.read()

code = code.replace('page.locator(".bg-black\\\\/60 > div > button").click()', 'page.locator("div.fixed.inset-0.z-50 button").click()')

with open("/home/jules/verification/verify_cuj.py", "w") as f:
    f.write(code)
