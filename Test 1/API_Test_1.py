import json
import requests
import time
from random import randint
import pandas as pd

# Test 1
""" #Used to test how to display usernames without all the other data

 
url1 = f'https://api.opendota.com/api/players/80037375'
r3 = requests.get(url1)
data3 = json.loads(r3.text)
url2 = f'https://api.opendota.com/api'
r2 = requests.get(url2)
data2 = json.loads(r2.text)

print(data3['profile']['personaname'])

print(json.dumps(data3))
print("")
print("")

print("")

#print(json.dumps(data2))

 """

 # Test 2 (create the hero list json)
 
""" url4 = f'https://api.opendota.com/api/heroes'
r4 = requests.get(url4)
data4 = json.loads(r4.text)

hero_list = []
for hero in data4:
    id = hero['id']
    localized_name = hero['localized_name']
    primary_attr = hero['primary_attr']
    attack_type =  hero['attack_type']
        
    hero_info = {
        'id': id,
        'name': localized_name,
        'primary attribute': primary_attr,
        'attack type': attack_type,
            
    }
    hero_list.append(hero_info)

dotadf = pd.DataFrame(hero_list) 
#print(dotadf)
#dotadf.to_json('hero_info.json', orient='index', indent=2 )
 """


r3 = open('hero_info.json',)
data3 = json.load(r3)

#for x in data3:
    #print(data3[x]['id'],data3[x]['name'])





#dotadf = pd.DataFrame(hero_list) 
#dotadf.to_json('hero_info.json', orient='index', indent=2 )