import { useContext } from 'react'
import { ContextProvider } from '../../context/ContextProvider'
import styles from './PrintNews.module.css'
import img from './unnamed.jpg'

const PrintNews = () => {

  const { news } = useContext(ContextProvider);

  return (
    news.map((notice, index) => {
      return(
        <li key={index}>
          <div className={styles.index}>{index}</div>
          {notice.multimedia && <img className={styles.newsImage} src={notice.multimedia[0].url} alt="img"  /> || <img src={img} className={styles.newsImage} alt='img error'/>}
          <div>
            <h1>{notice.title || 'Ops! Ocorreu um erro na notícia'}</h1>
            <span>{notice.byline || 'By Not found'}</span>
            <p>{notice.abstract || '404 Error not found' }</p>
          </div>

        </li> 
      )
    })
  )
}

export default PrintNews;