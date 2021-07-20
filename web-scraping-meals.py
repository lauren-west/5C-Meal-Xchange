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

meals=[]  # a list to store meal items

# this doesn't work yet #
# table = soup.find('aref', attrs = {'data-fooditemname':'all_meals'})


# See what's in one of the all_meals!
# print(table.prettify())

# for row in table.findAll('div', attrs={'class':'col-6 col-lg-3 text-center margin-30px-bottom sm-margin-30px-top'}):
#     meal = {}
#     meal['theme'] = row.h5.text
#     meal['url'] = row.a['href']
#     meal['img'] = row.img['src']
#     meal['lines'] = row.img['alt'].split(" #")[0]
#     meal['author'] = row.img['alt'].split(" #")[1]
#     meals.append(meal)

# filename = 'inspirational_meals.csv'
# with open(filename, 'w', newline='') as f:
#     w = csv.DictWriter(f,['theme','url','img','lines','author'])
#     w.writeheader()
#     for meal in meals:
#         w.writerow(meal)

# ## inspiration meal generator ##
# rand_meal = meals[random.randint(0,31)]['lines']
# print(rand_meal)