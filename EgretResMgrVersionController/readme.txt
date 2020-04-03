图片等资源版本控制：两种方式
1.通过CRC
通过ResDepot发布资源，每个资源名称会自动添加CRC码
a.资源通过预加载(分组)进游戏，通过RES.getRes("")、RES.getResAsync()获取资源（default.res.json中的name）

2.通过每个资源文件url添加版本号
EgretVersionTool：
选择resource文件夹，获取资源的修改时间，并且写入default.res.json中的资源url添加版本号，
版本号可选修改时间、或者svn当前版本号等。

EgretResVersionDemo：资源管理与版本控制demo

其他版本控制：
a)index.html 
可以在html文件中加入：
<HEAD> 
<META HTTP-EQUIV="Pragma" CONTENT="no-cache"> 
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache"> 
<META HTTP-EQUIV="Expires" CONTENT="0"> 
</HEAD>
来阻止index.html被浏览器缓存
b)加版本号加载default.res.json
   manifest.json官方已经在index.html中添加版本号
c)main.min.js等发布后的js文件，官方发布时，在manifest.json，已经通过crc码添加了版本号。



资源预加载方式:
default.res.json中配置资源
RES.loadConfig("resource/default.res.json", "resource/");
RES.loadGroup("preaload");//加载资源组

RES资源管理模块共含有三种资源获取方式：
RES.getRes(name:string):any
同步获取资源 这种方式只能获取已经缓存过的资源，例如之前调用过loadGroup()被预加载的资源。
RES.getResAsync(name:string,compFunc:Function,thisObject:any):void
异步获取资源，这种方式可以获取配置中含有的所有资源项。如果缓存中存在，直接调用回调函数返回，若不存在，就启动网络加载文件并解析后回调。
RES.getResByUrl(url:string,compFunc:Function,thisObject:any,type:string=””):void
通过url获取不在配置中的资源，通常不建议使用这个接口，只有那些不合适填写在配置中，比如获取网络上其他服务器的资源时，才采用这种方式。


author:mawentao@galaxymx.com
2020.04.03
