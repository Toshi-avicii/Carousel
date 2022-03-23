const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const slides = document.querySelectorAll(".slide");
let counter = 0;

nextBtn.addEventListener('click', function(e) {
    if(counter < slides.length - 1) {
        counter++;
        slides[counter - 1].classList.remove('active-slide');
        slides[counter].classList.add('active-slide');
    } else {
        counter = 0;
        slides[slides.length - 1].classList.remove('active-slide');
        slides[counter].classList.add('active-slide');
    }
});

prevBtn.addEventListener('click', function(e) {
    if(counter > 0) {
        counter--;
        slides[counter].classList.add('active-slide');
        slides[counter + 1].classList.remove('active-slide');
    } else {
        counter = slides.length - 1;
        slides[0].classList.remove('active-slide');
        slides[counter].classList.add('active-slide');
    }
}); 