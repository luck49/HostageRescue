/**
 * Created by LJJ on 2015/11/23.
 */

var g_GPTurnPlate;

var GPTurnPlate = cc.Layer.extend({
    _TurnPlate : null,
    _Hostage : null,
    _HandCuff : null,
    _Dart : null,
    ctor : function(){

        this._super();

        this.initTurnPlate();

        this.initHostage();

        this.initHandCuff();

        this.initDart();

        this.Rotate();

        g_GPTurnPlate = this;
    },

    initTurnPlate : function(){
        this._TurnPlate = new TurnPlateSprite();
        this.addChild(this._TurnPlate,4);
    },

    initHostage : function(){
        this._Hostage = new HostageSprite();
        this.addChild(this._Hostage,5);

    },

    initHandCuff : function(){
        this._HandCuff = new HandCuffSprite();

        this.addChild(this._HandCuff,6);
    },

    initDart : function() {
        this._Dart = new Dart();
        this.addChild(this._Dart,7);
    },

    Rotate : function() {
        var rotation = cc.rotateBy(1, 90).repeatForever();
        rotation.setTag(99);

        // 运行一个动作
        this.runAction(rotation);
    },


});

GPTurnPlate.initfb = function(dd) {
    cc.log("test.",dd);
    //var dd = touch.getLocation();
    var pp = g_GPTurnPlate.convertToNodeSpace(dd);
    //var fd = new cc.Sprite(res.fb_png);

    //var batch = g_GPTurnPlate._Dart.getChildByTag(TAG_SPRITE_MANAGER);
    var batch = g_GPTurnPlate._Dart._dartBatchNode;
    var sprite = new cc.Sprite(batch.texture);
    batch.addChild(sprite);
    sprite.setPosition(pp.x,pp.y);

}

