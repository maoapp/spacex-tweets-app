import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addFavorite, removeFavorite, selectFavorites } from '../slices/FavoritesSlice';
import { toaster } from '../components/ui/toaster';
import { ILaunch } from '../types';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => selectFavorites(state));

  const isFavorite = (launch: ILaunch) => {
    return favorites.some(favorite => favorite.id === launch.id);
  };

  const toggleFavorite = (launch: ILaunch) => {
    if (isFavorite(launch)) {
      dispatch(removeFavorite(launch.id));

      toaster.create({
        title: "Launch removed from favorites",
        description: `${launch.name} was successfully removed.`,
        type: "warning",
        duration: 3000,
      });
    } else {
      dispatch(addFavorite(launch));

      toaster.create({
        title: "Launch added to favorites",
        description: `${launch.name} was successfully added.`,
        type: "success",
        duration: 3000,
      });
    }
  };

  return { isFavorite, toggleFavorite };
};
