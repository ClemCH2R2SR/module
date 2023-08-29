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

    removeEmploye(employe)
    {
        let i = 0;
        let trouve = false;
        while(i < this.employes.length && !trouve)
        {
            if(this.employes[i].nom == employe.nom
                && this.employes[i].prenom == employe.prenom){
                trouve = true;
            }else{
                i++;
            }
        }
        if(trouve)
        {
            this.employes.splice(i, 1);
        }
    }

    toHTMLAccordion() {}
}

export {Service}