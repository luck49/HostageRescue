/**
 * Created by LJJ on 2015/11/23.
 */

var GPTurnPlate = cc.Layer.extend({
    _TurnPlate : null,
    _Hostage : null,
    _HandCuff : null,
    ctor : function(){

        this._super();

        this.initTurnPlate();

        this.initHostage();

        this.initHandCuff();

        this.Rotate();

    },

    initTurnPlate : function(){
        this._TurnPlate = new cc.Sprite(res.tp_png);
        this._TurnPlate.attr({
            x: GC.w_2,
            y: GC.h_2
        });
        this.addChild(this._TurnPlate);


    },

    initHostage : function(){
        this._Hostage = new cc.Sprite(res.host_png);
        this._Hostage.attr({
            x: GC.w_2,
            y: GC.h_2
        });
        this.addChild(this._Hostage);
    },

    initHandCuff : function(){
        this._HandCuff = new cc.Sprite(res.handcaf_png);
        this._HandCuff.attr({
            x: GC.w_2-60,
            y: GC.h_2-60
        });
        this.addChild(this._HandCuff);

    },

    Rotate : function() {
        var rotation = cc.rotateBy(1, 90).repeatForever();
        rotation.setTag(99);

        // 运行一个动作
        this.runAction(rotation);
    }

});
