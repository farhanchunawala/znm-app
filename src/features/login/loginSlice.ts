import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
// import { fetchCount } from './counterAPI';

interface LoginState {
	login: 'loggedIn' | 'loggedOut';
	// status: 'idle' | 'loading' | 'failed';
}
const initialState: LoginState = {
	login: 'loggedOut',
	// status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = createAsyncThunk<
// 	number,
// 	number,
// 	{ state: { counter: CounterState } }
// >('counter/fetchCount', async (amount: number, { getState }) => {
// 	const { value } = getState().counter;
// 	const response = await fetchCount(value, amount);
// 	return response.data;
// });

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		logIn: state => {
			state.login = 'loggedIn';
			console.log(state.login);
		},
		logOut: state => {
			state.login = 'loggedOut';
			console.log(state.login);
		},
	},
	// extraReducers: builder => {
	// 	builder
	// 		.addCase(incrementAsync.pending, state => {
	// 			state.status = 'loading';
	// 		})
	// 		.addCase(incrementAsync.fulfilled, (state, action) => {
	// 			state.status = 'idle';
	// 			state.value = action.payload;
	// 		});
	// },
});

export const { logIn, logOut } = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.login.value)`
export const selectLogin = (state: RootState) => state.login.login;

export default loginSlice.reducer;
