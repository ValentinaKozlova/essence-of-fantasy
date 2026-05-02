export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  plays: string;
  coverGradient: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface Album {
  id: number;
  title: string;
  artist: string;
  year: number;
  trackCount: number;
  coverGradient: string;
  genre: string;
}

export interface Artist {
  id: number;
  name: string;
  genre: string;
  followers: string;
  monthlyListeners: string;
  bio: string;
  avatarGradient: string;
  topTracks: string[];
}

export const featuredTrack: Track = {
  id: 0,
  title: 'Cosmic Reverie',
  artist: 'Aurora Veil',
  album: 'Celestial Dreams',
  duration: '4:32',
  plays: '12.4M',
  coverGradient: 'linear-gradient(135deg, #6d28d9 0%, #c084fc 50%, #f472b6 100%)',
};

export const tracks: Track[] = [
  {
    id: 1,
    title: 'Neon Mirage',
    artist: 'Aurora Veil',
    album: 'Celestial Dreams',
    duration: '3:47',
    plays: '8.2M',
    coverGradient: 'linear-gradient(135deg, #4f46e5, #818cf8)',
    isTrending: true,
  },
  {
    id: 2,
    title: 'Whispers in Violet',
    artist: 'Solène Noir',
    album: 'Midnight Iris',
    duration: '4:15',
    plays: '6.7M',
    coverGradient: 'linear-gradient(135deg, #7c3aed, #c084fc)',
    isTrending: true,
  },
  {
    id: 3,
    title: 'Starfall',
    artist: 'The Lunar Keys',
    album: 'Orbit',
    duration: '3:58',
    plays: '5.1M',
    coverGradient: 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
    isNew: true,
  },
  {
    id: 4,
    title: 'Glass Horizons',
    artist: 'Echo Moth',
    album: 'Transparent',
    duration: '5:02',
    plays: '4.3M',
    coverGradient: 'linear-gradient(135deg, #be185d, #f472b6)',
    isNew: true,
  },
  {
    id: 5,
    title: 'Phantom Bloom',
    artist: 'Solène Noir',
    album: 'Midnight Iris',
    duration: '3:33',
    plays: '9.8M',
    coverGradient: 'linear-gradient(135deg, #0f766e, #818cf8)',
    isTrending: true,
  },
  {
    id: 6,
    title: 'Velvet Cascade',
    artist: 'Aurora Veil',
    album: 'Celestial Dreams',
    duration: '4:21',
    plays: '3.9M',
    coverGradient: 'linear-gradient(135deg, #92400e, #f472b6)',
  },
];

export const albums: Album[] = [
  {
    id: 1,
    title: 'Celestial Dreams',
    artist: 'Aurora Veil',
    year: 2025,
    trackCount: 12,
    coverGradient: 'linear-gradient(135deg, #6d28d9 0%, #c084fc 60%, #f472b6 100%)',
    genre: 'Dream Pop',
  },
  {
    id: 2,
    title: 'Midnight Iris',
    artist: 'Solène Noir',
    year: 2024,
    trackCount: 10,
    coverGradient: 'linear-gradient(135deg, #1e1b4b 0%, #7c3aed 100%)',
    genre: 'Indie Electronic',
  },
  {
    id: 3,
    title: 'Orbit',
    artist: 'The Lunar Keys',
    year: 2025,
    trackCount: 9,
    coverGradient: 'linear-gradient(135deg, #0c4a6e 0%, #6d28d9 100%)',
    genre: 'Ambient',
  },
  {
    id: 4,
    title: 'Transparent',
    artist: 'Echo Moth',
    year: 2024,
    trackCount: 11,
    coverGradient: 'linear-gradient(135deg, #831843 0%, #c084fc 100%)',
    genre: 'Art Pop',
  },
  {
    id: 5,
    title: 'Depth Perception',
    artist: 'Lowkey Fractal',
    year: 2025,
    trackCount: 8,
    coverGradient: 'linear-gradient(135deg, #064e3b 0%, #818cf8 100%)',
    genre: 'Lo-fi Soul',
  },
  {
    id: 6,
    title: 'Solar Wind',
    artist: 'Aurora Veil',
    year: 2023,
    trackCount: 13,
    coverGradient: 'linear-gradient(135deg, #78350f 0%, #f472b6 100%)',
    genre: 'Dream Pop',
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    name: 'Aurora Veil',
    genre: 'Dream Pop',
    followers: '2.4M',
    monthlyListeners: '8.9M',
    bio: 'Ethereal soundscapes woven from synthesizers and whispered vocals. Aurora Veil creates music that exists at the boundary between waking and dreaming.',
    avatarGradient: 'linear-gradient(135deg, #6d28d9, #f472b6)',
    topTracks: ['Cosmic Reverie', 'Neon Mirage', 'Velvet Cascade'],
  },
  {
    id: 2,
    name: 'Solène Noir',
    genre: 'Indie Electronic',
    followers: '1.8M',
    monthlyListeners: '6.2M',
    bio: 'French-born electronic artist blending melancholy melodies with driving rhythms. Her dark, hypnotic productions have captivated listeners worldwide.',
    avatarGradient: 'linear-gradient(135deg, #1e1b4b, #c084fc)',
    topTracks: ['Whispers in Violet', 'Phantom Bloom', 'Obsidian Hour'],
  },
  {
    id: 3,
    name: 'The Lunar Keys',
    genre: 'Ambient',
    followers: '980K',
    monthlyListeners: '4.1M',
    bio: 'A collective of musicians dedicated to crafting expansive ambient soundscapes. Their music is architecture — rooms you inhabit rather than songs you hear.',
    avatarGradient: 'linear-gradient(135deg, #0c4a6e, #818cf8)',
    topTracks: ['Starfall', 'Tidal Memory', 'Low Gravity'],
  },
];
