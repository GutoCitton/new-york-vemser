import { useEffect, useContext, useState } from "react";
import Header from "../components/Header/Header";
import PrintNews from "../components/PrintNews/PrintNews";
import api from "../api";
import styles from './Titulo.module.css'
import { ContextProvider } from "../context/ContextProvider";
import Loading from "../components/Loading/Loading";


const Cience = () => {

  const [loading, setLoading] = useState(true);

  const { apiKey, setNews } = useContext(ContextProvider);

  const fetchNews = async () => {
    const { data } = await api.get(`science.json?api-key=${apiKey}`);
    setNews(data.results);
    setLoading(false);
  }

  useEffect(() => {
   fetchNews();
  }, [])

  return (
    <div>
      <Header />   
      <h1 className={styles.titulo}>Ciência</h1>
      { !loading 
      ? <ul> <PrintNews /> </ul> 
      : <Loading />}
    </div>
  )
}

export default Cience;