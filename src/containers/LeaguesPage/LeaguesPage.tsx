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
    return (
      <article className="league-explorer">
        <p className="league-explorer__status" role="status">
          Loading leagues
        </p>
      </article>
    );
  }

  if (error) {
    return (
      <div className="league-explorer">
        <div className="league-explorer__status" role="alert">
          <p>Failed to load leagues: {error.message}</p>
          <button
            className="league-explorer__retry"
            type="button"
            onClick={() => mutate()}
          >
            Let's try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="league-explorer">
      <header className="league-explorer__header">     
        <h1 className="league-explorer__title">Sports Leagues </h1>

      </header>

      <div className="league-explorer__filters">
        <SearchBar value={search} onChange={setSearch} />
        <SportsDropdown sports={sports} value={sport} onChange={setSport} />
      </div>

      <section className="league-explorer__content">
        <div className="league-explorer__list-panel">
          <div className="league-explorer__panel-heading">
            <h2 className="league-explorer__panel-title">Leagues</h2>
            <span className="league-explorer__count">
              {filteredLeagues.length}
            </span>
          </div>
          <LeagueList
            leagues={filteredLeagues}
            onSelect={handleSelect}
            selectedLeagueId={selectedLeagueId}
          />
        </div>

        <div className="league-explorer__detail-panel">
          {selectedLeague ? (
            <LeagueBadge league={selectedLeague} />
          ) : (
            <div className="league-explorer__placeholder">
              <span className="league-explorer__placeholder-mark" aria-hidden="true">
                ✦
              </span>
              <h2 className="league-explorer__placeholder-title">
                Choose a league
              </h2>
              <p className="league-explorer__placeholder-text">
                Select one from the list to see its badge and season.
              </p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
