/*Numerik not değerine göre harf notunu hesaplayan ve geçme kalma
durumunu harf notunun rengine göre belirten uygulama
*/

const calculate = () => {
    let not = parseInt(document.querySelector("#not").innerHTML);
    let sonuc = document.querySelector("#sonuc");
    let harfNotu = "";
    sonuc.setAttribute("class", "success");

    if (validate(not))
        return;

    if (not > 85 && not <= 100) {
        harfNotu = "AA";
    } else if (not >= 70) {
        harfNotu = "BB";
    } else if (not >= 60) {
        harfNotu = "CC";
    } else if (not >= 45) {
        harfNotu = "DD";
    } else {
        harfNotu = "FF";
        sonuc.setAttribute("class", "failed");
    }

    sonuc.innerHTML = harfNotu;
}

const validate = (not) => {
    if (not < 0 || not > 100) {
        alert("Yanlış değer girdiniz.");
        return false;
    } else {
        return true;
    }
}