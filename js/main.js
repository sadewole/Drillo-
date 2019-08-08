// simple lightbox
$(function () {
    const $gallery = $('.gallery a').simpleLightbox();
})


// Smooth scroll
$('nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault()

        const hash = this.hash

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800)
    }
})