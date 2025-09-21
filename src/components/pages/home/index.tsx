import bannerFull from "../../../assets/banner/bannerFull.webp";
import styles from "./styles.module.css";
import data from "../../../data/data.json";

export default function Home() {
  let produtosRecomendados = [...data];
  produtosRecomendados = produtosRecomendados
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section>
      <div className={styles.banner}>
        <img src={bannerFull} alt="Banner principal" />
      </div>

      <div className={styles.produtosRecomendados}>
        <h2 className={styles.recomendadosTitle}>Produtos Recomendados</h2>
        <div className={styles.produtosRecomendados_container}>
          {produtosRecomendados.map((item) => (
            <div key={item.id} className={styles.produtoCard}>
              <img src={item.photo} alt={item.title} />
              <button> Ver mais</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
