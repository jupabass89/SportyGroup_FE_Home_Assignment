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
    return (
      <p className="league-badge__status" role="alert">
        Failed to load badge
      </p>
    );
  }

  return (
    <article className="league-badge">
      <p className="league-badge__eyebrow">League badge</p>
      <h2 className="league-badge__title">{league.strLeague}</h2>
      {badgeSeason && (
        <p className="league-badge__season">Season {badgeSeason.strSeason}</p>
      )}
      <BadgeImage
        src={badgeSeason?.strBadge ?? null}
        alt={`${league.strLeague} badge`}
        isLoading={isLoading}
      />
    </article>
  );
}
