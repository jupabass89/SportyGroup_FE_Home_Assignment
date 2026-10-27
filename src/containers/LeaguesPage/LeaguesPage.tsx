import { LeagueList } from "../../components/LeagueList/LeagueList";
import { useLeagues } from "../../hooks/useLeagues";
import "./LeaguesPage.scss";

export default function LeaguesPage() {
  const { leagues } = useLeagues();

  return (
    <article>
      <h1>Sport Leagues</h1>

      <section>
        <div>
          <LeagueList leagues={leagues} onSelect={() => {}} />
        </div>
      </section>
    </article>
  );
}
