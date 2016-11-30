require.config({
      baseUrl : './js',
      paths : {
            jquery : 'lib/1.9.1jquery'
      },
});

require(['jquery','app/carousel','app/LoadNews','app/LazyLoad','app/GoTop','app/Fixed','app/Location'],
            function($,carousel,LoadNews,LazyLoad,GoTop,Fixed,Location){
                              carousel.open();
                              new  LoadNews();
                              new LazyLoad();
                              new GoTop();
                              new Fixed();
                              new Location();
});
