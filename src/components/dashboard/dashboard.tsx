import { useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import styles from "./dashboard.module.scss";
import Content from './content/content';
import { logoutAction } from "../../redux/actions-api";
import { useAppDispatch } from "../../redux/reducer";

export default function Dashboard(): JSX.Element {
  const [checked, setChecked] = useState('id_2');
  const dispatch = useAppDispatch();

  const [ lang, setLang ] = useState('ru')

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {

    if (lang === 'ru') {
      setLang('en')
    }

    if (lang === 'en') {
      setLang('ru')
    }

    i18n.changeLanguage(lang);
  };


  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div className={styles.dashboard}>
      <section className={styles.sectionMenu}>
        <ul className={styles.listRadio}>
          <li className={styles.itemRadio}>
            <input
              className={styles.input}
              type="radio"
              id="id_1"
              name="radio-group"
              // defaultChecked
              checked={checked === "id_1"}
              onChange={() => setChecked("id_1")}
            ></input>
            <label className={checked === "id_1" ? styles.labelActive : styles.label} htmlFor="id_1">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 0.333313C10.04 0.333313 0.333374 10.04 0.333374 22C0.333374 33.96 10.04 43.6666 22 43.6666C33.96 43.6666 43.6667 33.96 43.6667 22C43.6667 10.04 33.96 0.333313 22 0.333313ZM22 6.83331C25.5967 6.83331 28.5 9.73665 28.5 13.3333C28.5 16.93 25.5967 19.8333 22 19.8333C18.4034 19.8333 15.5 16.93 15.5 13.3333C15.5 9.73665 18.4034 6.83331 22 6.83331ZM22 37.6C16.5834 37.6 11.795 34.8266 9.00004 30.6233C9.06504 26.3116 17.6667 23.95 22 23.95C26.3117 23.95 34.935 26.3116 35 30.6233C32.205 34.8266 27.4167 37.6 22 37.6Z"
                  fill="white"
                />
              </svg>
            </label>
          </li>
          <li className={styles.itemRadio}>
            <input
            className={styles.input}
              type="radio"
              id="id_2"
              name="radio-group"
              checked={checked === "id_2"}
              onChange={() => setChecked("id_2")}
            ></input>
            <label className={checked === "id_2" ? styles.labelActive : styles.label} htmlFor="id_2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.25 2.75H10.75V1.25C10.75 1.05109 10.671 0.860322 10.5303 0.71967C10.3897 0.579018 10.1989 0.5 10 0.5C9.80109 0.5 9.61032 0.579018 9.46967 0.71967C9.32902 0.860322 9.25 1.05109 9.25 1.25V2.75H1.75C1.35218 2.75 0.970644 2.90804 0.68934 3.18934C0.408035 3.47064 0.25 3.85218 0.25 4.25V15.5C0.25 15.8978 0.408035 16.2794 0.68934 16.5607C0.970644 16.842 1.35218 17 1.75 17H5.44375L3.41875 19.5312C3.33066 19.6413 3.27535 19.7739 3.25917 19.9139C3.24299 20.0539 3.26658 20.1957 3.32726 20.3229C3.38793 20.4501 3.48322 20.5576 3.60221 20.6332C3.72119 20.7087 3.85906 20.7492 4 20.75C4.11195 20.7507 4.22258 20.7258 4.32335 20.677C4.42413 20.6282 4.51236 20.557 4.58125 20.4688L7.35625 17H12.6437L15.4188 20.4688C15.4876 20.557 15.5759 20.6282 15.6767 20.677C15.7774 20.7258 15.8881 20.7507 16 20.75C16.1409 20.7492 16.2788 20.7087 16.3978 20.6332C16.5168 20.5576 16.6121 20.4501 16.6727 20.3229C16.7334 20.1957 16.757 20.0539 16.7408 19.9139C16.7246 19.7739 16.6693 19.6413 16.5812 19.5312L14.5563 17H18.25C18.6478 17 19.0294 16.842 19.3107 16.5607C19.592 16.2794 19.75 15.8978 19.75 15.5V4.25C19.75 3.85218 19.592 3.47064 19.3107 3.18934C19.0294 2.90804 18.6478 2.75 18.25 2.75ZM7.75 12.5C7.75 12.6989 7.67098 12.8897 7.53033 13.0303C7.38968 13.171 7.19891 13.25 7 13.25C6.80109 13.25 6.61032 13.171 6.46967 13.0303C6.32902 12.8897 6.25 12.6989 6.25 12.5V10.25C6.25 10.0511 6.32902 9.86032 6.46967 9.71967C6.61032 9.57902 6.80109 9.5 7 9.5C7.19891 9.5 7.38968 9.57902 7.53033 9.71967C7.67098 9.86032 7.75 10.0511 7.75 10.25V12.5ZM10.75 12.5C10.75 12.6989 10.671 12.8897 10.5303 13.0303C10.3897 13.171 10.1989 13.25 10 13.25C9.80109 13.25 9.61032 13.171 9.46967 13.0303C9.32902 12.8897 9.25 12.6989 9.25 12.5V8.75C9.25 8.55109 9.32902 8.36032 9.46967 8.21967C9.61032 8.07902 9.80109 8 10 8C10.1989 8 10.3897 8.07902 10.5303 8.21967C10.671 8.36032 10.75 8.55109 10.75 8.75V12.5ZM13.75 12.5C13.75 12.6989 13.671 12.8897 13.5303 13.0303C13.3897 13.171 13.1989 13.25 13 13.25C12.8011 13.25 12.6103 13.171 12.4697 13.0303C12.329 12.8897 12.25 12.6989 12.25 12.5V7.25C12.25 7.05109 12.329 6.86032 12.4697 6.71967C12.6103 6.57902 12.8011 6.5 13 6.5C13.1989 6.5 13.3897 6.57902 13.5303 6.71967C13.671 6.86032 13.75 7.05109 13.75 7.25V12.5Z"
                  fill="#9D9D9D"
                />
              </svg>
            </label>
          </li>
          <li className={styles.itemRadio}>
            <input
            className={styles.input}
              type="radio"
              id="id_3"
              name="radio-group"
              checked={checked === "id_3"}
              onChange={() => setChecked("id_3")}
            ></input>
            <label className={checked === "id_3" ? styles.labelActive : styles.label} htmlFor="id_3">
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3636 6.9091C18.2182 6.9091 19.6364 5.49092 19.6364 3.63637C19.6364 1.78183 18.2182 0.363647 16.3636 0.363647C14.5091 0.363647 13.0909 1.78183 13.0909 3.63637C13.0909 5.49092 14.5091 6.9091 16.3636 6.9091ZM7.63636 6.9091C9.49091 6.9091 10.9091 5.49092 10.9091 3.63637C10.9091 1.78183 9.49091 0.363647 7.63636 0.363647C5.78182 0.363647 4.36364 1.78183 4.36364 3.63637C4.36364 5.49092 5.78182 6.9091 7.63636 6.9091ZM7.63636 9.09092C5.12727 9.09092 0 10.4 0 12.9091V15.6364H15.2727V12.9091C15.2727 10.4 10.1455 9.09092 7.63636 9.09092ZM16.3636 9.09092C16.0364 9.09092 15.7091 9.09092 15.2727 9.20001C16.5818 10.0727 17.4545 11.3818 17.4545 12.9091V15.6364H24V12.9091C24 10.4 18.8727 9.09092 16.3636 9.09092Z"
                  fill="#9D9D9D"
                />
              </svg>
            </label>
          </li>
          <li className={styles.itemRadio}>
            <input
            className={styles.input}
              type="radio"
              id="id_4"
              name="radio-group"
              checked={checked === "id_4"}
              onChange={() => setChecked("id_4")}
            ></input>
            <label className={checked === "id_4" ? styles.labelActive : styles.label} htmlFor="id_4">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1254 2.87452C13.1254 2.42956 13.2574 1.99458 13.5046 1.6246C13.7518 1.25463 14.1032 0.966264 14.5143 0.795982C14.9254 0.6257 15.3777 0.581147 15.8141 0.667956C16.2506 0.754765 16.6514 0.969037 16.9661 1.28368C17.2807 1.59832 17.495 1.99919 17.5818 2.43561C17.6686 2.87203 17.624 3.32439 17.4538 3.73548C17.2835 4.14658 16.9951 4.49795 16.6251 4.74516C16.2552 4.99237 15.8202 5.12432 15.3752 5.12432C14.7793 5.12185 14.2085 4.88403 13.7871 4.46265C13.3657 4.04126 13.1279 3.47045 13.1254 2.87452ZM23.9057 17.1232C23.8386 17.2376 23.7427 17.3324 23.6276 17.3982C23.5125 17.464 23.3821 17.4984 23.2495 17.4982H0.751537C0.61996 17.4997 0.49042 17.4656 0.37658 17.3996C0.262739 17.3337 0.168818 17.2382 0.10472 17.1232C0.0361864 17.0085 0 16.8773 0 16.7436C0 16.6099 0.0361864 16.4787 0.10472 16.3639L6.95723 4.72123C7.08956 4.49569 7.27856 4.30866 7.50549 4.17871C7.73241 4.04875 7.98936 3.98039 8.25086 3.98039C8.51236 3.98039 8.76932 4.04875 8.99624 4.17871C9.22316 4.30866 9.41216 4.49569 9.5445 4.72123L13.5098 11.4613L15.9564 7.32725C16.0906 7.10401 16.2802 6.91928 16.5069 6.79103C16.7336 6.66279 16.9896 6.59539 17.2501 6.59539C17.5105 6.59539 17.7665 6.66279 17.9932 6.79103C18.2199 6.91928 18.4095 7.10401 18.5437 7.32725L23.8963 16.3639C23.9626 16.4792 23.9983 16.6094 23.9999 16.7424C24.0016 16.8753 23.9691 17.0064 23.9057 17.1232ZM6.02919 9.24895H10.4725L8.25086 5.48054L6.02919 9.24895Z"
                  fill="#9D9D9D"
                />
              </svg>
            </label>
          </li>
          <li className={styles.itemRadio}>
            <input
            className={styles.input}
              type="radio"
              id="id_5"
              name="radio-group"
              checked={checked === "id_5"}
              onChange={() => setChecked("id_5")}
            ></input>
            <label className={checked === "id_5" ? styles.labelActive : styles.label} htmlFor="id_5">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5889 4.49673C23.3159 4.21795 22.9785 4.07414 22.5792 4.07414H1.42055C1.02149 4.07414 0.683843 4.21795 0.410784 4.49673C0.143804 4.76979 0 5.10744 0 5.49497V20.5008C0 20.8883 0.137765 21.2317 0.410824 21.5105C0.678078 21.7835 1.02153 21.9215 1.42059 21.9215H22.5792C22.9785 21.9215 23.3219 21.7834 23.5889 21.5105C23.862 21.2317 24 20.8883 24 20.5008V5.49497C24 5.10744 23.8562 4.76979 23.5889 4.49673ZM22.6967 20.5008C22.6967 20.5829 22.6614 20.6182 22.5792 20.6182H1.42055C1.36192 20.6182 1.29153 20.5478 1.29153 20.5008V11.3187H22.6967L22.6967 20.5008ZM22.6967 7.99587H1.29157V5.49497C1.29157 5.44787 1.36196 5.37748 1.42059 5.37748H22.5792C22.6614 5.37748 22.6967 5.41281 22.6967 5.49497V7.99587Z"
                  fill="#9D9D9D"
                />
                <path
                  d="M22.6967 7.99587H1.29157V5.49497C1.29157 5.44787 1.36196 5.37748 1.42059 5.37748H22.5792C22.6614 5.37748 22.6967 5.41281 22.6967 5.49497V7.99587Z"
                  fill="#9D9D9D"
                />
                <path
                  d="M22.6967 20.5008C22.6967 20.5829 22.6614 20.6182 22.5792 20.6182H1.42055C1.36192 20.6182 1.29153 20.5478 1.29153 20.5008V11.3187H22.6967L22.6967 20.5008Z"
                  fill="#9D9D9D"
                />
                <path
                  d="M4.59107 17.9763H12.6224C12.9864 17.9763 13.2682 17.6945 13.2682 17.3305C13.2682 16.9665 12.9864 16.6847 12.6224 16.6847H4.59107C4.22687 16.6847 3.94507 16.9665 3.94507 17.3305C3.94507 17.6945 4.22687 17.9763 4.59107 17.9763Z"
                  fill="white"
                />
                <rect y="7.99783" width="24" height="4" fill="white" />
              </svg>
            </label>
          </li>
        </ul>

        <ul className={styles.listSettings}>
          <li className={styles.itemSettings}>
            <Link onClick={handleLogout} className={styles.link} to="/">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.91 12.59L9.5 14L4.5 9L9.5 4L10.91 5.41L8.33 8H18V10H8.33L10.91 12.59ZM2 0H16C17.11 0 18 0.9 18 2V6H16V2H2V16H16V12H18V16C18 17.1 17.11 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0Z"
                  fill="#9D9D9D"
                />
              </svg>
            </Link>
          </li>

          <li className={styles.itemSettings}>
            <button onClick={() => changeLanguage()} className={styles.changeLanguage}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.14 10.936C17.176 10.636 17.2 10.324 17.2 9.99999C17.2 9.67599 17.176 9.36399 17.128 9.06399L19.156 7.47999C19.336 7.33599 19.384 7.07199 19.276 6.86799L17.356 3.54399C17.236 3.32799 16.984 3.25599 16.768 3.32799L14.38 4.28799C13.876 3.90399 13.348 3.59199 12.76 3.35199L12.4 0.807994C12.364 0.567994 12.16 0.399994 11.92 0.399994H8.07998C7.83998 0.399994 7.64799 0.567994 7.61199 0.807994L7.25199 3.35199C6.66398 3.59199 6.12399 3.91599 5.63199 4.28799L3.24398 3.32799C3.02798 3.24399 2.77598 3.32799 2.65598 3.54399L0.735985 6.86799C0.615985 7.08399 0.663985 7.33599 0.855985 7.47999L2.88398 9.06399C2.83598 9.36399 2.79998 9.68799 2.79998 9.99999C2.79998 10.312 2.82398 10.636 2.87198 10.936L0.843984 12.52C0.663984 12.664 0.615985 12.928 0.723985 13.132L2.64398 16.456C2.76398 16.672 3.01598 16.744 3.23198 16.672L5.61998 15.712C6.12398 16.096 6.65198 16.408 7.23998 16.648L7.59999 19.192C7.64798 19.432 7.83998 19.6 8.07998 19.6H11.92C12.16 19.6 12.364 19.432 12.388 19.192L12.748 16.648C13.336 16.408 13.876 16.084 14.368 15.712L16.756 16.672C16.972 16.756 17.224 16.672 17.344 16.456L19.264 13.132C19.384 12.916 19.336 12.664 19.144 12.52L17.14 10.936ZM9.99998 13.6C8.01999 13.6 6.39998 11.98 6.39998 9.99999C6.39998 8.01999 8.01999 6.39999 9.99998 6.39999C11.98 6.39999 13.6 8.01999 13.6 9.99999C13.6 11.98 11.98 13.6 9.99998 13.6Z"
                  fill="#9D9D9D"
                />
              </svg>
            </button>
          </li>
        </ul>
      </section>

<Content t={t} />
    </div>
  );
}
