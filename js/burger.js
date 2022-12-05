$('#burger').click(function () {
    $(this).toggleClass('open')

    $('.header__bottom').slideToggle(200)

    if ($(this).hasClass('open')) {
        $('body').addClass('hidden').append(`
            <div id="overlay"></div>
        `)
    }
    else {
        $('body').removeClass('hidden')
        $('#overlay').remove()
    }
})