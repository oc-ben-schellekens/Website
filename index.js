const footer = document.getElementById("footer")

footer.addEventListener("click", (event) => {
    switch (footer.dataset.open) {
        case "0":
            footer.dataset.open = 1;
            break;
        
        case "1":
            footer.dataset.open = 0;
            break
        default:
            break;
    }
});