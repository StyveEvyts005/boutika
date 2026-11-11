const btnDiscovertPacks = document.querySelector(".discovert");
btnDiscovertPacks.addEventListener("click", ()=>{
    location.href="#idPacks";
});

const btnContactUs = document.querySelector("nav button");
btnContactUs.addEventListener("click",()=>{
    location.href="https://wa.me/261375752717?text=Bonjour!%20Je%20voudrais%20plus%20d'information%20à%20propos%20de%20votre%20Service."
});

const btnPackBassique = document.querySelector(".btnBS");
btnPackBassique.addEventListener("click",()=>{
    location.href="https://wa.me/261375752717?text=Bonjour!%20Je%20voudrais%20commander%20votre%20PACK%20BASSIQUE."
});
const btnPackStandard = document.querySelector(".btnST");
btnPackStandard.addEventListener("click",()=>{
    location.href="https://wa.me/261375752717?text=Bonjour!%20Je%20voudrais%20commander%20votre%20PACK%20STANDARD."
});
const btnPackPrenium = document.querySelector(".btnPR");
btnPackPrenium.addEventListener("click",()=>{
    location.href="https://wa.me/261375752717?text=Bonjour!%20Je%20voudrais%20commander%20votre%20PACK%20PRENIUM."
});