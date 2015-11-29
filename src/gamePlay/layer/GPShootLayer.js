/**
 * Created by LJJ on 2015/11/22.
 */
var g_GPShoot;

var GPShootLayer = cc.Layer.extend({
    _Dart : null,

    ctor : function(){
        this._super();
        g_GPShoot = this;

        this.initDart();


    },

    initDart : function() {
        this._Dart = new Dart();
        this.addChild(this._Dart,8);
    },
    initTurnPlateDart : function(pp){
        GPTurnPlate.initfb(pp);
    },
    removeFromParentAndCleanup:function (nodeExecutingAction, data) {
        nodeExecutingAction.removeFromParent(data);
    }

});

GPShootLayer.initfbaction = function(touch) {
    var dd = touch.getLocation();
    //var pp = g_GPTurnPlate.convertToNodeSpace(dd);
    var onComplete = cc.callFunc(g_GPShoot.initTurnPlateDart, g_GPShoot, dd);

    var batch = g_GPShoot._Dart._dartBatchNode;
    cc.log("initfbaction");
    var sprite = new cc.Sprite(batch.texture);
    batch.addChild(sprite);
    sprite.setSkewX(135);
    sprite.x = 320;
    sprite.y = 0;
    var action = cc.spawn(cc.moveTo(1, cc.p(dd.x, dd.y)),
                                cc.rotateBy(1, -720));
    var seqAction = cc.sequence(action, cc.callFunc(g_GPShoot.removeFromParentAndCleanup, sprite, true),onComplete);

    sprite.runAction(seqAction);

}




