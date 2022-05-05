import React from 'react';
import { Form, Button } from 'react-bootstrap';


const CheckOut = () => {
    const handleCheckout = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const number = event.target.number.value;

        console.log(name, email, address, number);
    }

    return (
        <div className='w-50 mx-auto mt-4'>
            <h2>Please Fill this form for Checkout</h2>
            <Form onSubmit={handleCheckout}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email" name='email' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="address" name='address' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="phone" name='number' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Process checkout
                </Button>

            </Form>

        </div>
    );
};

export default CheckOut;