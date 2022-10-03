import { createContext, useEffect, useReducer } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categories: {},
});

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: 'SET_CATEGORIES',
};

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      throw new Error(`Unhandled ${type} into categoriesReducer`);
  }
};

export const CategoriesProvider = ({ children }) => {
  const [{ categories }, dispatch] = useReducer(
    categoriesReducer,
    CATEGORIES_INITIAL_STATE
  );

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      dispatch({
        type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
        payload: categoryMap,
      });
    };

    getCategoriesMap();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
