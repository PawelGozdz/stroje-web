import { createContext, useContext, useState, useEffect } from 'react';
import { getGendersApi } from '../api/gender';
import { getCategoriesApi } from '../api/categories';
import { menu } from '../utils/constants';
import * as _ from 'lodash';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);

  const state = { menu };

  useEffect(() => {
    (async () => {
      if (_.size(state.categories) === 0) {
        const response = await getCategoriesApi();
        setCategories(response || []);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (_.size(state.genders) === 0) {
        const response = await getGendersApi();
        setGenders(response || [])
      }
    })();
  }, []);

  state.categories = categories;
  state.genders = genders;

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}