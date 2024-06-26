
import React from 'react';
import '../styles/VacationPlan.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function VacationPlan({ cards }) {
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 3) {
        groupedCards.push(cards.slice(i, i + 3));
    }

    return (
        <section id="vacation">
            <div className="container col-xxl-8">
            <div className="row">
                    <div className="col title text-center">
                        <h1>Best<span className="orange-color"> vacation plan</span></h1>
                        <p className="subtitle text-muted pt-4">Plan your perfect vacation with our travel agency. Choose<br/> among hundreds of all-inclusive offers!</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start palm-icon">
                        <img src={require(`../images/icons/palm-icon.png`)} alt="icon" className="image-left"/>
                    </div>
                </div>
                <div className="container d-flex justify-content-center">
                    <div id="vacation-carousel" className="carousel carousel-dark slide d-none d-lg-block" data-bs-ride="carousel">
                        <div class="arrows d-flex gap-2 justify-content-end">
                            <button className="btn slider-btn p-0 border-0" type="button" data-bs-target="#vacation-carousel" data-bs-slide="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="svg-left-arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                </svg>
                            </button>
                            <button className="btn slider-btn mx-4 p-0 border-0" type="button" data-bs-target="#vacation-carousel" data-bs-slide="next">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="svg-right-arrow bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </button>
                        </div>
                        <div className="carousel-inner">
                            {groupedCards.map((group, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="card-wrapper container-sm d-flex justify-content-around">
                                        {group.map(card => (
                                            <div key={card.id} className="card discounts-carousel-card card-exclusive">
                                                <img src={require(`../images/img/${card.image}`)} className="card-img-top rounded carousel-img" alt={card.title} />
                                                <div className="card-body">
                                                    <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                        <h5 className="card-title">{card.title}</h5>
                                                        <h5 className="card-title plan-price">${card.price}</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-icon bi bi-cursor-fill" viewBox="0 0 16 16">
                                                                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                                                            </svg>
                                                            <span className="ms-2 text-muted">{card.duration}</span>
                                                        </div>
                                                        <div className="col-md-6 d-flex justify-content-end ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg>
                                                            <span className="ms-1">{card.rate}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
