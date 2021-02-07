import{debutGame,randomBoss,combat} from './function.js'


let boss = randomBoss();

debutGame(boss);
combat(boss);