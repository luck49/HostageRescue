/**
 * Created by LJJ on 2015/11/23.
 */

var Dart = cc.Sprite.extend({
    _dartBatchNode : null,

    ctor: function () {

        this._super();

        this._dartBatchNode = new cc.SpriteBatchNode(res.fb_png, 5);
        //this._dartBatchNode.x=320;
        //this._dartBatchNode.y=0;
        this.addChild(this._dartBatchNode, 0, TAG_SPRITE_MANAGER);

    }

});



