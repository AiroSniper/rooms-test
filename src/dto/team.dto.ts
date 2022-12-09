import { PlayerDTO } from "./player.dto";

export class TeamDTO{
    constructor(
        public _id:string,
        public label:string,
        public players:PlayerDTO[],
        public isWinner:boolean,
        public result:number,
        public enemyResult:number,
    ){}
    
}