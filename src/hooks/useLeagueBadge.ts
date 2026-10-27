import useSWR from 'swr';
import { fetcher, badgeUrl } from '../api/leagues';
import type { Season, SeasonsResponse } from '../types/league';

interface UseLeagueBadgeResult {
  badgeSeason: Season | null;
  isLoading: boolean;
  error: Error | undefined;
}

export function useLeagueBadge(leagueId: string | null): UseLeagueBadgeResult {
  const { data, isLoading, error } = useSWR<SeasonsResponse>(
    leagueId ? badgeUrl(leagueId) : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  const badgeSeason =
    data?.seasons?.find((s) => s.strBadge) ?? null;

  return {
    badgeSeason,
    isLoading,
    error,
  };
}
