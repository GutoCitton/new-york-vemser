import img from './Bean Eater-1s-200px.gif'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <img src={img} alt="Loadwig" />
    </div>
  )
}

export default Loading;