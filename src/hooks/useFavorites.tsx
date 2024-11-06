import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addFavorite, removeFavorite, selectFavorites } from '../slices/FavoritesSlice';
import { toaster } from '../components/ui/toaster';
import { ILaunch } from '../types';

export const useFavorites = (launch: ILaunch) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => selectFavorites(state));
  const isFavorite = favorites.some(favorite => favorite.id === launch.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(launch.id));

      toaster.create({
        title: "Launch removed from favorites",
        description: `${launch.name} was successfully removed.`,
        type: "warning", // Set the toast type (success, error, warning, info)
        duration: 3000, // Toast duration in milliseconds
      });
    } else {
      dispatch(addFavorite(launch));

      toaster.create({
        title: "Launch added to favorites",
        description: `${launch.name} was successfully added.`,
        type: "success", // Set the toast type
        duration: 3000,
      });
    }
  };

  return { isFavorite, toggleFavorite };
};
