import type { League } from "../../types/league";
import { LeagueItem } from "../LeagueItem/LeagueItem";
import "./LeagueList.scss";

interface LeagueListProps {
  leagues: League[];
  onSelect: (id: string) => void;
  selectedLeagueId: string | null;
}

export function LeagueList({
  leagues,
  onSelect,
  selectedLeagueId,
}: LeagueListProps) {
  if (leagues.length === 0) {
    return <p className="league-list__empty">No results found.</p>;
  }

  return (
    <ul className="league-list">
      {leagues.map((league) => (
        <LeagueItem
          key={league.idLeague}
          league={league}
          onSelect={onSelect}
          isSelected={league.idLeague === selectedLeagueId}
        />
      ))}
    </ul>
  );
}
