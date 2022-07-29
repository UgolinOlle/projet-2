let navlist = document.querySelector(".nav_list");
let navLink = document.querySelectorAll(".list_item a");

navlist.addEventListener("click", function (e) {
    navLink.forEach(link => {
        link.classList.remove("active");
    })
    e.target.classList.add("active");
});
