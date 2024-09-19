import { Candidat } from '../models/candidat';

export class GestionRecruesService {
  private tabRecrues: Candidat[] = [];

  getAllRecrues() {
    return this.tabRecrues;
  }

  addRecrue(newRecrue) {
    if (this.tabRecrues.indexOf(newRecrue) == -1)
      this.tabRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recruté !');
  }

  constructor() {}
}
