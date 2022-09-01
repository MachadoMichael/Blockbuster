export interface Seasons {
  EP01: string;
  EP02: string;
  EP03: string;
  EP04: string;
  EP05: string;
  EP06: string;
  EP07: string;
  EP08: string;
  EP09: string;
  EP10: string;
  release: number;
  name: string;
  description: string;
  image: string;
}

interface T {
  season: any;
}

export type Serie = {
  season1?: Map<Seasons, T>;
  season2?: Map<Seasons, T>;
  season3?: Map<Seasons, T>;
  season4?: Map<Seasons, T>;
  season5?: Map<Seasons, T>;
  season6?: Map<Seasons, T>;
  season7?: Map<Seasons, T>;
  season8?: Map<Seasons, T>;
  season9?: Map<Seasons, T>;
  season10?: Map<Seasons, T>;
  description: string;
  image: string;
  name: string;
  type: string;
  url: string;
  release: number;
  genre: string;
  favorite: boolean;
};

// DEIXAR O DOCUMENTO SERIE IGUAL AO MOVIE E PEGAR AS TEMPORADAS COM OUTRA FUNÇÂO NA HORA DO PLAY
