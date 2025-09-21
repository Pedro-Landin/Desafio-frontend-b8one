import styles from "./item.module.css";
import data from "../../../../../data/data.json";

type Props = (typeof data)[0];

export default function Item(props: Props) {
  const { title, description, price, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.itemImg}>
        <img src={photo} alt="Logo produto" />
      </div>

      <div className={styles.itemInfo}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.itemBuy}>
          <p>R$ {price.toFixed(2).replace(".", ",")}</p>
        </div>

      </div>
    </div>
  );
}
