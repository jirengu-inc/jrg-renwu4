define(['inc-cmd'],function(Inc){
  //依赖于inc-cmd这个模块
  console.log(Inc.get());
  Inc.inc();
  console.log(Inc.get());
  Inc.inc();
  console.log(Inc.get());
})
