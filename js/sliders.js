const reviewsSlider = new Swiper('.reviews__field', {
    spaceBetween: 30,
    navigation: {
        prevEl: '.reviews__navigation-button.purple',
        nextEl: '.reviews__navigation-button.pink'
    },
    breakpoints: {
        360: {
            slidesPerView: 1
        },
        745: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        }
    }
})

$('.reviews__navigation-counter > .all').html(reviewsSlider.slidesSizesGrid.length)

reviewsSlider.on('slideChange', function () {
    $('.reviews__navigation-counter > .current').html(reviewsSlider.activeIndex + 1)
})