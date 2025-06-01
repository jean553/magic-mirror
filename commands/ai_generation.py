import os
import sys
import requests
import openai

openai.organization = ""
openai.api_key = ""

prompt = sys.argv[1]

def create_image(prompt, output_file):
    response = openai.Image.create(
      prompt=prompt,
      n=1,
      size="1024x1024"
    )
    image_url = response['data'][0]['url']
    image_file = requests.get(image_url)
    open('/home/jean/MagicMirror/modules/MMM-EasyPix/pix/' + output_file, 'wb').write(image_file.content)

create_image(prompt, "001.png")
create_image(prompt, "002.png")
create_image(prompt, "003.png")
create_image(prompt, "004.png")
