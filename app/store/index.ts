import {rootReducer} from './rootReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import configureAppStore from './utils/configureAppStore';

const store = configureAppStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
