$('.kenWaku').click(function (e) {
    var randType = Math.floor(Math.random() * (3 - 0) + 0);
    var randNum = Math.floor(Math.random() * (360 - 0) + 0);
    var randSize = Math.floor(Math.random() * ($(window).width()/3 - $(window).width()/5) + $(window).width()/5);
    var ObjSize = $(window).width()/100;
    //randType = 2;
    switch (randType) {
        case 0:
            $('#view').append(
                $('<div class="svg" style="position: absolute; margin: 0; padding:0 ; left:'
                    + (e.pageX - randSize / 2) + 'px; top: '
                    + (e.pageY - randSize / 2) + 'px; width: '
                    + randSize + 'px; height: ' + randSize + 'px; transform: rotate(' + randNum + 'deg);">')
                    .append('<svg width="' + randSize + '" height="' + randSize + '" viewBox="0 0 ' + randSize + ' ' + randSize + '">'
                        + '<circle r="' + randSize / 2.2 + '" cx="' + randSize / 2 + '" cy="' + randSize / 2 + '" stroke="#86cecb" stroke-width="' + ObjSize + '" fill-opacity="0" ></circle></svg>'));
            break;
        case 1:
            $('#view').append(
                $('<div class="svg" style="position: absolute; margin: 0; padding:0 ; left:'
                    + (e.pageX - randSize / 2) + 'px; top: '
                    + (e.pageY - randSize / 2) + 'px; width: '
                    + randSize + 'px; height: ' + randSize + 'px; transform: rotate(' + randNum + 'deg);">')
                    .append('<svg width="' + randSize + '" height="' + randSize + '" viewBox="0 0 ' + randSize + ' ' + randSize + '">'
                        + '<rect width="' + randSize + '" height="' + randSize + '" x="0" y="0" stroke="#86cecb" stroke-width="' + ObjSize*2 + '" fill-opacity="0" ></rect></svg>'));
            break;
        case 2:
            //線
            //この場合はランダムエフェクトを0に固定．
            $('#view').append(
                $('<div class="svg" style="position: absolute; margin: 0; padding:0 ; left:'
                    + (e.pageX - 4000 / 2) + 'px; top: '
                    + (e.pageY - ObjSize / 2) + 'px; width: '
                    + 4000 + 'px; height: ' + ObjSize + 'px; transform: rotate(' + randNum + 'deg);">')
                    .append('<svg width="4000" height="' + ObjSize + '" viewBox="0 0 4000 ' + ObjSize + '">'
                        + '<rect width="4000" height="' + ObjSize + '" x="0" y="0" stroke-width="0" fill-opacity="1" fill="#86cecb"></rect></svg>'));
            break;
    }
    $('.svg').fadeOut(1500);
});