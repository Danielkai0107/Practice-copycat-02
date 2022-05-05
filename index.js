//單張動畫

// const block = document.querySelector('.bgc');
// const blockH = block.clientHeight;
// const blockP = block.parentElement.parentElement.offsetTop;
// const blockY = blockP - blockH;

// window.addEventListener('scroll', (e) => {
//   if (window.pageYOffset > blockY) {
//     block.classList.add('fade');
//   } else {
//     block.classList.remove('fade');
//   }
// });

//forEach

const block = document.querySelectorAll('.bgc');

block.forEach((n) => {
  bgc(n);
});

function bgc(x) {
  const bP = x.parentElement.parentElement.offsetTop;
  const bY = bP - 200;
  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > bY) {
      x.classList.add('fade');
    } else {
      x.classList.remove('fade');
    }
  });
}

const pic = document.querySelectorAll('.img');
pic.forEach((n) => {
  img(n);
});

function img(x) {
  const bP = x.parentElement.parentElement.offsetTop;
  const bY = bP - 200;
  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > bY) {
      x.classList.add('up');
    } else {
      x.classList.remove('up');
    }
  });
}
