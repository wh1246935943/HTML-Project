/**
 * Created by wanghao on 2017/6/16.
 */
//点击手机屏幕的顶部导航按钮，顶部右边文字上下居中
$("#showBtnSelect").click(function () {
    $("#StarBoo").hide();
    $("#StarBoo").toggleClass("top-btn-showStar");
    $("#StarBoo").slideDown(300)
});
