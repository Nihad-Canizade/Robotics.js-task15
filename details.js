let id = new URLSearchParams(window.location.search).get("id");
console.log(id);

fetch(`http://localhost:3000/robots/${id}`)
.then (res => res.json())
.then(data => {
console.log(data);
});