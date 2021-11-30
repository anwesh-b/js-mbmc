let toggle = true;
$(document).ready(() => {
    $('#hide').click(() => {
        if (toggle) {
            $('.main').hide(3000, () => {
                toggle = !toggle;
                $('#hide').text('Show');
                return;
            });
        }
        $('.main').show(3000, () => {
            $('#hide').text('Hide');
            toggle = !toggle;
        });
    });

    $('#fadeout').click(() => {
        $('.main').fadeOut(3000);
    });

    $('#fadein').click(() => {
        $('.main').fadeIn(300);
    });

    $('#slideup').click(() => {
        $('.main').slideUp(300);
    });

    $('#slidedown').click(() => {
        $('.main').slideDown(300);
    });

    $('#fadetoggle').click(() => {
        $('.main').fadeToggle(300);
    });

    $('#slidetoggle').click(() => {
        $('.main').slideToggle(300);
    });

    const mathi = () => {
        $('.main').slideUp(3000,tala);       
    }

    const tala = () => {
        $('.main').slideDown(3000,mathi);       
    }

    $('#ghumne').click(()=>{
        $('.main').slideUp(3000,tala)       
    });

    $('#append').click(() => {
        $('.main').append(`<img src='./anwesh_id.jpg' height="50" width="50"/>`);
    });

    $('#prepend').click(() => {
        $('.main').prepend('<b>Thik xa hauu</b>');
    });


});
