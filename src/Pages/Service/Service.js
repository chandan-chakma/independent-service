import React from 'react';

const Service = ({ service }) => {
    const { id, name, description, img, price } = service
    return (

        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description.slice(0, 150)} <span>....</span></p>
                <button type="button" class="btn btn-primary">Visit Now</button>

            </div>
        </div>

    );
};

export default Service;