import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ILaunch } from '../types';

interface FavoritesState {
  favorites: ILaunch[];
}

const loadFavoritesFromLocalStorage = (): ILaunch[] => {
  try {
    const serializedData = localStorage.getItem('favorites');
    if (serializedData === null) return [];
    return JSON.parse(serializedData);
  } catch (e) {
    console.warn("Could not load favorites from local storage", e);
    return [];
  }
};

const saveFavoritesToLocalStorage = (favorites: ILaunch[]) => {
  try {
    const serializedData = JSON.stringify(favorites);
    localStorage.setItem('favorites', serializedData);
  } catch (e) {
    console.warn("Could not save favorites to local storage", e);
  }
};

const initialState: FavoritesState = {
  favorites: loadFavoritesFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ILaunch>) => {
      if (!state.favorites.some(favorite => favorite.id === action.payload.id)) {
        state.favorites.push(action.payload);
        saveFavoritesToLocalStorage(state.favorites);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
      saveFavoritesToLocalStorage(state.favorites);
    },
    loadFavorites: (state) => {
      state.favorites = loadFavoritesFromLocalStorage();
    },
  },
});

export const { addFavorite, removeFavorite, loadFavorites } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.favorites;
export default favoritesSlice.reducer;
