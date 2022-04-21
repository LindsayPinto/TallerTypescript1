export class Serie {
    numero: number;
    name: string;
    channel: string;
    seasons: number;
    constructor(numero: number, completeName: string, channel: string, seasons: number) {
      this.numero = numero;
      this.name = completeName;
      this.channel = channel;
      this.seasons = seasons;
    }
  }