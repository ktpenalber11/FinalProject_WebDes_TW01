function getResult(){

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    if(!q1 || !q2 || !q3 || !q4 || !q5){
        document.getElementById("result").innerText = "Please answer all questions!";
        return;
    }

    let code = q1.value + q2.value + q3.value + q4.value + q5.value;

    const streetwear = [
        "AAAAA","AAAAB","AAABA","AABAA","ABAAA"
    ];

    const minimalist = [
        "BBBBB","BBBBA","BBABB","BABBB","ABBBA"
    ];

    const athleisure = [
        "ABBBB","BABBB","BBBAA","BBBAB"
    ];

    const business = [
        "BABAB","BAABB","BBAAA","BBAAB","BBABA"
    ];


    const grunge = [
        "AAABB","AABAB","AABBA","ABAAB","ABBAA"
    ];

    const y2k = [
        "AABBB","ABBAB","ABABB","BABAA","BAABA"
    ];

    let result = "";

    if (streetwear.includes(code)) {
        result = "Streetwear";
    }

    else if (athleisure.includes(code)) {
        result = "Athleisure";
    }

    else if (minimalist.includes(code)) {
        result = "Minimalist";
    }

    else if (business.includes(code)) {
        result = "Business Casual";
    }

    else if (grunge.includes(code)) {
        result = "Grunge";
    }

    else if (y2k.includes(code)) {
        result = "Y2K";
    }

    else {
        result = "Closest match: Minimalist";
    }

    document.getElementById("result").innerText =
        "Your style is: " + result;
    document.getElementById("resultBox").style.display = "block";
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