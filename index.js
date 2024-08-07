const footer = document.getElementById("footer")

footer.addEventListener("click", (event) => {
    switch (footer.dataset.open) {
        case "0":
            console.log(footer.dataset.open);
            break;
        
        case "1":
            console.log(footer.dataset.open);
            break
        default:
            break;
    }
});