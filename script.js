// Section 2 add boxs
let sec2Boxs = document.getElementById('sec2Boxs');

fetch("http://localhost:3000/robots")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {

            sec2Boxs.innerHTML +=

                `<div class="sec2-box1">
            <img src="${item.image}" alt="image/robot"/>
            <p class="sec2-box1-p1">${item.name}</p>
            <p class="sec2-box1-p2">${item.description}</p>
            <button class="sec2-box1-btn"><a href = "./details.html?id=${item.id}" target="_blank"
            class = "sec2-box1-a" >VIEW DETAILS</a></button>
            <button class = "delete-btn" onclick = "robotDelete(${item.id})">Delete</button
            </div>`;

        });
    })

// Boxs delete function
function robotDelete(id) {
    axios.delete(`http://localhost:3000/robots/${id}`)
    window.location.reload()
}


// Scroll Back To Top Button
let toTopButton = document.getElementById("toTopButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Navbar Menu Click
let navbarMenu = document.getElementById('navbarMenu');
let navbarMenuClick = document.getElementById('navbarMenuClick');

navbarMenu.addEventListener('click', () => {
    if (navbarMenuClick.style.display === "none") {
        navbarMenuClick.style.display = "block";
    } else {
        navbarMenuClick.style.display = "none";
    }
});
