function VCarousel(opts) {
    this.wrap = opts.wrap || $('body');
    this.carousel = null;
    this.imgItems = null;
    this.switchItems = null;
    this.listSize = 0;
    this.mainImgItem = null;
    this.mainSwitchItem = null;
    this.itemWidth = 365;//图片宽度
    this.init(opts.data);
}

VCarousel.prototype = {
    init: function(data){
        //页面初始化
        this.carousel = $('<div class="carousel"><div class="img-list"></div><ul class="switch-list"></ul></div>');
        this.wrap.append(this.carousel);
        this.imgList = $('.img-list');
        this.switchList = $('.switch-list');
        var imgListTpl = '',
        switchListTpl = ''; 
        for (var i = 0; i < data.length; i++) {
            imgListTpl += '<a data-index=' + i + ' data-url="' + data[i].url + '" class="img-item"><img src="' + data[i].img + '"><div class="img-modal"></div></a>';
            switchListTpl += '<li data-index=' + i + ' class="switch-item"></li>';
        }
        this.imgList.append($(imgListTpl));
        this.switchList.append($(switchListTpl));
        this.listSize = $('.img-item').size();
        
        this.mainImgItem = $('.img-item[data-index=' + 0 + ']');
        this.mainSwitchItem = $('.switch-item[data-index=' + 0 + ']');
        this.turnAround(0);
        this.addStyle();
        this.bindEvent();
    },
    bindEvent: function(){
        var self = this;
        $('.img-list').on('click',function(e) {
            e.stopPropagation();
            console.log(self);
            var index = $($(e.target).parent()).attr('data-index');

            self.switchItem(index);
        });

        $('.switch-item').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var index = $(e.target).attr('data-index');
            self.switchItem(index);
        });
    },
    clearStyle: function(){

        this.mainSwitchItem.removeClass('switch-item-active');
        this.mainImgItem.removeClass('main-img-item');
    },
    addStyle: function(){

        this.mainSwitchItem.addClass('switch-item-active');
        this.mainImgItem.addClass('main-img-item');
    },
    switchItem: function(index) {
        index = parseInt(index);
        var oldIndex = this.mainImgItem.attr('data-index');
        console.log('this is oldIndex' + oldIndex);
        this.clearStyle();
        this.mainSwitchItem = $('.switch-item[data-index=' + index + ']');
        this.mainImgItem = $('.img-item[data-index=' + index + ']');
        var rotate = 360 / this.listSize;
        var listSize = this.listSize;
        this.addStyle();

        var j = (index + listSize)%listSize;
        var m = 1;
        console.log(this.itemWidth);
        $('.img-list').css(
            "transform" ,"rotateY("+ (-(j) * rotate) +"deg)"
            );
        console.log('this is new'+ this.mainImgItem.attr('data-index')); 
    },
    turnAround:function(index){
        var rotate = 360 / this.listSize;
        var transZ = (this.itemWidth/2) / Math.tan((rotate / 2 / 180) * Math.PI);
        var listSize = this.listSize;
        $('.img-item').each(function(e){
         var  $self = $(this);
         var i = parseInt($self.attr('data-index'));
         var j = (listSize + i-index)%(listSize);
         $self.css(
            // "transform" ,"rotateY("+ j * rotate +"deg) translateZ("+ (transZ + 20) +"px)"
            "transform" ,"rotateY("+ j * rotate +"deg) translateZ("+ (transZ + 30) +"px)"
            
            );
     });
    }
}