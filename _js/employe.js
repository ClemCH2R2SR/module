"use strict";

class Employe {
    nom;
    prenom;
    salaire;
    constructor(nom, prenom, salaire){

        this.nom = nom;
        this.prenom = prenom;
        this.salaire = salaire;
    }
    
    toLi()
    {
        return `<li>${this.nom} ${this.prenom} - Salaire : ${this.salaire} €</li>`;
    }
} 