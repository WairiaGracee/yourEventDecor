document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelectorAll('.slide')
    let currentIndex = 0

    function changeSlide(){
        slides.forEach(slide => slide.classList.remove('active'))
        slides[currentIndex].classList.add('active')
        currentIndex = (currentIndex + 1) % slides.length
    }

    setInterval(changeSlide, 2000)

})
