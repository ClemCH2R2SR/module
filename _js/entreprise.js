"use strict"

class Service {
    nom;
    directeur;
    employes;
    addEmploye(employe);
    removeEmploye(employe);
    toHTMLAccordion();

    constuctor(nom, directeur, employes){
        this.nom = nom,
        this.directeur = directeur,
        this.employes = employes
    }
};