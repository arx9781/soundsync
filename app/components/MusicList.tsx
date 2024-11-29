import React from 'react';
import { getTopTracks } from '../utils/fetchMusicData';
import { Track } from '../config/lastfm';
import Image from 'next/image';
import { Card, CardContent } from '../ui/Card';

async function MusicList() {
  let tracks: Track[] = [];
  let error: string | null = null;

  try {
    tracks = await getTopTracks(20);
    if (tracks.length === 0) {
      error = "No tracks found. Please try again later.";
    }
  } catch (e) {
    console.error('Error in MusicList:', e);
    error = "An error occurred while fetching tracks. Please try again later.";
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tracks.map((track: Track) => {
        const largeImage = track.image?.find(img => img.size === 'large');
        const imageUrl = largeImage ? largeImage['#text'] : undefined;
        const fallbackImage = '/placeholder.svg';
        
        return (
          <Card 
            key={`${track.name}-${track.artist.name}`} 
            className="hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={imageUrl || fallbackImage}
                    alt={`Album artwork for ${track.name} by ${track.artist.name}`}
                    width={64}
                    height={64}
                    className="object-cover rounded-md"
                    priority={false}
                    unoptimized={!imageUrl}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold truncate">{track.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {track.artist.name}
                  </p>
                  {track.listeners && (
                    <p className="text-xs text-muted-foreground">
                      {parseInt(track.listeners).toLocaleString()} listeners
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default MusicList;

