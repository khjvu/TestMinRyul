var navLink = $('.nav-menu li'),
    tabLink = $('.tabnav li'),
    currenUrl = location.href,
    tabContent = $('.tabcontent > div');

tabLink.add(navLink).click(function (e) {
    e.preventDefault();
    var targetIdx = $(this).index();

    activeteTab(targetIdx);
});

navLink.each(function (i) {
    var compareUrl = $(this).find('a').attr('href');
    var active = currenUrl.indexOf(compareUrl);
    var blank = currenUrl.indexOf('#');
    console.log(active);

    if (active > -1) {
        activeteTab(i);
    }
    if (blank == -1) {
        activeteTab(0);
    }
});


function activeteTab(idx) {
    tabContent.hide();
    tabLink.find('a').removeClass('active');
    tabLink.eq(idx).find('a').addClass('active');
    tabContent.eq(idx).show();
}
