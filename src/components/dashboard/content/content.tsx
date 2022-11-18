import { useEffect } from "react";
import { fetchInfo } from "../../../redux/actions-api";
import {
  getInfo,
  useAppDispatch,
  useAppSelector,
} from "../../../redux/reducer";
import styles from "./content.module.scss";

type contentType = {
  t: any;
};

export default function Content({ t }: contentType): JSX.Element {
  const info = useAppSelector(getInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  return (
    <section className={styles.content}>
      <h1 className={styles.title}>
        {info.firstName} {info.lastName}
      </h1>
      <p className={styles.info}>
        {t("createdAt")} {info.createdTimestamp}
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={styles.itemTitle}>{t("email")}</h2>
          <p className={styles.itemInfo}>{info.email}</p>
        </li>
        <li className={styles.item}>
          <h2 className={styles.itemTitle}>{t("role")}</h2>
          <h2 className={styles.itemInfo}>{info.userRole}</h2>
        </li>
        <li className={styles.item}>
          <h2 className={styles.itemTitle}>{t("username")}</h2>
          <p className={styles.itemInfo}>{info.username}</p>
        </li>
        <li className={styles.item}>
          <h2 className={styles.itemTitle}>{t("phone")}</h2>
          <p className={styles.itemInfo}>{info.phone}</p>
        </li>
        <li className={styles.item}>
          <h2 className={styles.itemTitle}>{t("avatar")}</h2>
          <img
            src={info.avatar}
            alt="avatar"
            width="144"
            className={styles.itemImg}
          />
        </li>
      </ul>
    </section>
  );
}
