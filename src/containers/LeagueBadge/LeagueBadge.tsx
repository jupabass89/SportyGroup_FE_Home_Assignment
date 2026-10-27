import { BadgeImage } from "../../components/BadgeImage/BadgeImage";
import { useLeagueBadge } from "../../hooks/useLeagueBadge";
import type { League } from "../../types/league";
import "./LeagueBadge.scss";

interface LeagueBadgeProps {
  league: League;
}

export function LeagueBadge({ league }: LeagueBadgeProps) {
  const { badgeSeason, isLoading, error } = useLeagueBadge(league.idLeague);

  if (error) {
    return <p role="alert">Failed to load badge</p>;
  }

  return (
    <article>
      <p>{league.strLeague}</p>
      {badgeSeason && <p>Season {badgeSeason.strSeason}</p>}
      <BadgeImage
        src={badgeSeason?.strBadge ?? null}
        alt={`${league.strLeague} badge`}
        isLoading={isLoading}
      />
    </article>
  );
}
