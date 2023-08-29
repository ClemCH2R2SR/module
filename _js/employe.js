"use strict"

class Employe {
    nom;
    prenom;
    salaire;
    toLI();
    fromJSON(json);

    constructor(nom, prenom, salaire,){
        this.nom = nom,
        this.prenom = prenom,
        this.salaire = salaire,
        this.toLI = toLI(),
        this.fromJSON(json)
    }
};