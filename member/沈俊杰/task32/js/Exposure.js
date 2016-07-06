
var Exposure = {

    init:function ($target,handler) {
        this.$target = $target;
        this.handler = handler;
        this.$win = $(window);

        this.bind();
        this.checkShow();
    },
    bind:function () {      //绑定事件
        var me = this;
        var clock = null;
        var delayTime = 300;

        this.$win.on("scroll",function (e) {
            clock && clearTimeout(clock);
            clock = setTimeout(function () {
                me.checkShow();
            },delayTime);
        });
    },
    checkShow:function () {    //如果可见 执行回调函数，handler()
        var me = this;
        me.$target.each(function () {
            var $cur = $(this);
            if (!me.isDone($cur)) return; //如果上次事件未执行完毕，直接跳过
            if (me.isShow($cur)){
                me.handler && me.handler();
            }
        });
    },
    isShow:function ($node) {
        return this.$win.height() + this.$win.scrollTop() > $node.offset().top ;
    },
    isDone:function ($node) {
        return $node.data("isDone");
    }
};