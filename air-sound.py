import requests
import json
import time
import datetime
from random import randint
while True:
	now = datetime.datetime.now()
	data = {}
	data["date"] = str(now.day) + "-" + str(now.month) + "-" + str(now.year)
	data["time"] = str(now.hour) + ":" + str(now.minute) + ":" + str(now.second)
	data["air"] = randint(0,400)
	data["sound"] = randint(0,3)
	result = json.dumps(data)
	time.sleep(2)
	requests.post("http://localhost:8080/air-sound",{"result":result})
	print("sent data " + str(result))
