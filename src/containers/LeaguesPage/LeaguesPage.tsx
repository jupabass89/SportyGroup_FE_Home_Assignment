import { useMemo, useState } from "react";
import { LeagueList } from "../../components/LeagueList/LeagueList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SportsDropdown } from "../../components/SportsDropdown/SportsDropdown";
import { useLeagues } from "../../hooks/useLeagues";
import { LeagueBadge } from "../LeagueBadge/LeagueBadge";
import "./LeaguesPage.scss";

export function LeaguesPage() {
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);

  const { leagues, isLoading, error, mutate } = useLeagues();

  const sports = useMemo(() => {
    const sportsList = leagues.map((league) => league.strSport);
    return [...new Set(sportsList)].sort();
  }, [leagues]);

  const filteredLeagues = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leagues.filter((league) => {
      const sportMatches = sport === "" || league.strSport === sport;
      const searchMatches =
        query === "" || league.strLeague.toLowerCase().includes(query);
      return sportMatches && searchMatches;
    });
  }, [leagues, search, sport]);

  const selectedLeague = selectedLeagueId
    ? (leagues.find((league) => league.idLeague === selectedLeagueId) ?? null)
    : null;

  const handleSelect = (id: string) => setSelectedLeagueId(id);

  if (isLoading) {
    return <p>Loading leagues</p>;
  }

  if (error) {
    return (
      <div>
        <p>Failed to load leagues: {error.message}</p>
        <button type="button" onClick={() => mutate()}>
          Let's try again
        </button>
      </div>
    );
  }

  return (
    <article>
      <h1>Sports Leagues Explorer</h1>

      <div>
        <SearchBar value={search} onChange={setSearch} />
        <SportsDropdown sports={sports} value={sport} onChange={setSport} />
      </div>

      <section>
        <div>
          <LeagueList leagues={filteredLeagues} onSelect={handleSelect} />
        </div>

        <div>
          {selectedLeague ? (
            <LeagueBadge league={selectedLeague} />
          ) : (
            <p>Select a league</p>
          )}
        </div>
      </section>
    </article>
  );
}
