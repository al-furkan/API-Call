export default function News(props) {
  // Check if props.article exists before accessing its properties
  if (!props.article) {
    return null; // or you can return a placeholder or message
  }

  return (
    <div className='news'>
      <div className='card-img'>
        {
          props.article.urlToImage !== "" ?
            <img src={props.article.urlToImage} alt="Article" />
            :
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdefault-image&psig=AOvVaw2Jd7xGvfs6zj0pYlZ44XXw&ust=1709016448874000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCStsS0yIQDFQAAAAAdAAAAABAE" alt="Default" />
        }
      </div>
      <h3>{props.article.title}</h3>
      <h3>{props.article.author}</h3>
      <p>{props.article.description?.substring(0, 100).concat("...")}<a href={props.article.url} target="_blank" rel="noreferrer"> Read More</a></p>
    </div>
  );
}
