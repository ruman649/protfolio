// jquery for navbar 
$(document).ready(function(){
    
    let nav = $('.navigation');
    let img = $('.img_size');
    $('.is_scroll').scroll(function(){
        if( $(this).scrollTop() > 20){
            nav.addClass('scroll');
            img.addClass('size_on');
        }
        else{
            nav.removeClass('scroll');
            img.removeClass('size_on');
        }
        // console.log('alskdjf');
    })

    $('.links').click(function(){
        $('.links_show').removeClass('show');
        $('.stream').removeClass('fa-x');
        $('.stream').addClass('fa-bars');
    })

    $('.stream').click(function(){
        if( $(this).hasClass('fa-bars') ){
            $(this).removeClass('fa-bars');
            $(this).addClass('fa-x');
        }
        else{
            $(this).removeClass('fa-x');
            $(this).addClass('fa-bars');
        }
    })





})