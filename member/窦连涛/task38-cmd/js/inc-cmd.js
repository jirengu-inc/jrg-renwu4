

define(function(){
  var inc = (function(){
      var a = 1 ;

      function inc(){
        a++;
      }

      function get(){
        return a;
      }

      return{
        inc:inc,
        get:get
      };
  })();
  return inc;
});
