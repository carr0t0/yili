document.getElementById("type_A").addEventListener("click", () => {
    document.getElementById("type_AA")
        .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("type_B").addEventListener("click", () => {
    document.getElementById("type_BB")
        .scrollIntoView({ behavior: "smooth" });
});


const resetBtn = document.querySelector("#bg-reset");
const randomBtn = document.querySelector("#bg-random");

// 랜덤 색 함수
function randomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 60 + 40);
    const l = Math.floor(Math.random() * 60 + 30);
    return { h, s, l, color: `hsl(${h}, ${s}%, ${l}%)` };
}

// 글자색 자동 대비
function getTextColor(h, s, l) {
    // Simplified approach - in a real implementation, you might want to use a more sophisticated method
    return l > 70 ? "#000" : "#fff";
}

const RESET_COLOR = "#ffffff";

// 리셋 버튼
if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = RESET_COLOR;

        if (randomBtn) {
            randomBtn.style.backgroundColor = "#fff";
            randomBtn.style.color = "#000";
        }
    });
}

// 랜덤 버튼
if (randomBtn) {
    randomBtn.addEventListener("click", () => {
        const { h, s, l, color } = randomColor();
        const textColor = getTextColor(h, s, l);

        document.body.style.backgroundColor = color;
        randomBtn.style.backgroundColor = color;
        randomBtn.style.color = textColor;
    });
}