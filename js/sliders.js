const reviewsSlider = new Swiper('.reviews__field', {
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 3,

    navigation: {
        prevEl: '.reviews__navigation-button.purple',
        nextEl: '.reviews__navigation-button.pink'
    }
})

$('.reviews__navigation-counter > .all').html(reviewsSlider.slidesSizesGrid.length)