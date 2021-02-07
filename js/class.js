class Boss{
    constructor(nom,pdv,pda){
        this.nom = nom;
        this.pdv = pdv;
        this.pda = pda;
    }
}

class Hero{
    constructor(nom,pdv,pda){
        this.nom = nom;
        this.pdv = pdv;
        this.pda = pda;
        this.etat = "vivant"
        this.defense = () => {
            this.pdv = this.pdv * 2.5;
            this.pda = this.pda * 0.5;
            this.posture = "defense";
        }
        this.attaque = () => {
            this.pdv = this.pdv * 0.75;
            this.pda = this.pda * 1.4;
            this.posture = "attaque";
        }
    }
}

export {Boss, Hero};