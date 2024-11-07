// @ts-nocheck
// TODO: Config ts in the test files
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { useFavorites } from './useFavorites';
import { addFavorite } from '../slices/FavoritesSlice';
import { toaster } from '../components/ui/toaster';

jest.mock('../components/ui/toaster', () => ({
  toaster: {
    create: jest.fn(),
  },
}));

interface ILaunch {
  id: string;
  name: string;
  date_utc: string;
  launchpad: string;
  success: boolean | null;
  details?: string;
  isFavorite?: boolean;
  links?: {
    webcast: string | null;
    article: string | null;
    wikipedia: string | null;
    patch?: {
      small: string;
      large: string;
    };
  };
}

const createMockLaunch = (overrides?: Partial<ILaunch>): ILaunch => ({
  id: '1',
  name: 'Test Launch',
  date_utc: '2024-01-01T12:00:00Z',
  launchpad: 'Launchpad 39A',
  success: true,
  details: 'This is a test launch.',
  isFavorite: false,
  links: {
    webcast: 'https://www.youtube.com/watch?v=test',
    article: 'https://spaceflightnow.com/test',
    wikipedia: 'https://en.wikipedia.org/wiki/Test_Launch',
    patch: {
      small: 'https://example.com/small-patch.png',
      large: 'https://example.com/large-patch.png',
    },
  },
  ...overrides,
});

const mockStore = configureMockStore();
const initialState = {
  favorites: {
    favorites: [],
  },
};

describe.only('useFavorites hook', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test('should return isFavorite as true if the launch is in favorites', () => {
    const launch = createMockLaunch({ id: '1' });
    store = mockStore({
      favorites: {
        favorites: [launch],
      },
    });

    const { result } = renderHook(() => useFavorites(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.isFavorite(launch)).toBe(true);
  });

  test('should return isFavorite as false if the launch is not in favorites', () => {
    const launch = createMockLaunch({ id: '2' });

    const { result } = renderHook(() => useFavorites(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.isFavorite(launch)).toBe(false);
  });

  test('should dispatch addFavorite when toggleFavorite is called for a non-favorite launch', () => {
    const launch = createMockLaunch({ id: '3' });

    const { result } = renderHook(() => useFavorites(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    act(() => {
      result.current.toggleFavorite(launch);
    });

    expect(store.dispatch).toHaveBeenCalledWith(addFavorite(launch));
    expect(toaster.create).toHaveBeenCalledWith({
      title: 'Launch added to favorites',
      description: `${launch.name} was successfully added.`,
      type: 'success',
      duration: 3000,
    });
  });
});
