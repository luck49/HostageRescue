/**
 * Created by LJJ on 2015/11/23.
 */
    var No_Hostage = 25;
var HostageSprite = cc.Sprite.extend({
    _bornSprite : null,
    _hostageBatchNode : null,
    ctor: function () {

        this._super();
        this.initBornSprite();

    },

    initBornSprite : function() {

        this._hostageBatchNode = new cc.SpriteBatchNode(res.host_png, 5);
        this.addChild(this._hostageBatchNode, 0, TAG_SPRITE_MANAGER);

        for(var i=0;i<No_Hostage;i++)
        {
            var sprite = new cc.Sprite(this._hostageBatchNode.texture);
            if(i<1)
            {
                sprite.x = TurnPoint_w ;
                sprite.y = TurnPoint_h+90;
            }
            else if(i<4)
            {
                sprite.x = TurnPoint_w+(i-1)*30 - 30 ;
                sprite.y = TurnPoint_h+60;
            }
            else if(i<9)
            {
                sprite.x = TurnPoint_w+(i-4)*30 - 60 ;
                sprite.y = TurnPoint_h+30;
            }
            else if(i<16)
            {
                sprite.x = TurnPoint_w+(i-9)*30 - 90 ;
                sprite.y = TurnPoint_h;
            }
            else if(i<21)
            {
                sprite.x = TurnPoint_w+(i-16)*30 - 60 ;
                sprite.y = TurnPoint_h-30;
            }
            else if(i<24)
            {
                sprite.x = TurnPoint_w+(i-21)*30 - 30 ;
                sprite.y = TurnPoint_h-60;
            }
            else
            {
                sprite.x = TurnPoint_w ;
                sprite.y = TurnPoint_h-90;
            }


            this._hostageBatchNode.addChild(sprite,8);



        }


        //this._bornSprite = new cc.Sprite(res.host_png);
        //this._bornSprite.attr({
        //    x: GC.w_2,
        //    y: GC.h_2
        //});
        //this.setName("Hostage");
        //this.addChild(this._bornSprite);
    }


});

