
// header toggle button don't need this one
let menutoggle = document.querySelector('.toggle');
menutoggle.onclick = function () {
  menutoggle.classList.toggle('active')
}





////////////////////////// copy paste from here, ////////////////////////////



document.querySelectorAll('.thumbnail').forEach(thumbnail => {
  thumbnail.addEventListener('click', function () {
    const mainImage = document.querySelector('.product-main-image');
    mainImage.src = this.src;
  });
});
