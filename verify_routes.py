import requests
import time

routes = [
    '/',
    '/product/1',
    '/wishlist',
    '/cart',
    '/checkout',
    '/login',
    '/account',
    '/contact',
    '/about',
    '/order-tracking',
    '/account/returns',
    '/admin'
]

base_url = 'http://127.0.0.1:3000'

for route in routes:
    url = f"{base_url}{route}"
    try:
        response = requests.get(url)
        print(f"[{response.status_code}] {url}")
        if response.status_code != 200:
            print(f"  -> Failed to load {url}")
    except Exception as e:
        print(f"Error accessing {url}: {e}")
    time.sleep(0.1)
