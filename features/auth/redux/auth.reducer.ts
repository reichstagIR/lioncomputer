// Redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// Enum
import EAuthFormCode from "../enum/formCode.enum";

interface IAuthFormState {
    value: EAuthFormCode;
}

const initialState: IAuthFormState = {
    value: EAuthFormCode.SING_IN,
};

export const counterSlice = createSlice({
    name: "authForm",
    initialState,
    reducers: {
        setAuthForm: (state, action: PayloadAction<IAuthFormState>) => {
            state.value = action.payload.value;
        },
    },
});

export const { setAuthForm } = counterSlice.actions;

export default counterSlice.reducer;
