/**
 * Created by LJJ on 2015/11/23.
 */
var time = 1;
var listener;
var TPSprite;
var TurnPlateSprite = cc.Sprite.extend({
    _bornSprite : null,
    _Radius : null,
    _Texture : null,

    ctor: function() {

        this._super();
        TPSprite = this;
        this.initBornSprite();
        this.initListen();


    },

    initBornSprite: function () {
        this._bornSprite = new cc.Sprite(res.tp_png);
        var anchor = this._bornSprite.getAnchorPoint();
        cc.log("anchor : ", anchor);
        this._bornSprite.attr({
            x: TurnPoint_w,
            y: TurnPoint_h
        });

        this.setName("turn plate");
        this._Radius = 150;
        this.addChild(this._bornSprite);



    },

    isTouchInPlate: function (touch) {
        var getPoint = touch.getLocation();
        var delt_x = getPoint.x-GC.w_2;
        var delt_y = getPoint.y-GC.h_2;
        cc.log("1111");
        if(delt_x*delt_x+delt_y*delt_y < this._Radius * this._Radius)
            return true;
        else
            return false;
    },


    initListen : function(){
        listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : false,
            onTouchBegan: this.TouchAction,

            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
                cc.log("onTouchend");

            },
            onTouchCancelled : function(touch, event){
                var target = event.getCurrentTarget();
            }


        });
        cc.eventManager.addListener(listener, this);


    },

    TouchAction: function (touch, event) {
        var target = event.getCurrentTarget();
        cc.log("onTouch:",target);
        if (!target.isTouchInPlate(touch)){
            return false;
        }
        cc.log("onTouch");

        time = setTimeout(TurnPlateSprite.timerOver,700);

        listener.onTouchBegan = this.donothing;


        GPShootLayer.initfbaction(touch);
        return true;
    },

    donothing : function() {
        cc.log("onTouch");
        return true;
    }
});

TurnPlateSprite.timerOver= function() {
    cc.log("timerOver");
    listener.onTouchBegan = TPSprite.TouchAction;
}