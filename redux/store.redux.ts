// Redux
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import authFormReducer from "@/features/auth/redux/auth.reducer";

export const store = configureStore({
    reducer: {
        authForm: authFormReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
