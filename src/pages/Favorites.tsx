import React, { useEffect, useState, useCallback } from 'react';
import { Grid, Box } from '@chakra-ui/react';
import LaunchCard from '../components/LaunchCard/LaunchCard';
import { ILaunch } from '../types';
import { useFavorites } from '../hooks/useFavorites';
import EmptyState from '../components/EmptyState/EmptyState';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<ILaunch[]>([]);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleToggleFavorite = useCallback((launch: ILaunch) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== launch.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }, [favorites]);

  if (favorites.length === 0) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minH="70vh">
        <EmptyState message="There are no favorites to show" />
      </Box>
    )
  }

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={4}>
      {favorites.map((launch: ILaunch) => (
        <LaunchCard
          key={launch.id}
          launch={{
            ...launch,
            isFavorite: isFavorite(launch)
          }}
          toggleFavorite={() => handleToggleFavorite(launch)}
        />
      ))}
    </Grid>
  );
};

export default Favorites;
