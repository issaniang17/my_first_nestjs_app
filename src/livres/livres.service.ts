import { Injectable } from '@nestjs/common';

export interface Livre {
  id: number;
  titre: string;
  auteur: string;
}
@Injectable()
export class LivresService {
  private livres: Livre[] = [
    { id: 1, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry' },
    { id: 2, titre: "L'Alchimiste", auteur: 'Paulo Coelho' },
  ];
  private prochainId = 3;
  findAll(): Livre[] {
    return this.livres;
  }
  findOne(id: number): Livre | undefined {
    return this.livres.find((livre) => livre.id === id);
  }
  create(titre: string, auteur: string): Livre {
    const nouveauLivre: Livre = {
      id: this.prochainId++,
      titre,
      auteur,
    };
    this.livres.push(nouveauLivre)
    return nouveauLivre
  }
  remove(id:number): boolean {
   const index =  this.livres.findIndex(livre => livre.id === id)
    if(index === -1){
        return false
    }else{
        this.livres.splice(index, 1)
        return true
    }
  }
}
