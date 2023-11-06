import React from 'react'
import images from '../Asset/news.jpg'

const NewsItem = ({title, description, src, url}) => {

  return (

    <div className="card w3-card-4  col-md-6 col-lg-4  mb3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "325px"}}>
  <img src={src?src:images} style={{height: "200px", width: "310px"}} class="card-img-top img-fluid" alt="..." />
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight: "700"}}>{title.slice(0,50)}</h5>
    <p className="card-text" style={{fontSize: "13px", fontWeight: "400", color: "grey"}}>{description ? description.slice(0,90) : "News will be available soon"}</p>
    <a href={url} class="btn btn-primary">Read More</a>
  </div>
</div>

  )
}

export default NewsItem
