import{hero1,hero2,hero3,chronos,sauron,lilith} from './instances.js';

let randomBoss = () => {
    let randomNumber = Math.round(Math.random() * (3 - 1) + 1);
    if (randomNumber == 1) {
        return sauron;
    } else if (randomNumber == 2) {
        return chronos;
    } else {
        return lilith;
    }
}
let pdvTot = 1000;
let pdaTot = 600;

let debutGame = (boss) => {

    alert(`Bonjour jeune aventurier ! Aujourd'hui tu vas devoir affronter ${boss.nom} ! Pour cela tu as droits à 3 héros, donne leurs des noms `);

    hero1.nom = prompt(`Le nom du premier héro (Le guerrier) :`);
    hero2.nom = prompt(`Le nom du second héro (Le mage):`);
    hero3.nom = prompt(`Le nom du troisième héro (L'archer):`);
    
    alert(`Parfait ! Vous avez droit à ${pdvTot} pdv et ${pdaTot} pda à distribuer à tes héros, choisis soigneusement comment les attribuer !`);

// Attribution pdv

    do {
        
        if (pdvTot > 0) {
            let i = 0
            do {
                let pdv1 = prompt(`Combien de pdv souhaitez vous accorder à ${hero1.nom} ? (${pdvTot} pdv disponibles)`);
                if (pdv1 <= pdvTot) {
                hero1.pdv = pdv1;
                pdvTot -= pdv1;
                i++
                }
            } while (i == 0);
        }

        if (pdvTot > 0) {
            let i = 0
            do {
                let pdv2 = prompt(`Combien de pdv souhaitez vous accorder à ${hero2.nom} ? (${pdvTot} pdv disponibles)`);
                if (pdv2 <= pdvTot) {
                hero2.pdv = pdv2;
                pdvTot -= pdv2;
                i++
                }
            } while (i == 0);
        }
        
        if (pdvTot > 0) {
            let i = 0
            do {
                let pdv3 = prompt(`Combien de pdv souhaitez vous accorder à ${hero3.nom} ? (${pdvTot} pdv disponibles)`);
                if (pdv3 <= pdvTot) {
                hero3.pdv = pdv3;
                pdvTot -= pdv3;
                i++
                }
            } while (i == 0);
        }
        
    } while (pdvTot > 0);
    

// Attribution pda

    do {
        
        if (pdaTot > 0) {
            let i = 0
            do {
                let pda1 = prompt(`Combien de pda souhaitez vous accorder à ${hero1.nom} ? (${pdaTot} pda disponibles)`);
                if (pda1 <= pdaTot) {
                hero1.pda = pda1;
                pdaTot -= pda1;
                i++
                }
            } while (i == 0);
        }

        if (pdaTot > 0) {
            let i = 0
            do {
                let pda2 = prompt(`Combien de pda souhaitez vous accorder à ${hero2.nom} ? (${pdaTot} pda disponibles)`);
                if (pda2 <= pdaTot) {
                hero2.pda = pda2;
                pdaTot -= pda2;
                i++
                }
            } while (i == 0);
        }
        
        if (pdaTot > 0) {
            let i = 0
            do {
                let pda3 = prompt(`Combien de pda souhaitez vous accorder à ${hero3.nom} ? (${pdaTot} pda disponibles)`);
                if (pda3 <= pdaTot) {
                hero3.pda = pda3;
                pdaTot -= pda3;
                i++
                }
            } while (i == 0);
        }
        
    } while (pdaTot > 0);

    let posture1 = "";
    do {
        posture1 = prompt(`Quelle posture souhaitez-vous attribuer à ${hero1.nom} ? :`).toLowerCase().trim();
        switch (posture1) {
            case "attaque":
                hero1.attaque();
                break;
            case "defense":
                hero1.defense();
                break;
        }

    } while (posture1 != "attaque" && posture1 != "defense" && posture1 != "normale" );

    let posture2 = "";
    do {
        posture2 = prompt(`Quelle posture souhaitez-vous attribuer à ${hero2.nom} ? :`).toLowerCase().trim();
        switch (posture2) {
            case "attaque":
                hero2.attaque();
                break;
            case "defense":
                hero2.defense();
                break;
        }

    } while (posture2 != "attaque" && posture2 != "defense" && posture2 != "normale" );

    let posture3 = "";
    do {
        posture3 = prompt(`Quelle posture souhaitez-vous attribuer à ${hero3.nom} ? :`).toLowerCase().trim();
        switch (posture3) {
            case "attaque":
                hero3.attaque();
                break;
            case "defense":
                hero3.defense();
                break;
        }

    } while (posture3 != "attaque" && posture3 != "defense" && posture3 != "normale" );
    alert(`${hero1.nom} : ${hero1.pdv}pdv et ${hero1.pda}pda`);
    alert(`${hero2.nom} : ${hero2.pdv}pdv et ${hero2.pda}pda`);
    alert(`${hero3.nom} : ${hero3.pdv}pdv et ${hero3.pda}pda`);

    console.log(hero1,hero2,hero3);
    console.log(boss);
}

let attGuerrier = (boss) => {
    let nvxPda = hero1.pda * 1.25;
    if (hero1.etat == "vivant") {
        if (hero1.rage < 4) {
            hero1.rage = hero1.rage + 1;
            boss.pdv -= hero1.pda;
            alert(`${hero1.nom} attaque ${boss.nom} : -${hero1.pda} pdv.`);
        } else {
            hero1.rage = 0
            boss.pdv -= nvxPda;
            alert(`${hero1.nom} est enragé, il attaque ${boss.nom} : -${nvxPda} pdv.`);
        }
    }
}

let attMage = (boss) => {
    if (hero2.etat == "vivant") {
        if (hero2.mana > 1) {
            boss.pdv -= hero2.pda;
            hero2.mana -= 2;
            alert(`${hero2.nom} attaque ${boss.nom} : -${hero2.pda} pdv.`)
        } else {
            hero2.mana = 7;
            alert(`${hero2.nom} prend son temps pour récupérer du mana : pas d'attaque.`);
        }
    }
}

let attArcher = (boss) => {
    if (hero2.etat == "vivant") {
        if (hero3.fleches > 1) {
            hero3.fleches -= 2;
            hero3.fleches += 1;
            boss.pdv -= hero3.pda;
            alert(`${hero3.nom} attaque ${boss.nom} : -${hero3.pda} pdv.`)
        } else {
            hero3.fleches += 6;
            alert(`${hero3.nom} attend de recevoir de nouvelles flèches : pas d'attaque.`);
        }
    }
}

let checkForLose = (boss) => {
    if (hero1.etat == "mort" && hero2.etat == "mort" && hero3.etat == "mort") {
        alert(`Vous avez perdu ... ${boss.nom} était trop fort pour vous.`);
        return true;
    }
}



let attBoss = (boss, champions) => {
    
    let randomHero = Math.round(Math.random() * ((champions.length-1) - 1) + 1);

        champions[randomHero].pdv -= boss.pda;
        alert(`${boss.nom} attaque ${champions[randomHero].nom} : -${boss.pda} pdv.`);
        if (champions[randomHero] <= 0) {
            champions[randomHero] = "mort"
            champions.forEach(element => {
                if (element.nom.includes(champions[randomHero].nom)) {
                    champions.splice(element);
                }
            });
            alert(`${champions[randomHero]} est mort !`);
        }
}



let combat = (boss) => {
    let pdvBoss = boss.pdv;
    let champions = [hero1,hero2,hero3];
    champions.forEach(element => {
        if (element.posture == "defense") {
            champions.push(element);
        }    
    });
    do {
        attGuerrier(boss);
        attMage(boss);
        attArcher(boss);
        attBoss(boss,champions);
    } while (boss.pdv > pdvBoss / 5 && !checkForLose(boss));
    console.log(boss,hero1,hero2,hero3);
}

export{debutGame,randomBoss,combat};