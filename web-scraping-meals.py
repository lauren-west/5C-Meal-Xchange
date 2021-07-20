# Sat May 22 2021 8:58 PM 
# Lauren West -- lwest@hmc.edu

import requests
from bs4 import BeautifulSoup
import csv
import random

URL = "https://menus.sodexomyway.com/BiteMenu/Menu?menuId=15258&locationId=13147001&whereami=http://hmc.sodexomyway.com/dining-near-me/hoch-shanahan-dining-commons"
reqs = requests.get(URL)

soup = BeautifulSoup(reqs.content, 'html5lib')

print(soup.prettify())

quotes=[]  # a list to store quotes

table = soup.find('aref', attrs = {'data-fooditemname':'all_quotes'})


# See what's in one of the all_quotes!
print(table.prettify())

# for row in table.findAll('div', attrs={'class':'col-6 col-lg-3 text-center margin-30px-bottom sm-margin-30px-top'}):
#     quote = {}
#     quote['theme'] = row.h5.text
#     quote['url'] = row.a['href']
#     quote['img'] = row.img['src']
#     quote['lines'] = row.img['alt'].split(" #")[0]
#     quote['author'] = row.img['alt'].split(" #")[1]
#     quotes.append(quote)

# filename = 'inspirational_quotes.csv'
# with open(filename, 'w', newline='') as f:
#     w = csv.DictWriter(f,['theme','url','img','lines','author'])
#     w.writeheader()
#     for quote in quotes:
#         w.writerow(quote)

# ## inspiration quote generator ##
# rand_quote = quotes[random.randint(0,31)]['lines']
# print(rand_quote)