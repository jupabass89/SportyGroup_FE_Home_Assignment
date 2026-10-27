const BASE_URL = "https://www.thesportsdb.com/api/v1/json/123";

export const LEAGUES_URL = `${BASE_URL}/all_leagues.php`;

export const badgeUrl = (id: string) =>
  `${BASE_URL}/search_all_seasons.php?badge=1&id=${id}`;

export const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch {
    throw new Error("Request failed");
  }
};
