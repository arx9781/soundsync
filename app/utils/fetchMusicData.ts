import { LASTFM_API_KEY, LASTFM_BASE_URL, Track, Album } from '../config/lastfm';

export async function getTopTracks(limit: number = 10): Promise<Track[]> {
  console.log('API Key:', LASTFM_API_KEY); // Remove this line after confirming it works

  const params = new URLSearchParams({
    method: 'chart.gettoptracks',
    api_key: LASTFM_API_KEY,
    format: 'json',
    limit: limit.toString(),
  });

  try {
    const response = await fetch(`${LASTFM_BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
    
    if (!data.tracks || !Array.isArray(data.tracks.track)) {
      console.error('Unexpected API response structure:', data);
      return [];
    }
    
    return data.tracks.track;
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return [];
  }
}

export async function searchTracks(query: string): Promise<Track[]> {
  const params = new URLSearchParams({
    method: 'track.search',
    track: query,
    api_key: LASTFM_API_KEY,
    format: 'json',
  });

  try {
    const response = await fetch(`${LASTFM_BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results.trackmatches.track;
  } catch (error) {
    console.error('Error searching tracks:', error);
    return [];
  }
}

export async function getTopAlbums(limit: number = 10): Promise<Album[]> {
  const params = new URLSearchParams({
    method: 'chart.gettopalbums',
    api_key: LASTFM_API_KEY,
    format: 'json',
    limit: limit.toString(),
  });

  try {
    const response = await fetch(`${LASTFM_BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.albums.album;
  } catch (error) {
    console.error('Error fetching top albums:', error);
    return [];
  }
}

