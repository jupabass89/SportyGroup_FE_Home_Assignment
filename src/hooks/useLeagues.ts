import useSWR from 'swr';
import { fetcher, LEAGUES_URL } from '../api/leagues';
import type { League, LeaguesResponse } from '../types/league';

interface UseLeaguesResult {
  leagues: League[];
  isLoading: boolean;
  error: Error | undefined;
  mutate: () => void;
}

export function useLeagues(): UseLeaguesResult {
  const { data, isLoading, error, mutate } = useSWR<LeaguesResponse>(
    LEAGUES_URL,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    leagues: data?.leagues ?? [],
    isLoading,
    error,
    mutate,
  };
}
