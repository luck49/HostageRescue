/**
 * Created by LJJ on 2015/11/22.
 */

var GPTouchLayer = cc.Layer.extend({


    ctor : function(){
        this._super();




    },


    initListen : function(target){
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
                return true;
            },
            onTouchEnded: function (touch, event) {
                cc.log("onTouchend");
            },
            onTouchCancelled : function(touch, event){
                cc.log("onTouchCancelled");
            }
        });
        cc.eventManager.addListener(listener, target);


    }



});







