
// ssssssssssssssssssssssssssssss


let list = document.querySelectorAll('.nav-item');

function aktiflink() {
    list.forEach((item) =>
        item.classList.remove('aktif'));
    this.classList.add('aktif')
}

list.forEach((item) =>
    item.addEventListener('click', aktiflink));

// category toggle


let categoryButton = document.querySelectorAll('.category-item');
let categoryGroup = document.querySelectorAll('.category-item');

function aktiflink() {
    categoryButton.forEach((item) =>
        item.classList.remove('aktif'));
    this.classList.add('aktif')
}

categoryButton.forEach((item) =>
    item.addEventListener('click', aktiflink))




//emotion tablet start

let tabletEmosi = document.querySelectorAll('.emotion-tablet');

function aktiflink() {
    tabletEmosi.forEach((item) =>
        item.classList.remove('aktif'));
    this.classList.add('aktif')
}

tabletEmosi.forEach((item) =>
    item.addEventListener('click', aktiflink))