var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Version = (function () {
    function Version() {
        this.urlObj = {};
    }
    Object.defineProperty(Version, "Instance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new Version();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    Version.prototype.VersionInit = function () {
        RES.getResByUrl("resource/resourceVersion.txt?v=" + Math.random(), this.OnVersionTxt, this, RES.ResourceItem.TYPE_TEXT);
    };
    Version.prototype.OnVersionTxt = function (version) {
        //切割出每一条资源
        var arys = version.split(";");
        var len = arys.length;
        for (var i = 0; i < len - 1; i++) {
            //分析出url和版本号
            //console.log("version:" + arys[i]);
            var temp = arys[i].split(",");
            //console.log("version string:" + temp[0]+" "+temp[1]);
            this.urlObj[temp[0]] = temp[1];
        }
        var v = new EgretVersion("2020", this.urlObj);
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
    };
    Version.prototype.OnConfigComplete = function () {
        //console.log(RESMgr.getResByUrl("assets/egret_icon.png"));
    };
    return Version;
}());
__reflect(Version.prototype, "Version");
var EgretVersion = (function () {
    function EgretVersion(defaultVersion, urlObj) {
        this.defaultVersion = defaultVersion;
        this.urlObj = urlObj;
    }
    EgretVersion.prototype.init = function () {
        return Promise.resolve();
    };
    EgretVersion.prototype.getVirtualUrl = function (url) {
        //把程序里使用到的url增加相应的版本号
        var version = this.urlObj[url];
        if (version) {
            url = url + "?v=" + version;
        }
        else {
            //使用默认版本号
            url = url + "?v=" + this.defaultVersion;
        }
        console.log("带有版本号的url:" + url);
        return url;
    };
    return EgretVersion;
}());
__reflect(EgretVersion.prototype, "EgretVersion", ["RES.VersionController", "RES.IVersionController"]);
//# sourceMappingURL=Version.js.map