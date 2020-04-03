class Version
{
	private static instance:Version;	
	public static get Instance():Version
	{
		if(this.instance==null)
		{
			this.instance = new Version();
		}
		return this.instance;
	}
	public urlObj:Object = {};
	public VersionInit():void
	{
		RES.getResByUrl("resource/resourceVersion.txt?v="+Math.random(),this.OnVersionTxt,this,RES.ResourceItem.TYPE_TEXT);
	}
	private OnVersionTxt(version:string):void
	{
		//切割出每一条资源
		var arys:string[] = version.split(";");
		var len:number = arys.length;
		for(var i:number = 0; i < len-1; i++)
		{
			//分析出url和版本号
			//console.log("version:" + arys[i]);
			var temp:string[] = arys[i].split(",");
			//console.log("version string:" + temp[0]+" "+temp[1]);
			this.urlObj[temp[0]] = temp[1];
		}
		let v = new EgretVersion("2020",this.urlObj);
		RES.registerVersionController(v);
		//初始化Resource资源加载库
		//initiate Resource loading library
		//RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.OnConfigComplete, this);
		//RES.loadConfig("resource/default.res.json", "resource/");

		//console.log(RES.getResByUrl("resource/assets/egret_icon.png"));

		//console.log(RES.getVirtualUrl("resource/assets/egret_icon.png"));
		
		console.log(RES.getRes("egret_icon_png"));

		//console.log(RES.getVirtualUrl("resource/assets/egret_icon.png?v=100"));

		//let image = new eui.Image();
		//image.source = RES.getVirtualUrl("assets/egret_icon.png");
		
		//RES.getVirtualUrl("assets/ProgressBar/track_pb.png");
		//RES.getVirtualUrl("track_pb_png");
	}
	private OnConfigComplete():void
	{
		//console.log(RESMgr.getResByUrl("assets/egret_icon.png"));
	}
}
class EgretVersion implements RES.VersionController
{
    /** key是url，value是版本号 **/
    public urlObj:Object;
    /** 默认版本号 */
    private defaultVersion:string;
	constructor(defaultVersion:string,urlObj:Object)
	{
		this.defaultVersion = defaultVersion;
		this.urlObj = urlObj;
	}
	init(): Promise<void>
	{
        return Promise.resolve();
	}
    getVirtualUrl(url:string):string
    {
        //把程序里使用到的url增加相应的版本号
        var version:string = this.urlObj[url];
        if(version)
        {
            url = url + "?v=" + version;
        }
        else
        {
            //使用默认版本号
            url = url + "?v=" + this.defaultVersion;
        }
        console.log("带有版本号的url:" + url);
        return url;
    }
}