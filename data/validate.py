print()
import json

data=json.load(open("data/temp.geojson"))

out=[]
for i in data["features"]:
    out.append(i["properties"]["AC_NO"])

count=0
message="In geojson file "
flag=False
count=0
for i in range(1,max(out)+1):
    count+=1
    if i not in out:
        count-=1
        flag=True
        message+=(str(i)+", ")
if flag:
    message=message[:-2]+" are missing and"
message+=("a total of "+str(count)+" polygons are present")
print(message)

#------------json------------------

data=json.load(open("data/temp.json"))

out=[]
for i in data["data"]:
    out.append(int(i))

count=0
message="In json file "
flag=False
count=0
for i in range(1,max(out)+1):
    count+=1
    if i not in out:
        count-=1
        flag=True
        message+=(str(i)+", ")
if flag:
    message=message[:-2]+" are missing and "
message+=("a total of "+str(count)+" polygons are present")
print(message)
print()