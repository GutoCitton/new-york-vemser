import { useEffect, useContext } from "react";
import Header from "../components/Header/Header";
import PrintNews from "../components/PrintNews/PrintNews";
import api from "../api";
import styles from './Titulo.module.css'
import { ContextProvider } from "../context/ContextProvider";


const Cience = () => {

  const { apiKey, setNews } = useContext(ContextProvider);

  const fetchNews = async () => {
    const { data } = await api.get(`science.json?api-key=${apiKey}`);
    setNews(data.results);
  }

  useEffect(() => {
   fetchNews();
  }, [])

  return (
    <div>
      <Header />   
      <h1 className={styles.titulo}>Ciência</h1>
      <ul>
        <PrintNews /> 
      </ul> 
    </div>
  )
}

export default Cience;