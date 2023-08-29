"use strict"

class Entreprise {
    nom;
    addresse;
    president;
    services;
    addService(service);
    removeServices(service);
    toHTML();

    constructor(nom, addresse, president, service){
        this.nom = nom,
        this.addresse = addresse,
        this.president = president,
        this.services = services
    }
};