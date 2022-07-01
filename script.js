const inputFile = document.querySelector('.picture__input');
const pictureImage = document.querySelector('.picture__image');
const pictureImageText = `<i class="fa-solid fa-image"></i> Choose an image`;
pictureImage.innerHTML = pictureImageText;
inputFile.addEventListener('change', function (event) {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (!file) {
        pictureImage.innerHTML = pictureImageText;
    } else {
        const reader = new FileReader();
        reader.addEventListener('load', function (event) {
            const readerTarget = event.target;
            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__img');
            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });
        reader.readAsDataURL(file);
    }
});