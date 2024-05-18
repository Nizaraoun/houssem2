export interface DemandeStagiaire {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    debutStage: Date;
    finStage: Date;
    filiere: string;
    centre: string;
  }