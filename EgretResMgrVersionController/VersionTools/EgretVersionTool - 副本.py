# -*- coding: UTF8 -*-
#版本控制文件生成 mwt 2020.04.03
import time
import datetime
import os
import tkinter as tk
from tkinter import filedialog
import json
#获取文件的大小,结果保留两位小数，单位为MB'''
def get_FileSize(filePath):
	filePath = str(filePath)
	fsize = os.path.getsize(filePath)
	fsize = fsize / float(1024*1024)
	return round(fsize,2)
#获取文件的访问时间
def get_FileAccessTime(filePath):
	filePath = str(filePath)
	t = os.path.getatime(filePath)
	return TimeStampToTime(t)	
#获取文件的创建时间	
def get_FileCreateTime(filePath):
	filePath = str(filePath)
	t = os.path.getctime(filePath)
	return TimeStampToTime(t)	
#把时间戳转化为时间: 1479264792 to 2016-11-16 10:53:12	
def TimeStampToTime(timestamp):
	timeSturct = time.localtime(timestamp)
	return time.strftime('%Y-%m-%d %H:%M:%S',timeSturct)
#获取文件的修改时间
def get_FileModifyTime(filePath):
	filePath = str(filePath)
	t = os.path.getmtime(filePath)
	return str(t)
root = tk.Tk()
root.withdraw()
#filepath = filedialog.askopenfilenames(title)
#打开对话框，选择文件夹
folderpath = filedialog.askdirectory()
print(folderpath) 
path = folderpath
g=os.walk(path)
#获取所有资源的当前最新修改时间
conDict={}	
#f = path+"./resourceversion.txt"
#print(path)
#file = open(f,'w')
for path,dir_list,file_list in g:
	for file_name in file_list:
		newpath = os.path.join(path,file_name).split('resource\\')[1].replace("\\","/")
		#过滤文件
		if(newpath.endswith('.png')|newpath.endswith('.jpg')|newpath.endswith('.fnt')):
			newFileName = file_name.replace(".","_")	
			info = newpath +","+get_FileModifyTime(os.path.join(path,file_name)).replace(".","")+";"
			conDict[newFileName] = get_FileModifyTime(os.path.join(path,file_name)).replace(".","")
			print(info)
			#file.write(info+"\n")		
	#for dir_name in dir_list:
		#print("文件夹"+os.path.join(path,dir_name))
#file.close()	
print("=================")	
#写入default.res.json文件
defResJson = folderpath+"./default.res.json"	
resJsonFile = open(defResJson,"r+")
#print(resJsonFile.read())
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
#转成json字符串，并且格式化换行	
txt = json.dumps(resJson,indent=4)
#清空文本
resJsonFile.seek(0)
resJsonFile.truncate()
#写入json
resJsonFile.write(txt)
resJsonFile.close()		