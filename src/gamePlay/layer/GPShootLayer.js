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

    var sprite = new cc.Sprite(batch.texture);
    batch.addChild(sprite);
    sprite.x = dd.x+20;
    sprite.y = dd.y+20;
    var action = cc.moveTo(1, cc.p(dd.x, dd.y));
    var seqAction = cc.sequence(action, cc.callFunc(g_GPShoot.removeFromParentAndCleanup, sprite, true),onComplete);

    sprite.runAction(seqAction);

}




