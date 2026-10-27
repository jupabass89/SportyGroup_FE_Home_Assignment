import type { League } from "../../types/league";
import { LeagueItem } from "../LeagueItem/LeagueItem";
import "./LeagueList.scss";

interface LeagueListProps {
  leagues: League[];
  onSelect: (id: string) => void;
}

export function LeagueList({ leagues, onSelect }: LeagueListProps) {
  if (leagues.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <ul>
      {leagues.map((league) => (
        <LeagueItem key={league.idLeague} league={league} onSelect={onSelect} />
      ))}
    </ul>
  );
}
