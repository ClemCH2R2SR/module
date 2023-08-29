import {Employe} from './employe.js';
import {Service} from './service.js';
import {Entreprise} from './entreprise.js';

window.addEventListener('DOMContentLoaded', function () {
    let directeur = new Employe('Doe', 'John', 550.37);
    console.log(directeur);
    console.log(JSON.stringify(directeur));

    let monService = new Service("DSI", directeur, null);
    console.log(monService);
    console.log(monService.directeur.salaire);

    let employeDeBase = new Employe('Durand', 'Jacques', 1389);
    let employeDeBase2 = new Employe('Roux', 'Marguerite', 1764);
    monService.addEmploye(employeDeBase);
    monService.addEmploye(employeDeBase2);
    console.log(monService);
    monService.removeEmploye(employeDeBase2);
    console.log(monService);

});