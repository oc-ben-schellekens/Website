const container = document.getElementById("blocks")
const layouts = ["0", "1", "2", "3", "4"];
const corners = ["0", "1", "2", "3"];

function changeBlockLayout() {
    container.dataset.blockLayout = layouts[Math.floor(Math.random() * layouts.length)];
}

function changeBorderRadius() {
    container.dataset.cornerRounding = corners[Math.floor(Math.random() * corners.length)];
}

setInterval(changeBlockLayout, 3000);
setInterval(changeBorderRadius, 2500)