let pill = document.querySelector(".pill");
let pillNav = document.querySelector(".pill-nav");
let navitem = document.querySelectorAll("nav-item")

pill.onclick = function(){
    pillNav.classList.toggle("aktif")
}
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

function aktiflink() {
    categoryButton.forEach((item) =>
        item.classList.remove('aktif'));
    this.classList.add('aktif')
}

categoryButton.forEach((item) =>
    item.addEventListener('click', aktiflink))