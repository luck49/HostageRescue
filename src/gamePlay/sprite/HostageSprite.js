/**
 * Created by LJJ on 2015/11/23.
 */
var HostageSprite = cc.Sprite.extend({
    _bornSprite : null,

    ctor: function () {

        this._super();
        this.initBornSprite();

    },

    initBornSprite : function() {
        this._bornSprite = new cc.Sprite(res.host_png);
        this._bornSprite.attr({
            x: GC.w_2,
            y: GC.h_2
        });
        this.setName("Hostage");
        this.addChild(this._bornSprite);
    }


});

