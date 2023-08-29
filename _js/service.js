"use strict";

class Service {
    nom;
    directeur;
    employes;
    constructor(nom, directeur, employes) {
        this.nom = nom;
        this.directeur = directeur;
        this.employes = employes;
    }

    addEmploye(employe)
    {
        if (this.employes == null) {
            this.employes = [];
        }
        this.employes.push(employe);
    }
    
    removeEmploye(employe){}
    toHTMLAccordion() {}
}