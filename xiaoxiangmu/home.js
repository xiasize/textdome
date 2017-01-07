/**
 * Created by qingyun on 16/12/30.
 */
var a=5;
var c=10;
var b=function () {
    console.log(a+"我是方法");
}
module.exports={xxx:a,yyy:b};//输出让别人引用你的东西返回时一个对象
