const PrintNews = ({ news }) => {
  return (
    news.map((notice, index) => {
      return(
        <li key={index}>
          <br />
          {index}
          {notice.multimedia && <img src={notice.multimedia[0].url} alt="img" />}
          <h1>{notice.title}</h1>
          <span>By: {notice.byline}</span>
          <p>{notice.abstract}</p>
        </li> 
      )
    })
  )
}

export default PrintNews;