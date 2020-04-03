# -*- coding: UTF8 -*-
#版本控制文件生成 mwt 2020.04.03
import time
import datetime
import os
import tkinter as tk
from tkinter import filedialog
import json
#获取文件的修改时间
def get_FileModifyTime(filePath):
	filePath = str(filePath)
	t = os.path.getmtime(filePath)
	return str(t)
root = tk.Tk()
root.withdraw()
folderpath = filedialog.askdirectory()
print(folderpath) 
path = folderpath
g=os.walk(path)
#获取所有资源的当前最新修改时间
conDict={}	
for path,dir_list,file_list in g:
	for file_name in file_list:
		newpath = os.path.join(path,file_name).split('resource\\')[1].replace("\\","/")
		#过滤文件类型
		if(newpath.endswith('.png')|newpath.endswith('.jpg')|newpath.endswith('.fnt')):
			newFileName = file_name.replace(".","_")	
			info = newpath +","+get_FileModifyTime(os.path.join(path,file_name)).replace(".","")+";"
			conDict[newFileName] = get_FileModifyTime(os.path.join(path,file_name)).replace(".","")
			print(info)
print("=================")	
#读取default.res.json文件，修改版本号
defResJson = folderpath+"./default.res.json"	
resJsonFile = open(defResJson,"r+")
resJson = json.load(resJsonFile)
for dict in resJson["resources"]:
	print(dict["name"])
	if(dict["name"] in conDict):
		newUrl = dict["url"]	
		if("?v=" in newUrl):
			newUrls = newUrl.split("?v=")
			print("newUrls:"+newUrls[0])
			#更新版本号
			dict["url"] = newUrls[0]+"?v="+conDict[dict["name"]]
		else:
    		#第一次添加版本号	
			dict["url"] = dict["url"]+"?v="+conDict[dict["url"]]
			print("firstV："+dict["url"])
	
for dict in resJson["resources"]:
	print(dict["url"])
#转成json字符串，并写入default.res.json
txt = json.dumps(resJson,indent=4)
resJsonFile.seek(0)
resJsonFile.truncate()
resJsonFile.write(txt)
resJsonFile.close()		