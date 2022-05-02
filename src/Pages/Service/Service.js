import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img, price } = service;
    const navigate = useNavigate();

    const handleVisit = (id) => {
        navigate(`/service/${id}`);
    }
    return (

        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price: {price}</p>
                <p className="card-text">{description.slice(0, 150)} <span>....</span></p>
                <button onClick={() => handleVisit(id)} type="button" class="btn btn-primary">Visit Now</button>

            </div>
        </div>

    );
};

export default Service;