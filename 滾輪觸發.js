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

//個別forEach

// const block = document.querySelectorAll('.bgc');

// block.forEach((n) => {
//   bgc(n);
// });

// function bgc(x) {
//   const bP = x.parentElement.parentElement.offsetTop;
//   const bY = bP - bP / 8;
//   window.addEventListener('scroll', (e) => {
//     if (window.pageYOffset > bY) {
//       x.classList.add('fade');
//     } else {
//       x.classList.remove('fade');
//     }
//   });
// }

// const pic = document.querySelectorAll('.img');
// pic.forEach((n) => {
//   img(n);
// });

// function img(x) {
//   const bP = x.parentElement.parentElement.offsetTop;
//   const bY = bP - bP / 8;
//   window.addEventListener('scroll', (e) => {
//     if (window.pageYOffset > bY) {
//       x.classList.add('up');
//     } else {
//       x.classList.remove('up');
//     }
//   });
// }

//合併

// const arr = document.querySelectorAll('.animation');
// const pic = art[0].children[0].children[4];
// const img = art[0].children[1].children[0];
// function children(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const pic = art[i].children[0].children[4];
//     const img = art[i].children[1].children[0];
//     const bP = art[i].offsetTop;
//     const bY = bP - bP / 8;
//     console.log(pic, img, bY);
//   }
// }

const art = document.querySelectorAll('.animation');
const winH = window.document.documentElement.clientHeight;

for (let i = 0; i < art.length; i++) {
  const pic = art[i].children[0].children[4];
  const img = art[i].children[1].children[0];
  const Y = art[i].offsetTop;
  console.log(Y);
  const start = Y - winH / 8;
  console.log(start);
  const end = Y;
  console.log(end);
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
