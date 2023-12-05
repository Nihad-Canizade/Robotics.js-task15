// let sec2Boxs = document.getElementById('sec2Boxs');

// fetch("http://localhost:3000/robots")
// .then(response => response.json())
// .then(data =>{
//     data.forEach(item => {

//         sec2Boxs.innerHTML +=

//             `<div class="sec2-box1">
//             <img src="${item.image}" alt="image/robot"/>
//             <p class="sec2-box1-p1">${item.name}</p>
//             <p class="sec2-box1-p2">${item.description}</p>
//             <button class="sec2-box1-btn"><a href = "./details.html?id=${item.id}" target="_blank" >VIEW DETAILS</a></button>
//             </div>`;
    
//     });
// })

let navbar = document.getElementById('navbar');
let nav = document.getElementById('nav');

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       nav.style.backgroundColor = "#8a90FFE6";
       navbar.style.backgroundColor = "red";
    } else {
        nav.style.backgroundColor = "";
    }
}
