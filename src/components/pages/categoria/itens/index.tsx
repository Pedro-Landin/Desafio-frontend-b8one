import Item from "./item";
import data from "../../../../data/data.json";
import styles from "./itens.module.css";
import { useEffect, useState } from "react";

interface Props {
  filtro: number | null;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(data);
  const { filtro } = props;

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  useEffect(() => {
    const novaLista = data.filter((item) => testaFiltro(item.category.id));
    setLista(novaLista);
  }, [filtro]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
