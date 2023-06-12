import os
directory = './images/'
images = [file for file in os.listdir(directory) if file.endswith(( '.jpeg', '.png', '.gif'))]
arr=[]
for image in images:
    arr.append( f'img src="{os.path.join(directory, image)}" alt="{image}" ')

from bs4 import BeautifulSoup

html_file = 'gallery.html'  
with open(html_file, 'r') as file:
    html_content = file.read()

soup = BeautifulSoup(html_content, 'html.parser')

# Find the <body> tag
body_tag = soup.find(id='image-container')
soup.encode
for a in range (len(arr)):
    st="<"+arr[a]+">"
    body_tag.append(st)
print(soup.text)

with open('gallery.html', 'w',encoding="utf-8") as output_file:
    output_file.write(str(soup.prettify(formatter=None)))
