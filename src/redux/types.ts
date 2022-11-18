import { Action } from "redux";
import { ThunkAction } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { RootState } from "./store";
import { State } from "./reducer";

export type PersonType = {
  createdTimestamp: string
  email: string;
  userRole: string;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export type AuthorizationData = {
  login: string;
  password: string;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export enum APIRoute {
  Login = "/login",
  User = "/users/me",
  Logout = '/logout',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>;
