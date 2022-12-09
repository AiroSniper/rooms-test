export class PlayerDTO{
    constructor(
        public _id:string,
        public firstName:string,
        public lastName:string,
        public cin:string,
        public phone:string,
        public address:string,
        public country:string,
        public city:string,
        public region:string,
        public birthDate:Date,
        public score:number,
    ){}
}