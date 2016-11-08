cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

    },
    
    todenglu1: function(){
        cc.director.loadScene('denglu');
    },
    
    tozhuce1: function(){
        cc.director.loadScene('zhuce');
    },
    
    todenglu: function(){
        cc.director.loadScene('denglu');
    },
    
    tofengmian: function(){
        cc.director.loadScene('fengmian_fuwuqi');
    },
    
    tochenggong: function(){
        cc.director.loadScene('zhucechenggong');
    },
    
    tozhaihui: function(){
        cc.director.loadScene('zhaohui');
    },
    
    tozhaohuiyouxiang: function(){
        cc.director.loadScene('zhaohui_youxiang');
    },
    
    tozhaohuizhanghao: function(){
        cc.director.loadScene('zhaohui_zhanghao');
    },
    
    tofaxian1: function(){
        cc.director.loadScene('faxian1');
    },
    
    tofaxian2: function(){
        cc.director.loadScene('faxian2');
    },
    
    tojianchagengxin: function(){
        cc.director.loadScene('jianchagengxin');
    },
    
    tojindutiao: function(){
        cc.director.loadScene('jindutiao');
    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
