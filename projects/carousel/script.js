const sliderEl = document.querySelector('.slider');
const slideEls = sliderEl.querySelectorAll('.slide');
const paginationTrackEl = sliderEl.querySelector('.pagination__track');
const rotateStep = 10;

let currentSlideIdx = 2;

function initSlider() {
const pagLabelsEls = sliderEl.querySelectorAll('.slide__pagination-label');
for (let i = 0; i < pagLabelsEls.length; i++) {
    const lab = pagLabelsEls[i];
    const clone = lab.cloneNode(true);
    clone.classList.remove('slide__pagination-label');
    clone.classList.add('pagination__item');
    clone.dataset.index = i;
    clone.style.transform = `rotate(${i * rotateStep}deg)`;
    paginationTrackEl.appendChild(clone);
}

for (let i = 0; i < slideEls.length; i++) {
    const slide = slideEls[i];
    slide.style.left = `${i * -100}%`;
}

slideEls[currentSlideIdx].classList.add('slide--active');
paginationTrackEl.style.transform = `rotate(${currentSlideIdx * -rotateStep}deg)`;
onNextFrame(() => paginationTrackEl.classList.add('pagination__track--transition'));
}

initSlider();

function slideTo(index) {
const totalSlides = slideEls.length;
const nextIndex = ((index % totalSlides) + totalSlides) % totalSlides;

if (nextIndex === currentSlideIdx) return;

const current = slideEls[currentSlideIdx];
const next = slideEls[nextIndex];

current.classList.replace('slide--active', 'slide--next');
current.classList.add('slide--transition');

current.addEventListener('transitionend', () => {
    current.classList.remove('slide--next');
    current.classList.remove('slide--transition');
}, { once: true });

next.classList.add('slide--active', 'slide--transition');

paginationTrackEl.style.transform = `rotate(${nextIndex * -rotateStep}deg)`;

currentSlideIdx = nextIndex;
}

const next = document.getElementById('next');
const prev = document.getElementById('prev');
next.addEventListener('click', () => {
slideTo(currentSlideIdx + 1);
});

prev.addEventListener('click', () => {
slideTo(currentSlideIdx - 1);
});

sliderEl.addEventListener('click', ({ target }) => {
const pagItemEl = target.closest('.pagination__item');
pagItemEl.classList.add('slide--active');
if (!pagItemEl) return;

const idx = Number(pagItemEl.dataset.index);
slideTo(idx);
});

// utils

function onNextFrame(cb) {
requestAnimationFrame(() => requestAnimationFrame(cb));
}
