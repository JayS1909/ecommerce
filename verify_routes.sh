#!/bin/bash
routes=(
    '/'
    '/product/1'
    '/wishlist'
    '/cart'
    '/checkout'
    '/login'
    '/account'
    '/contact'
    '/about'
    '/order-tracking'
    '/account/returns'
    '/admin'
)

base_url='http://127.0.0.1:3000'

for route in "${routes[@]}"; do
    url="${base_url}${route}"
    status_code=$(curl -o /dev/null -s -w "%{http_code}\n" "$url")
    echo "[$status_code] $url"
done
