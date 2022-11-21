import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {format} from "date-fns";
import {AppDispatch, RootState} from "./store";
import {AuthorizationStatus, PersonType} from "./types";

export type State = {
  person: PersonType;
  authorizationStatus: AuthorizationStatus;
};

const initialState: State = {
  person: {} as PersonType,
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const getInfo = (state: State) => state.person;
export const getAuth = (state: State) => state.authorizationStatus;

const appDataSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    loadPerson: (state, action: PayloadAction<PersonType>) => {
      const time = format(
        Number(action.payload?.createdTimestamp),
        "dd.MM.yyyy HH:mm"
      );
      const phone = action.payload?.phone
        .replace(/\D+/g, "")
        .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1($2)$3-$4"); // Лучше хранить в store в таком виде, а  форматировать при отображении. Так будет проще работать с данными в других местах.

      state.person = action.payload;
      state.person.createdTimestamp = time;
      state.person.phone = phone;
    },
    authorization: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    requireLogout: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    },
  },
});

export const {loadPerson, authorization, requireLogout} =
  appDataSlice.actions;

export default appDataSlice.reducer;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
