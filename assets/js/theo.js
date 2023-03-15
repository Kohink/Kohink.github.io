const theoSphere = document.getElementById("theo-sphere");
const theoContainer = document.getElementById("theo-container");
const theoImages = ["../assets/images/theo.jpg", "../assets/images/theo2.jpg", "../assets/images/theo3.jpg"];
let clickCount = 0;

function changeImage() {
    const imgIndex = Math.floor(Math.random() * theoImages.length);
    document.getElementById("theo-img").src = theoImages[imgIndex];
}

function changeBackground() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
}

function addLoveTheo() {
    const loveTheo = document.createElement("span");
    loveTheo.classList.add("love-theo");
    loveTheo.innerText = "I love you, Theo";
    loveTheo.style.left = `${Math.random() * 90}vw`;
    loveTheo.style.top = `${Math.random() * 90}vh`;
    loveTheo.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    theoContainer.appendChild(loveTheo);
}

function specialEvent() {
    alert("You've clicked Theo's sphere 10 times! Theo is so happy!");
}

function bounce() {
    let x = 0;
    let y = 0;
    let xSpeed = 2;
    let ySpeed = 2;
    const updatePosition = () => {
        x += xSpeed;
        y += ySpeed;

        if (x < 0 || x + theoSphere.clientWidth > window.innerWidth) {
            xSpeed = -xSpeed;
        }
        if (y < 0 || y + theoSphere.clientHeight > window.innerHeight) {
            ySpeed = -ySpeed;
        }

        theoSphere.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(updatePosition);
    };

    updatePosition();
}

theoSphere.addEventListener("click", () => {
    clickCount++;
    changeImage();
    changeBackground();
    addLoveTheo();

    if (clickCount === 10) {
        specialEvent();
    }
});

bounce();
