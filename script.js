document.querySelectorAll("nav ul li a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll("nav ul li a").forEach(items => {
            items.classList.remove("active");
        })
    item.classList.add("active");
    })
})