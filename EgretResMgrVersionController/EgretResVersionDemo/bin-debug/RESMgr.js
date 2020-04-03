var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 资源管理 mwt 2020.04.03
 */
var RESMgr = (function () {
    function RESMgr() {
    }
    Object.defineProperty(RESMgr, "Instance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new RESMgr();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 加载配置文件
     */
    RESMgr.prototype.loadConfig = function (loadConfigCompleteFunc) {
        this.loadConfigCompleteFunc = loadConfigCompleteFunc;
        //添加资源配置加载完成事件
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //加载配置
        return RES.loadConfig("resource/default.res.json?v=" + Math.floor(Math.random() * 10000), "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    RESMgr.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        if (this.loadConfigCompleteFunc) {
            this.loadConfigCompleteFunc();
        }
    };
    /**
     * 加载资源组
     */
    RESMgr.prototype.loadGroup = function (name, priority, reporter, loadGroupCompleteFunc) {
        this.loadGroupCompleteFunc = loadGroupCompleteFunc;
        //添加资源组加载完成事件
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        //添加资源组加载失败事件
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        //添加资源加载失败事件
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onResourceItemLoadError, this);
        //添加资源组加载进度事件
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        return RES.loadGroup(name, priority, reporter);
    };
    /**
     * 资源组加载完成
     */
    RESMgr.prototype.onResourceLoadComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceItemLoadError, this);
        this.trace(event.groupName + "组加载完成");
        if (this.loadGroupCompleteFunc) {
            this.loadGroupCompleteFunc();
        }
    };
    /**
     * 资源组加载进度
     * Loading process of preload resource group
     */
    RESMgr.prototype.onResourceProgress = function (event) {
        this.trace(event.groupName + "资源加载进度 : " + event.itemsLoaded + " / " + event.itemsTotal);
    };
    /**
     * 资源组加载出错
     */
    RESMgr.prototype.onResourceLoadError = function (event) {
        egret.error("组加载失败");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);
    };
    /**
     * 资源加载出错
     */
    RESMgr.prototype.onResourceItemLoadError = function (event) {
        egret.error("项目加载失败,url : " + event.resItem.url);
    };
    RESMgr.prototype.trace = function (msg) {
        //egret.log(msg);
    };
    return RESMgr;
}());
__reflect(RESMgr.prototype, "RESMgr");
//# sourceMappingURL=RESMgr.js.map