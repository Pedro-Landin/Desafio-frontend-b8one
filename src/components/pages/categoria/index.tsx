import Itens from "./itens";
import Filtros from "./filtros";
import { useState } from "react";
import styles from "./categoria.module.css";

export default function Categoria() {
   const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <section>
      <h3 className={styles.categoriaTitle}>Categoria</h3>

      <div className={styles.categoriaFiltros}>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
      </div>

      <Itens filtro={filtro} />
    </section>
  );
}
