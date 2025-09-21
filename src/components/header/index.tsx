import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Header() {
    const rotas = [{
    label: 'Home',
    to: '/'
  },{
    label: 'Categoria',
    to: '/categoria'
  },{
    label: 'Ofertas',
    to: '/ofertas'
  }]

  return (
    <nav className={styles.header}>
      <div className={styles.containerHeader}>
        <h1>Header</h1>
        <div>
          <ul className={styles.menuList}>
            {rotas.map((rota, index) => (
              <li key={index} className={styles.menuLink}>
                <Link to={rota.to}>{rota.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
