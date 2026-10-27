import { LeagueList } from "../../components/LeagueList/LeagueList";
import "./LeaguesPage.scss";

export default function LeaguesPage() {
  return (
     <article>
      <h1>Sport Leagues</h1>

      <section>

        <div>
          <LeagueList
            leagues={[]}
            onSelect={() => {}}
          />
        </div>
      </section>
    </article>
  );
}
