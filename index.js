// 滾輪動畫觸發

const art = document.querySelectorAll('.animation');
const winH = window.document.documentElement.clientHeight;

for (let i = 0; i < art.length; i++) {
  const pic = art[i].children[0].children[4];
  const img = art[i].children[1].children[0];
  const Y = art[i].offsetTop;
  const start = Y - winH / 8;
  const end = Y;
  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > start) {
      pic.classList.add('fade');
      img.classList.add('up');
    } else if (window.pageYOffset < end) {
      pic.classList.remove('fade');
      img.classList.remove('up');
    }
  });
}

// 換圖輪播

const img = document.querySelectorAll('.header__img');
console.log(img);

function imgChange() {
  for (let i = 0; i < img.length; i++) {
    setTimeout(() => {
      img[i].classList.remove('op');
    }, 8000 * i);
    setTimeout(() => {
      img[i].classList.add('op');
    }, 8000 * (i + 1));
    setTimeout(imgChange, 24000);
  }
}

imgChange();

//navbar 選單

const navbarBtn = document.querySelector('.navbar__btn');
const navbar = document.querySelector('.navbar__container');
const main = document.querySelector('.main');
const mainChild = document.querySelector('.main').children;
const navbarList = document.querySelector('.navbar__list').children;

navbarBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
  navbar.classList.toggle('none');
  main.classList.toggle('none');
});

//navbar 連結跳轉

for (let i = 0; i < navbarList.length; i++) {
  const x = mainChild[i].offsetTop;
  navbarList[i].addEventListener('click', () => {
    main.classList.toggle('none');
    navbar.classList.toggle('none');
    window.scrollTo(0, x);
  });
}
