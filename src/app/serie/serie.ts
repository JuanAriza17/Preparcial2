export class Serie {
 id: number;
 name: string;
 channel: string;
 seasons: number;
 description: string;
 webpage: string;
 poster:string;


 constructor(
   id: number,
   name: string,
   channel: string,
   seasons: number,
   descripton: string,
   webpage: string,
   poster: string
 ) {
   this.id = id;
   this.name = name;
   this.channel = channel;
   this.seasons = seasons;
   this.description = descripton;
   this.webpage = webpage;
   this.poster = poster;
 }
}
