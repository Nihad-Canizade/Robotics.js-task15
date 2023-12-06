let id = new URLSearchParams(window.location.search).get("id");
let sec2Boxs = document.getElementById('sec2Boxs');


fetch(`http://localhost:3000/robots/${id}`)
.then (res => res.json())
.then(data => {
    sec2Boxs.innerHTML += `
    <div class="sec2-box1">
            <div class="sec2-box1-forimg">
                <img src="${data.image}" alt="image/robot"
                    class="sec2-box1-img">
            </div>
            <p class="sec2-box1-p1">${data.name}</p>
            <p class="sec2-box1-p2">${data.description}</p>
            <button class="sec2-box1-btn">VIEW DETAILS</button>
        </div>
    `
});