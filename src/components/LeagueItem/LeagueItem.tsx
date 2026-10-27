import type { League } from "../../types/league";
import "./LeagueItem.scss";

interface LeagueItemProps {
  league: League;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export function LeagueItem({ league, onSelect, isSelected }: LeagueItemProps) {
  return (
    <li className="league-item">
      <button
        className={`league-item__button${isSelected ? " league-item__button--selected" : ""}`}
        type="button"
        onClick={() => onSelect(league.idLeague)}
      >
        <span className="league-item__name">{league.strLeague}</span>
        <span className="league-item__sport">{league.strSport}</span>
      </button>
    </li>
  );
}
