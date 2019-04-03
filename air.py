import requests
import json
import time
import datetime
value = 100
while True:
	j=5
	now = datetime.datetime.now()
	data = {}
	data["date"] = str(now.day) + "-" + str(now.month) + "-" + str(now.year)
	data["time"] = str(now.hour) + ":" + str(now.minute) + ":" + str(now.second)
	data["value"] = value
	result = json.dumps(data)
	time.sleep(0.5)
	requests.post("http://localhost:8080/realtime",{"result":result})
	print("sent data " + str(result))
	value = value+j