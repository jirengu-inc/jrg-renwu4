
var Waterfall = {
    init:function ($nodes,listArr) {
        this.$nodes = $nodes;
        this.nodeW = this.$nodes.outerWidth(true);
        this.listArr = listArr;

        this.initArr();
        this.setCss();
    },
    initArr:function () {
        var me = this;
        var len = me.listArr.length;

        if (len == 0) {            //初次使用列高度数组，全部初始化为0
            var colNum = parseInt(me.$nodes.parent().width() / me.$nodes.outerWidth(true));
            for (var i=0; i<colNum ; i++){
                me.listArr.push(0);
            }
        }
    },
    setCss:function () {
        var me =this;

        me.$nodes.each(function (index, el) {
            var $cur = $(this);
            me.findMin();
            $cur.css({
                left: me.nodeW * me.idx,
                top:me.min
            });
            me.listArr[me.idx] += $cur.outerHeight(true);

        });
    },
    findMin:function () {
        var me = this;
        me.min = me.listArr[0];
        me.idx = 0;

        for (var i = 0, length = me.listArr.length; i < length; i++){
            if (me.listArr[i] < me.min){
                me.min = me.listArr[i];
                me.idx = i;
            }
        }
    }
};