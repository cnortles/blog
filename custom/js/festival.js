hexo.extend.helper.register('getFestivalIcon', function () {
    var icon = [
        '#icon-qiandai',
        '#icon-denglong',
        '#icon-juanzhou',
        '#icon-hongbao',
        '#icon-duilian',
        '#icon-bianpao',
        '#icon-shanzi',
        '#icon-tangguo',
        '#icon-yuanbao',
        '#icon-qianchuan',
        '#icon-denglong2'
    ]
    var index = Math.floor(Math.random()*icon.length);
    return icon[index]
});