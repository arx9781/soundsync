export const LASTFM_API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY || '';
export const LASTFM_BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

export type Track = {
  name: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  url: string;
  image: { size: string; '#text': string }[];
  listeners?: string;
  playcount?: string;
};

export type Album = {
  name: string;
  artist: string;
  url: string;
  image: { size: string; '#text': string }[];
};

