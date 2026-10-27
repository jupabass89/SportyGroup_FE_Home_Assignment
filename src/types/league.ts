export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
}

export interface LeaguesResponse {
  leagues: League[] | null;
}

export interface Season {
  idLeague: string;
  strSeason: string;
  strBadge: string | null;
}

export interface SeasonsResponse {
  seasons: Season[] | null;
}
