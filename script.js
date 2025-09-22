function next(){
    let boutique= document.getElementById("ShopName").value;
    let IDfb= Number(document.getElementById("fbPage").value);

    localStorage.setItem("NomDuShop", boutique);
     localStorage.setItem("ID", IDfb);

   
    if (boutique === "" || IDfb === ""){
        alert ("Veuillez remplir tous les champs avant de continuer!");
        return;
    }
     window.location.href="index2.html";

}

function send(){
   let lien= document.getElementById("googlesheet").value;
  let boutique = localStorage.getItem("NomDuShop");
  let IDfb = localStorage.getItem("ID");
  
  
  let message= 'Information sur la boutique de client: %0A ';
   message += `Boutique: ${boutique}%0A`;
   message += `ID du page facebook: ${IDfb}%0A`;
   message += `Lien vers GoogleSheet: ${lien}%0A`;
   const ownerId = "714076201800136";

    if(lien=== ""){
      alert ("Veillez entrer votre lien googleSheet");
      return;
    }
    window.open(`https://m.me/${ownerId}?text=${message}`, "_blank");
    
   
}



