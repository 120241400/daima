<!DOCTYPE html>
<html>
<head>
    <title>忘情H5播放器</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><!-- IE内核 强制使用最新的引擎渲染网页 -->
    <meta name="referrer" content="never">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta http-equiv="Access-Control-Allow-Credentials" content="*"><!--解除跨域-->
    <meta name="renderer" content="webkit">  <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0 ,maximum-scale=1.0, user-scalable=no"><!-- 手机H5兼容模式 -->
    <meta name="x5-fullscreen" content="true" ><meta name="x5-page-mode" content="app" > <!-- X5  全屏处理 -->
    <meta name="full-screen" content="yes"><meta name="browsermode" content="application">  <!-- UC 全屏应用模式 -->
    <meta name="apple-mobile-web-app-capable" content="yes"> <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> <!--  苹果全屏应用模式 -->
    <meta name="referrer" content="never">
    <link rel="stylesheet" href="css/mui-player.min.css">
    <link rel="stylesheet" href="css/muiplayer.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="//lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.1.1/jquery.min.js"></script>
    <script src="js/mui-player.min.js"></script>
    <script src="js/mui-player-desktop-plugin.min.js"></script>
    <script src="js/mui-player-mobile-plugin.min.js"></script>
    <script src="js/jquery.xctips.js"></script>
    <script src="//lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/hls.js/0.8.8/hls.light.min.js"></script>
    <script src="//lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/flv.js/1.5.0/flv.min.js"></script>
    <script src="js/setting.js"></script>
</head>
<body>
<div id="loading"  align="center"></div>
<script type="text/javascript">
    if ((navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0)) {
        alert("本播放器在IE浏览器和兼容模式下无法播放，请将浏览器设置为 极速模式！")
    }
    var config = {
        "url": "<?=$_GET['url']?>",
        "vkey": "<?=md5($_GET['url'])?>",
        "key":"<?=md5($_GET['url'])?>",
        "next":"<?=$_GET['next']?>",
        "title":"<?=$_GET['title']?>",
        "tim":"<?=md5($_GET['url'])?>",
    }
    player(config);
</script>
</body>
</html>