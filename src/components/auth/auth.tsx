import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { emailValid, letterCheck, numberCheck } from "../../const";
import { loginAction } from "../../redux/actions-api";
import { useAppDispatch } from "../../redux/reducer";
import { AuthorizationData } from "../../redux/types";
import styles from "./auth.module.scss";

const DEFAULT_STATE: AuthorizationData = {
  login: "",
  password: "",
};

export default function Auth(): JSX.Element {

  const [userInput, setUserInput] = useState(DEFAULT_STATE);
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthorizationData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!userInput.login) {
      return toast.error("Please enter valid email", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (!emailValid.test(userInput.login)) {
      return toast.error("Please enter valid email", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (!letterCheck.test(userInput.password)) {
      return toast.error("Password must have at least one letter", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (!numberCheck.test(userInput.password)) {
      return toast.error("Password must have at least one number", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (userInput.login !== "" && userInput.password !== "") {
      onSubmit(userInput);
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles.auth}>
      <form
        onSubmit={handleSubmit}
        action="#"
        className={styles.form}
        method="post"
      >
        <h1 className={styles.title}>Betdevel</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Login"
          onChange={(evt) =>
            setUserInput({
              ...userInput,
              login: evt.currentTarget.value,
            })
          }
        />
        <div>
          <input
            className={styles.input}
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            onChange={(evt) =>
              setUserInput({
                ...userInput,
                password: evt.currentTarget.value,
              })
            }
          />
          <button
            onClick={togglePassword}
            className={styles.showButton}
            type="button"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.8652 15.4589C10.0259 12.2983 14.9587 9.125 22 9.125C29.0413 9.125 33.9741 12.2983 37.1348 15.4589C38.7137 17.0378 39.8533 18.6159 40.5989 19.8C40.9719 20.3925 41.247 20.8875 41.4297 21.2363C41.5211 21.4107 41.5894 21.5487 41.6354 21.6441C41.6584 21.6918 41.6757 21.7289 41.6876 21.7547L41.7014 21.7846L41.7052 21.793L41.7063 21.7955L41.7067 21.7964C41.7068 21.7967 41.7069 21.7969 41.25 22C41.7069 22.2031 41.7068 22.2033 41.7067 22.2036L41.7063 22.2045L41.7052 22.207L41.7014 22.2154L41.6876 22.2453C41.6757 22.2711 41.6584 22.3082 41.6354 22.3559C41.5894 22.4513 41.5211 22.5893 41.4297 22.7637C41.247 23.1125 40.9719 23.6075 40.5989 24.2C39.8533 25.3841 38.7137 26.9622 37.1348 28.5411C33.9741 31.7017 29.0413 34.875 22 34.875C14.9587 34.875 10.0259 31.7017 6.8652 28.5411C5.28631 26.9622 4.14667 25.3841 3.4011 24.2C3.02807 23.6075 2.75297 23.1125 2.57027 22.7637C2.4789 22.5893 2.41058 22.4513 2.36462 22.3559C2.34164 22.3082 2.32425 22.2711 2.31236 22.2453L2.29864 22.2154L2.29485 22.207L2.29372 22.2045L2.29334 22.2036C2.29321 22.2033 2.29309 22.2031 2.75 22C2.29309 21.7969 2.29321 21.7967 2.29334 21.7964L2.29372 21.7955L2.29485 21.793L2.29864 21.7846L2.31236 21.7547C2.32425 21.7289 2.34164 21.6918 2.36462 21.6441C2.41058 21.5487 2.4789 21.4107 2.57027 21.2363C2.75297 20.8875 3.02807 20.3925 3.4011 19.8C4.14667 18.6159 5.28631 17.0378 6.8652 15.4589ZM2.75 22L2.29309 21.7969C2.23564 21.9262 2.23564 22.0738 2.29309 22.2031L2.75 22ZM3.30358 22C3.34248 22.079 3.39323 22.1797 3.4561 22.2997C3.62789 22.6277 3.8899 23.0995 4.24734 23.6672C4.9627 24.8034 6.05744 26.3191 7.5723 27.8339C10.5991 30.8608 15.2913 33.875 22 33.875C28.7087 33.875 33.4009 30.8608 36.4277 27.8339C37.9426 26.3191 39.0373 24.8034 39.7527 23.6672C40.1101 23.0995 40.3721 22.6277 40.5439 22.2997C40.6068 22.1797 40.6575 22.079 40.6964 22C40.6575 21.921 40.6068 21.8203 40.5439 21.7003C40.3721 21.3723 40.1101 20.9005 39.7527 20.3328C39.0373 19.1966 37.9426 17.6809 36.4277 16.1661C33.4009 13.1392 28.7087 10.125 22 10.125C15.2913 10.125 10.5991 13.1392 7.5723 16.1661C6.05744 17.6809 4.9627 19.1966 4.24734 20.3328C3.8899 20.9005 3.62789 21.3723 3.4561 21.7003C3.39323 21.8203 3.34248 21.921 3.30358 22ZM41.25 22L41.7069 22.2031C41.7644 22.0738 41.7644 21.9262 41.7069 21.7969L41.25 22Z"
                fill="#9D9D9D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 15.625C18.4792 15.625 15.625 18.4792 15.625 22C15.625 25.5208 18.4792 28.375 22 28.375C25.5208 28.375 28.375 25.5208 28.375 22C28.375 18.4792 25.5208 15.625 22 15.625ZM14.625 22C14.625 17.9269 17.9269 14.625 22 14.625C26.0731 14.625 29.375 17.9269 29.375 22C29.375 26.0731 26.0731 29.375 22 29.375C17.9269 29.375 14.625 26.0731 14.625 22Z"
                fill="#9D9D9D"
              />
            </svg>
          </button>
        </div>

        <button type="submit" className={styles.button}>
          Sign in
        </button>
      </form>
    </div>
  );
}
