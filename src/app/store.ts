import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import loginReducer from '../features/login/loginSlice';
// import counterReducer from '../features/counter/counterSlice';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['login'], // You can choose which reducers to persist here
	// blacklist: ['counter'], // Or which reducers not to persist here
};

const rootReducer = combineReducers({
	login: loginReducer,
	// counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					'persist/PERSIST',
					'persist/REHYDRATE',
					'persist/PURGE',
					'persist/REGISTER',
				],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
