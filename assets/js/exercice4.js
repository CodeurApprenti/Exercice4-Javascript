// déclaration de variable 
let totalSaisi;
let monnaieSaisi;
let aRendre;
let nbre10euros;
let nbre5euros;
let nbre1euro;

// déclaration des messages en relation avec un element id spécifique
let message10 = document.getElementById('message10');
let message5 = document.getElementById('message5');
let messsage1 = document.getElementById('message1');


//init at 0

message10.innerHTML = "0";
message5.innerHTML = "0";
messsage1.innerHTML= "0";

function Monnaie(){

    totalSaisi = document.getElementById('total').value;
    monnaieSaisi = document.getElementById('monnaie').value; 

    aRendre = monnaieSaisi - totalSaisi;
    nbre10euros = 0;

    while(aRendre >= 10){
        nbre10euros = nbre10euros +1;
        aRendre = aRendre - 10;
    }
    nbre5euros = 0;

    while(aRendre >= 5){
        nbre5euros = nbre5euros +1;
        aRendre = aRendre - 5;
    }

    // Affichage 
    message10.innerHTML = nbre10euros;
    message5.innerHTML = nbre5euros;
    messsage1.innerHTML = aRendre;
}

document.getElementById('button').addEventListener('click', Monnaie, false);

