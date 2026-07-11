function getResult(){

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    let answers = [q1, q2, q3, q4, q5];

    let code = "";
    let answeredCount = 0;


    answers.forEach(answer => {
        if(answer){
            code += answer.value;
            answeredCount++;
        }
    });

    if(answeredCount < 3){

        document.getElementById("result").innerHTML = `
        <h1>Not Enough Answers</h1>
        <p>Please answer at least <strong>3 questions</strong> so we can recommend a style accurately.</p>`;

        document.getElementById("resultBox").style.display = "block";
        return;
    }



    const styles = {
        "Streetwear": ["AAAAA","AAAAB","AAABA","AABAA","ABAAA"],

        "Minimalist": ["BBBBB","BBBBA","BBABB","BABBB","ABBBA"],

        "Athleisure": ["ABBBB","BABBB","BBBAA","BBBAB"],

        "Business Casual": ["BABAB","BAABB","BBAAA","BBAAB","BBABA"],

        "Grunge": ["AAABB","AABAB","AABBA","ABAAB","ABBAA"],

        "Y2K": ["AABBB","ABBAB","ABABB","BABAA","BAABA"]
    };

    let result = "";
    let highestScore = -1;

    for(let style in styles){
        styles[style].forEach(pattern => {

            let score = 0;
            let index = 0;

            answers.forEach(answer => {
                if(answer){
                    if(answer.value === pattern[index]){
                        score++;
                    }
                    index++;
                }
            });

            if(score > highestScore){
                highestScore = score;
                result = style;
            }
        });
    }

    let description = "";

if(result === "Streetwear"){
    description =
    "Streetwear represents individuality, comfort, and self-expression. " +
    "This style focuses on oversized silhouettes, sneakers, graphic pieces, " +
    "and bold outfits inspired by urban culture.";
}

else if(result === "Minimalist"){
    description = "Minimalist style focuses on simplicity, clean designs, and timeless pieces. " +
    "You prefer outfits that look polished, balanced, and effortless.";
}

else if(result === "Athleisure"){
    description = "Athleisure combines comfort and fashion through sporty-inspired outfits. " +
    "This style values movement, practicality, and a relaxed appearance.";
}

else if(result === "Business Casual"){
    description = "Business Casual blends professionalism with modern fashion. " +
    "This style uses structured pieces while keeping outfits comfortable and stylish.";
}

else if(result === "Grunge"){
    description = "Grunge reflects an edgy and rebellious personality. " +
    "It combines layered clothing, darker tones, and vintage-inspired pieces.";
}

else if(result === "Y2K"){
    description = "Y2K fashion embraces creativity, bold choices, and nostalgic trends. " +
    "This style combines playful colors, unique accessories, and expressive outfits.";
}

document.getElementById("result").innerHTML = `
    <h1>${result}</h1>
    <p>${description}</p>

    <button onclick="location.href='shop.html'">Explore Your Style</button>
`;

document.getElementById("quizSection").style.display = "none";
document.getElementById("resultBox").style.display = "block";

window.scrollTo({
    top: document.getElementById("resultBox").offsetTop,
    behavior: "smooth"
});
}

function closePopup(){
    document.getElementById("resultBox").style.display = "none";
}

function openModal(img,title,price,link){
    document.getElementById("modalImg").src = img;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalLink").href = link;
    document.getElementById("productModal").style.display = "flex";
}

function closeModal(){
    document.getElementById("productModal").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById("productModal");

    if (event.target === modal) {
        closeModal();
    }
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle){
    menuToggle.onclick = function(){
        navLinks.classList.toggle("show");
    }
}