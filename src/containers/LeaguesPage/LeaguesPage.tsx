import { useState, useMemo } from "react";
import { useLeagues } from "../../hooks/useLeagues";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { LeagueList } from "../../components/LeagueList/LeagueList";
import "./LeaguesPage.scss";

export function LeaguesPage() {
  const [search, setSearch] = useState("");

  const { leagues, isLoading, error, mutate } = useLeagues();

  const filteredLeagues = useMemo(() => {
    const query = search.trim().toLowerCase();
    return leagues.filter((league) => {
      return query === "" || league.strLeague.toLowerCase().includes(query);
    });
  }, [leagues, search]);

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
      </div>

      <section>
        <div>
          <LeagueList leagues={filteredLeagues} onSelect={() => {}} />
        </div>
      </section>
    </article>
  );
}
