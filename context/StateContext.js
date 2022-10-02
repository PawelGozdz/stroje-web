import { createContext, useContext, useState, useEffect } from 'react';
import { getGendersApi } from '../api/gender';
import { getCategoriesApi } from '../api/categories';
import { getDCategoriesApi } from '../api/d-categories';
import { menu } from '../utils/constants';
import * as _ from 'lodash';
import { getGlobalProps } from '../api/global';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [globalProps, setGlobalProps] = useState([]);
  const [dCategories, setDCategories] = useState([]);

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

  useEffect(() => {
    (async () => {
      if (_.size(state.globalProps) === 0) {
        const response = await getGlobalProps();
        setGlobalProps(response || [])
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (_.size(state.dodatki) === 0) {
        const response = await getDCategoriesApi();
        setDCategories(response || []);
      }
    })();
  }, []);

  state.categories = categories;
  state.genders = genders;
  state.globalProps = globalProps;
  state.dodatki = dCategories;

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}