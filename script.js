function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", function (e) {
        const { clientX, clientY } = e;
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
    });

    // hover effect
    const clickableElements = document.querySelectorAll(".clickable");

    clickableElements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            cursor.classList.add("hovered");
        });

        element.addEventListener("mouseout", () => {
            cursor.classList.remove("hovered");
        });
    });
});