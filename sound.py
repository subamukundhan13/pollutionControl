import requests
import json
import time
import datetime
value = 0
while True:
    if value==0:
        value=value+1
        res="LOW"
    else:
        value=value-1
        res="HIGH"
    now = datetime.datetime.now()
    data = {}
    data["date"] = str(now.day) + "-" + str(now.month) + "-" + str(now.year)
    data["time"] = str(now.hour) + ":" + str(now.minute) + ":" + str(now.second)
    data["value"] = value
    data["result"] = res
    result = json.dumps(data)
    time.sleep(2)
    requests.post("http://localhost:8080/sound",{"result":result})
    print("sent data: "+ str(result))