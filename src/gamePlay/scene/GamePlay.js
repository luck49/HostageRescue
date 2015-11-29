/**
 * Created by LJJ on 2015/11/22.
 */


var PlayLayer = cc.Layer.extend({

    _BackGround_layer:null,
    _TurnPlate_layer:null,
    _ShootLayer:null,

    ctor:function () {
        this._super();
        var size = cc.winSize;
        var GameLabel = new cc.LabelTTF("Hostage Rescue", "Arial", 38);
        // position the label on the center of the screen
        GameLabel.x = size.width / 2;
        GameLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(GameLabel, 5);

        this.addBackgroundLayer();

        this.addTurnPlate();

        this.addShootLayer();

    },

    addBackgroundLayer : function(){
        //this._BackGround_layer = new GPBackgroundLayer();
        //this.addChild(this._BackGround_layer);
        this._BackGround_layer = new cc.LayerColor(cc.color(24, 122, 71));
        this.addChild(this._BackGround_layer);
        var layer = new cc.LayerColor(cc.color(0, 0, 0));
        layer.setContentSize(320,90);
        this.addChild(layer,5);
    },

    addTurnPlate : function(){
        this._TurnPlate_layer = new GPTurnPlate();
        this.addChild(this._TurnPlate_layer);
    },

    addShootLayer : function(){
        this._ShootLayer = new GPShootLayer();
        this.addChild(this._ShootLayer,50);
    }
});

var HostageRescueScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new PlayLayer();
        this.addChild(layer);
    }
});

