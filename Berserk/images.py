import os

directory = 'images/'
images = [file for file in os.listdir(directory) if file.endswith(( '.jpeg', '.png', '.gif'))]
arr=[]
for image in images:
    arr.append( f'img src="{os.path.join(directory, image)}" alt="Image" ')
    

from bs4 import BeautifulSoup

html_file = 'gallery.html'  
with open(html_file, 'r') as file:
    html_content = file.read()

# Create a BeautifulSoup object
soup = BeautifulSoup(html_content, 'html.parser')

# Find the <body> tag
body_tag = soup.find(id='image-container')

for a in range (len(arr)):
    st="<"+arr[a]+">"
    
    new_img_tag=st
    body_tag.append(new_img_tag)

with open('gallery.html', 'w') as output_file:
    output_file.write(str(soup.prettify(formatter=None)))
    