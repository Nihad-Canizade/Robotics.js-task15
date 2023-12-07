// Section 2 add boxs
let sec2Boxs = document.getElementById('sec2Boxs');

let page = 4;

function showData(){
fetch("http://localhost:3000/robots")
    .then(response => response.json())
    .then(data => {
        data.slice(page - 4, page).forEach(item => {
            sec2Boxs.innerHTML +=
                `<div class="sec2-box1">
            <img src="${item.image}" alt="image/robot"/>
            <p class="sec2-box1-p1">${item.name}</p>
            <p class="sec2-box1-p2">${item.description}</p>
            <button class="sec2-box1-btn"><a href = "./Html/details.html?id=${item.id}" target="_blank"
            class = "sec2-box1-a">VIEW DETAILS</a></button>
            <button class = "new-btn" onclick = "robotDelete(${item.id})">Delete</button>
            <button class = "new-btn" onclick = "robotUpdate(${item.id})">Update</button>
            </div>`;
        })
    })
}
showData();

let loadMoreBtn = document.getElementById('loadMoreBtn');
loadMoreBtn.addEventListener('click', () => {
    page += 4
    showData()
})
    
    // if(item.id == 1){
    //     let xx = 1;
    //     let itemname = item.name;
    //     let itemdescription = item.description;
    // } else if(item.id == 2){
    //     let xx = 2;
    //     let itemname = item.name;
    //     let itemdescription = item.description;
    // } else if(item.id == 3){
    //     let xx = 3;
    //     let itemname = item.name;
    //     let itemdescription = item.description;
    // } else if(item.id == 4){
    //     let xx = 4;
    //     let itemname = item.name;
    //     let itemdescription = item.description;
    // } 


// Boxs delete function
function robotDelete(id) {
    axios.delete(`http://localhost:3000/robots/${id}`)
    window.location.reload()
}


// Boxs update function
let update = document.getElementById('update');
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let modalInput1 = document.getElementById('modalInput1').value;
let modalInput2 = document.getElementById('modalInput2').value;

function robotUpdate(){
    // let xx;
    // if(xx == 1){
    //     modalInput1.innerText = itemname;
    //     modalInput2.innerText = itemdescription;
    // }
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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
