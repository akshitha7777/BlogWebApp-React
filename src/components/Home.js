import React from 'react'

export default function Home() {
  return (
  <div>


    
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={"images/pexels-photo-1591056.jpeg"} className="d-block w-100" alt="..." style={{height:'500px'}} />
      </div>
      <div className="carousel-item">
        <img src={"images/pexels-pixabay-163143.jpeg"} className="d-block w-100" alt="..." style={{height:'500px'}} />
      </div>
      <div className="carousel-item">
        <img src={"images/thumbnail1.jpeg"} className="d-block w-100" alt="..." style={{height:'500px'}} />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


    
  <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img src={"images/thumbnail1.jpeg"} className="d-block w-100" alt="..." style={{height:'200px'}} />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies urna eget vehicula.</p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={"images/thumbnail2.jpeg"} className="d-block w-100" alt="..." style={{height:'200px'}} />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies urna eget vehicula.</p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={"images/thumbnail3.jpeg"} className="d-block w-100" alt="..." style={{height:'200px'}} />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies urna eget vehicula.</p>
             
            </div>
          </div>
        </div>

    </div>
  </div> </div>
</div>
  )
}
