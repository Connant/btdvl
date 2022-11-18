import { toast } from "react-toastify";
import { AppRoute } from "../const";
import { dropToken, saveToken, Token } from "../services/token";
import { authorization, loadPerson, requireLogout } from "./reducer";
import { api } from "./store";
import {
  AuthorizationData,
  ThunkActionResult,
  APIRoute,
  AuthorizationStatus,
} from "./types";

export const loginAction =
  ({ login: email, password }: AuthorizationData): ThunkActionResult =>
  async (dispatch, _getState): Promise<void> => {
    try {
      const {
        data: { token },
      } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });

      if (token) {
        saveToken(token);
        dispatch(authorization(AuthorizationStatus.Auth));
        window.location.href = AppRoute.Dashboard;
      } else {
        toast.info(
          "Your email or password was entered incorrectly, please try again",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      }
    } catch {
      toast.info("error", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

export const logoutAction =
  (): ThunkActionResult =>
  async (dispatch, _getState): Promise<void> => {
    dropToken();
    dispatch(requireLogout());
  };

export const fetchInfo =
  (): ThunkActionResult =>
  async (dispatch, _getState): Promise<void> => {
    try {
      const { data } = await api.get(APIRoute.User);
      dispatch(loadPerson(data));
    } catch {
      toast.info("error", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
