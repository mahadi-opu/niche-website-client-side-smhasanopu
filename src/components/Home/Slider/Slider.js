import React from 'react';

/* 
https://i.ibb.co/nkpd7zM/1.jpg
https://i.ibb.co/jWQNjZG/2.jpg
https://i.ibb.co/x2CyVQW/3.jpg
https://i.ibb.co/gP8CBL2/4.jpg

*/

const Slider = () => {
    return (
        <div>

            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img height="650px" src="https://babynoomie.com/wp-content/uploads/2017/06/Banner-4th-of-july.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img height="650px" src="https://res.cloudinary.com/mommy-nearest/image/upload/c_fill,h_400,w_900/johvjvpclqbrpvfedozc.png" className="d-block w-100" alt="..." />
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
            </div>
        </div>
    );
};

export default Slider;