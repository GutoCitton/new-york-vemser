import { Link } from "react-router-dom";
import styles from './Header.module.css'
import img from './pngegg.png'
const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to="/home" className= {styles.imageLink}> <img src={img} alt="Logo" className= {styles.image} /> </Link>
      <nav>
        <Link className={styles.Link} to="/home">Home</Link>
        <Link className={styles.Link} to="/cience">Ciência</Link>
        <Link className={styles.Link} to="/health">Saúde</Link>
        <Link className={styles.Link} to="/politics">Política</Link>
        <Link className={styles.Link} to="/world">Mundo</Link>
      </nav>
    </header>
  )
}

export default Header;