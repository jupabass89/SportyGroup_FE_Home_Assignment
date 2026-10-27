import type { League } from "../../types/league";
import "./LeagueItem.scss";

interface LeagueItemProps {
  league: League;
  onSelect: (id: string) => void;
}

export function LeagueItem({ league, onSelect }: LeagueItemProps) {
  return (
    <li>
      <button type="button" onClick={() => onSelect(league.idLeague)}>
        <span>{league.strLeague}</span>
        <span>{league.strSport}</span>
      </button>
    </li>
  );
}
