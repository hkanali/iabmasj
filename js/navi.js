/**
 * common navi
 */
$(function() {
    $navi = $('#navi');
    
    var naviTag = ' <nav>';
    if (!$navi.hasClass('transparent')) {
        naviTag = ' <nav class="indigo">'
    }

    $navi.append(''
     + naviTag
     + '     <div class="container">'
     + '         <div class="nav-wrapper">'
     + '             <a id="logo-container" href="index.html" class="brand-logo"><img src="images/logo.png" alt="IABMAS JAPAN Logo Image"></a>'
     + '             <ul class="right hide-on-med-and-down">'
     + '               <li><a href="index.html" class="text-white">目的</a></li>'
     + '               <li><a href="iabmas.html" class="text-white">IABMAS</a></li>'
     + '               <li><a href="iabmasJapan.html" class="text-white">IABMAS JAPAN</a></li>'
     + '               <li><a href="join.html" class="text-white">入会のご案内</a></li>'
     + '               <li><a href="members.html" class="text-white">メンバー</a></li>'
     + '               <li><a href="activities.html" class="text-white">活動履歴</a></li>'
     + '             </ul>'
     + '             <ul id="nav-mobile" class="side-nav">'
     + '               <li><a href="index.html" class="text-white">目的</a></li>'
     + '               <li><a href="iabmas.html" class="text-white">IABMAS</a></li>'
     + '               <li><a href="iabmasJapan.html" class="text-white">IABMAS JAPAN</a></li>'
     + '               <li><a href="join.html" class="text-white">入会のご案内</a></li>'
     + '               <li><a href="members.html" class="text-white">メンバー</a></li>'
     + '               <li><a href="activities.html" class="text-white">活動履歴</a></li>'
     + '             </ul>'
     + '             <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="mdi-navigation-menu" style="line-height: 128px;"></i></a>'
     + '         </div>'
     + '     </div>'
     + ' </nav>'
    );
});
