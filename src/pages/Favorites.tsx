import React, { useEffect, useState } from 'react';
import { Grid, Text } from '@chakra-ui/react';
import LaunchCard from '../components/LaunchCard/LaunchCard';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <Text color="white">No favorites added yet.</Text>;
  }

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={4}>
      {favorites.map((launch: any) => (
        <LaunchCard
          key={launch.id}
          id={launch.id}
          name={launch.name}
          date={launch.date_utc}
          location={launch.launchpad}
          success={launch.success}
          imageUrl={launch.links?.patch?.small}
        />
      ))}
    </Grid>
  );
};

export default Favorites;
