export class Candidat {
  constructor(
    public _id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {}
  //   id: number;
  //   prenom: string;
  //   nom: string;

  //   constructor(id: number, prenom: string, nom: string) {
  //     this.id = id;
  //     this.prenom = prenom;
  //     this.nom = nom;
  //   }
}
