var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{c(n.next(e))}catch(t){i(t)}}function a(e){try{c(n["throw"](e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(s,a)}c((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,i&&(s=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(s=s.call(i,r[1])).done)return s;switch(i=0,s&&(r=[0,s.value]),r[0]){case 0:case 1:s=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,i=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(s=c.trys,!(s=s.length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){c.label=r[1];break}if(6===r[0]&&c.label<s[1]){c.label=s[1],s=r;break}if(s&&c.label<s[2]){c.label=s[2],c.ops.push(r);break}s[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(n){r=[6,n],i=0}finally{o=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,i,s,a,c={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,r){function n(n){t.call(r,n,e)}if(RES.hasRes(e)){var o=RES.getRes(e);o?n(o):RES.getResAsync(e,n,this)}else RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),[2]}})})},t.prototype.CreateGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return this.createGameScene(),[4,RES.getResAsync("description_json")];case 1:return e=r.sent(),this.startAnimation(e),[4,platform.login()];case 2:return r.sent(),[4,platform.getUserInfo()];case 3:return t=r.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r=this;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RESMgr.Instance.loadConfig()];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RESMgr.Instance.loadGroup("preload",0,e,function(){r.CreateGame()})];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,r){var n=new eui.Theme("resource/default.thm.json",e.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=this.createBitmapByName("bg_jpg");e.name="sky",this.addChild(e);var t=this.stage.stageWidth,r=this.stage.stageHeight;e.width=t,e.height=r;var n=new egret.Shape;n.graphics.beginFill(0,.5),n.graphics.drawRect(0,0,t,172),n.graphics.endFill(),n.y=33,this.addChild(n);var o=this.createBitmapByName("egret_icon_png");this.addChild(o),o.x=26,o.y=33;var i=new egret.Shape;i.graphics.lineStyle(2,16777215),i.graphics.moveTo(0,0),i.graphics.lineTo(0,117),i.graphics.endFill(),i.x=172,i.y=61,this.addChild(i);var s=new egret.TextField;s.textColor=16777215,s.width=t-172,s.textAlign="center",s.text="Hello Egret",s.size=24,s.x=172,s.y=80,this.addChild(s);var a=new egret.TextField;this.addChild(a),a.alpha=0,a.width=t-172,a.textAlign=egret.HorizontalAlign.CENTER,a.size=24,a.textColor=16777215,a.x=172,a.y=135,this.textfield=a;var c=new eui.Button;c.label="Click!",c.horizontalCenter=0,c.verticalCenter=0,this.addChild(c),c.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,r=RES.getRes(e);return t.texture=r,t},t.prototype.startAnimation=function(e){var t=this,r=new egret.HtmlTextParser,n=e.map(function(e){return r.parse(e)}),o=this.textfield,i=-1,s=function(){i++,i>=n.length&&(i=0);var e=n[i];o.textFlow=e;var r=egret.Tween.get(o);r.to({alpha:1},200),r.wait(2e3),r.to({alpha:0},200),r.call(s,t)};s()},t.prototype.onButtonClick=function(e){var t=new eui.Panel;t.title="Title",t.horizontalCenter=0,t.verticalCenter=0,this.addChild(t)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var RESMgr=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return null==this.instance&&(this.instance=new e),this.instance},enumerable:!0,configurable:!0}),e.prototype.loadConfig=function(e){return this.loadConfigCompleteFunc=e,RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.loadConfig("resource/default.res.json?v="+Math.floor(1e4*Math.random()),"resource/")},e.prototype.onConfigComplete=function(e){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),this.loadConfigCompleteFunc&&this.loadConfigCompleteFunc()},e.prototype.loadGroup=function(e,t,r,n){return this.loadGroupCompleteFunc=n,RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,this.onResourceItemLoadError,this),RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.loadGroup(e,t,r)},e.prototype.onResourceLoadComplete=function(e){RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this),RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this),RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this),RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceItemLoadError,this),this.trace(e.groupName+"组加载完成"),this.loadGroupCompleteFunc&&this.loadGroupCompleteFunc()},e.prototype.onResourceProgress=function(e){this.trace(e.groupName+"资源加载进度 : "+e.itemsLoaded+" / "+e.itemsTotal)},e.prototype.onResourceLoadError=function(e){egret.error("组加载失败"),this.onResourceLoadComplete(e)},e.prototype.onResourceItemLoadError=function(e){egret.error("项目加载失败,url : "+e.resItem.url)},e.prototype.trace=function(e){},e}();__reflect(RESMgr.prototype,"RESMgr");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,r,n){function o(e){t.call(n,e)}function i(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),r.call(n))}var s=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(n,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,r){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(n,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var a=e.split("/");a.pop();var c=a.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(n,generateJSON.paths[e])},this):RES.getResByUrl(c,function(r){window.JSONParseClass.setData(r),egret.callLater(function(){t.call(n,generateJSON.paths[e])},s)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(n,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Version=function(){function e(){this.urlObj={}}return Object.defineProperty(e,"Instance",{get:function(){return null==this.instance&&(this.instance=new e),this.instance},enumerable:!0,configurable:!0}),e.prototype.VersionInit=function(){RES.getResByUrl("resource/resourceVersion.txt?v="+Math.random(),this.OnVersionTxt,this,RES.ResourceItem.TYPE_TEXT)},e.prototype.OnVersionTxt=function(e){for(var t=e.split(";"),r=t.length,n=0;r-1>n;n++){var o=t[n].split(",");this.urlObj[o[0]]=o[1]}var i=new EgretVersion("2020",this.urlObj);RES.registerVersionController(i),console.log(RES.getRes("egret_icon_png"))},e.prototype.OnConfigComplete=function(){},e}();__reflect(Version.prototype,"Version");var EgretVersion=function(){function e(e,t){this.defaultVersion=e,this.urlObj=t}return e.prototype.init=function(){return Promise.resolve()},e.prototype.getVirtualUrl=function(e){var t=this.urlObj[e];return e=t?e+"?v="+t:e+"?v="+this.defaultVersion,console.log("带有版本号的url:"+e),e},e}();__reflect(EgretVersion.prototype,"EgretVersion",["RES.VersionController","RES.IVersionController"]);