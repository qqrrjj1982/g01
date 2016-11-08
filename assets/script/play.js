cc.Class({
    extends: cc.Component,
    
    
    
    properties: {
        anim: cc.Animation
    },

    // use this for initialization
    onLoad: function () {
     
    },
    
    panim: function(){
        
        this.anim.play('fuwuqixuanze');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
