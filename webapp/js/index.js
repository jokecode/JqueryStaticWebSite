$(function () {
    $("#tabs").tabs();
    $( "#accordion" ).accordion();
    $( "#menu" ).menu();
    // 运行当前选中的特效
    function runEffect(state) {
        if (state === 1) {
            $("#effect2:visible").removeAttr("style").fadeOut();
            $("#effect3:visible").removeAttr("style").fadeOut();
            // 运行特效
            $("#effect1").show('slide', {}, 500, callback);
        }else if (state === 2) {
            $("#effect1:visible").removeAttr("style").fadeOut();
            $("#effect3:visible").removeAttr("style").fadeOut();
            // 运行特效
            $("#effect2").show('slide', {}, 500, callback);
        }else {
            $("#effect1:visible").removeAttr("style").fadeOut();
            $("#effect2:visible").removeAttr("style").fadeOut();
            // 运行特效
            $("#effect3").show('slide', {}, 500, callback);
        }
    }

    // 回调函数
    function callback() {
        setTimeout(function () {
            //$("#effect:visible").removeAttr("style").fadeOut();
        }, 1000);
    }

    // 根据选择菜单值设置特效id="state1"
    $("#state1").click(function () {
        runEffect(1);
        return false;
    });
    $("#state2").click(function () {
        runEffect(2);
        return false;
    });
    $("#state3").click(function () {
        runEffect(3);
        return false;
    });

    hideAllDtlContent();

});
function hideAllDtlContent() {
    $("#effect1").hide();
    $("#effect2").hide();
    $("#effect3").hide();
}
function hideDtlContent(state) {
    if(($('#tabs-1').css('display') || $('#tabs-2').css('display') || $('#tabs-4').css('display')) && (String($('#tabs-1').css('display')) === 'none' || String($('#tabs-2').css('display')) === 'none' || String($('#tabs-4').css('display')) === 'none')){
        hideAllDtlContent();
    }
}