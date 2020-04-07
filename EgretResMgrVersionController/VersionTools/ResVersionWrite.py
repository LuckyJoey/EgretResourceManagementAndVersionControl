#生成CRC32校验码，作为资源版本号，在资源配置json文件写入

from ctypes import * 
import binascii 

def getFileCRC(_path): 
    try: 
        blocksize = 1024 * 64 
        f = open(_path,"rb") 
        str = f.read(blocksize) 
        crc = 0 
        while len(str) != 0: 
            crc = binascii.crc32(str, crc) 
            str = f.read(blocksize) 
        f.close() 
    except:
        print("get file crc error!")
        return 0
    return "%08X" % (crc & 0xFFFFFFFF)

import sys
import os
import json
import re
import tkinter as tk
from tkinter import filedialog
root = tk.Tk()
root.withdraw()
Filepath = filedialog.askopenfilenames(title='选择资源配置json文件，可多选', filetypes=[('Json', '*.json')]) #获得选择好的文件

fileLen = len(Filepath)
if fileLen == 0:
    input('未选择文件\n')
    exit(0)

print('选择的文件:')
for i in range(0,fileLen):
    print(Filepath[i])

def writefiles():
    for i in range(0,fileLen):
        filePath = Filepath[i]
        with(open(filePath, 'r',encoding='UTF-8')) as fp:
            data = json.load(fp)
        if 'resources' in data:
            resources = data['resources']
            if type(resources) == list:
                resourceDir = os.path.dirname(filePath)
                for j in range(0,len(resources)):
                    resource = resources[j]
                    if type(resource) == dict and type(resource['url']) == str:
                        str_list = re.split(r'\?', resource['url'])
                        resFilepath = resourceDir + '/' + str_list[0]
                        resource['url'] = '{0}?v={1}'.format(str_list[0],getFileCRC(resFilepath))
            jsonStr = json.dumps(data, ensure_ascii=False,indent = 2)
            with(open(filePath, 'w',encoding='UTF-8')) as fp:
                fp.write(jsonStr)
                print('写入成功',filePath)

writefiles()

input('finished!')