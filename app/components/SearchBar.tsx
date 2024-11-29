'use client'

import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/Button';
import { Search } from 'lucide-react';
import { searchTracks } from '../utils/fetchMusicData';
import type { Track } from '../config/lastfm';

export default function SearchBar({ onSearch }: { onSearch: (tracks: Track[]) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const results = await searchTracks(query);
      onSearch(results);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <Input
        type="search"
        placeholder="Search for tracks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-md"
      />
      <Button type="submit" size="icon">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}

