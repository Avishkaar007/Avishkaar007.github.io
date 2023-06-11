import requests
r=requests.get("https://in.pinterest.com/search/pins/?q=berserk&rs=typed")
# r=requests.get("https://avishkaar007.github.io")
print(r.text)