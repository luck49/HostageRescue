/**
 * Created by LJJ on 2015/11/23.
 */

var TurnPlateSprite = cc.Sprite.extend({
    _bornSprite : null,
    _Radius : null,
    _Texture : null,

    ctor: function() {

        this._super();

        this.initBornSprite();
        this.initListen();


    },

    initBornSprite: function () {
        this._bornSprite = new cc.Sprite(res.tp_png);
        this._bornSprite.attr({
            x: GC.w_2,
            y: GC.h_2
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
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : false,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                cc.log("onTouch:",target);
                if (!target.isTouchInPlate(touch)){
                    return false;
                }
                cc.log("onTouch");
                GPTurnPlate.initfb(touch);
                return true;
            },
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
            },
            onTouchCancelled : function(touch, event){
                var target = event.getCurrentTarget();
            }
        });
        cc.eventManager.addListener(listener, this);


    }



});

