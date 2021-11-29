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
    })
});
