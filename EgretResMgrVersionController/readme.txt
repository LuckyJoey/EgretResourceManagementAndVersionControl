ͼƬ����Դ�汾���ƣ����ַ�ʽ
1.ͨ��CRC
ͨ��ResDepot������Դ��ÿ����Դ���ƻ��Զ����CRC��
a.��Դͨ��Ԥ����(����)����Ϸ��ͨ��RES.getRes("")��RES.getResAsync()��ȡ��Դ��default.res.json�е�name��

2.ͨ��ÿ����Դ�ļ�url��Ӱ汾��
EgretVersionTool��
ѡ��resource�ļ��У���ȡ��Դ���޸�ʱ�䣬����д��default.res.json�е���Դurl��Ӱ汾�ţ�
�汾�ſ�ѡ�޸�ʱ�䡢����svn��ǰ�汾�ŵȡ�

EgretResVersionDemo����Դ������汾����demo

�����汾���ƣ�
a)index.html 
������html�ļ��м��룺
<HEAD> 
<META HTTP-EQUIV="Pragma" CONTENT="no-cache"> 
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache"> 
<META HTTP-EQUIV="Expires" CONTENT="0"> 
</HEAD>
����ֹindex.html�����������
b)�Ӱ汾�ż���default.res.json
   manifest.json�ٷ��Ѿ���index.html����Ӱ汾��
c)main.min.js�ȷ������js�ļ����ٷ�����ʱ����manifest.json���Ѿ�ͨ��crc������˰汾�š�



��ԴԤ���ط�ʽ:
default.res.json��������Դ
RES.loadConfig("resource/default.res.json", "resource/");
RES.loadGroup("preaload");//������Դ��

RES��Դ����ģ�鹲����������Դ��ȡ��ʽ��
RES.getRes(name:string):any
ͬ����ȡ��Դ ���ַ�ʽֻ�ܻ�ȡ�Ѿ����������Դ������֮ǰ���ù�loadGroup()��Ԥ���ص���Դ��
RES.getResAsync(name:string,compFunc:Function,thisObject:any):void
�첽��ȡ��Դ�����ַ�ʽ���Ի�ȡ�����к��е�������Դ���������д��ڣ�ֱ�ӵ��ûص��������أ��������ڣ���������������ļ���������ص���
RES.getResByUrl(url:string,compFunc:Function,thisObject:any,type:string=����):void
ͨ��url��ȡ���������е���Դ��ͨ��������ʹ������ӿڣ�ֻ����Щ��������д�������У������ȡ��������������������Դʱ���Ų������ַ�ʽ��


author:mawentao@galaxymx.com
2020.04.03
