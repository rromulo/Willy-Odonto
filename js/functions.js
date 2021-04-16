$(function(){
    /////////////FUNÇÔES DE ESTILO E FADE_MENU
    $('nav.desktop a').hover(function(){
        $('nav.desktop li').removeClass('selected')
        $(this).parent().addClass('selected')
    })
    $('nav.mobile a').hover(function(){
        $('nav.mobile a').css('background-color','white')
        $(this).css('background-color','#98fcde')
    })
    $('header i').click(function(){
        $('nav.mobile').fadeToggle()
    })
    ////////////FUNÇÔES DE SCROLL
    $('nav a').click(function(){
        var href=$(this).attr('href')
        var offSetTop = $(href).offset().top
        $('html,body').animate({
            scrollTop:offSetTop
        })
        return false
    })
    $(document).scroll(function(){
        if($(document).scrollTop()>80){
            $('header').css('position','fixed').css('background-color','#00daaa').css('margin-top','0').css('width','100%').css('padding','5px 0').css('z-index','999')
            $('i nav.mobile').css('top','42')
        }else{
            $('header').css('position','initial').css('background-color','transparent').css('padding','20px 0')
            $('i nav.mobile').css('top','44')
        }
    })
    
})