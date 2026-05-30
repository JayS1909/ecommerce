with open("src/app/admin/page.tsx", "r") as f:
    content = f.read()

# We need to securely remove the front-end login block because the page is now protected by Next.js proxy middleware.
# The user will only see this page if they have the 'admin_session' cookie.

import_start = content.find("const handleLogin =")
import_end = content.find("if (!isAuthenticated) {")

if import_start != -1 and import_end != -1:
    content = content[:import_start] + content[import_end:]

auth_check_start = content.find("if (!isAuthenticated) {")
auth_check_end = content.find("return (", auth_check_start)

if auth_check_start != -1 and auth_check_end != -1:
    content = content[:auth_check_start] + content[auth_check_end:]

content = content.replace("const [isAuthenticated, setIsAuthenticated] = useState(false);", "")
content = content.replace("const [password, setPassword] = useState('');", "")
content = content.replace("const [error, setError] = useState('');", "")

with open("src/app/admin/page.tsx", "w") as f:
    f.write(content)
