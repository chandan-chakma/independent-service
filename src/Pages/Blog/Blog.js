import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mt-4 container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Different between Authorization and Authentication?</Accordion.Header>
                    <Accordion.Body>
                        Authentication is a process of recognizing user identity.Suppose you want to log in travel website
                        if you register before it will give you access,if not they will not give access. basically it will prove that you are user or not.

                        Authorization is the act of authorizing. your travel website you use google login system so, you need to take permission others you can not login. For login system we use other resource and give permission.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>

                    <Accordion.Body>
                        Firebase created by Google.If you are single person to handle your website, its difficult to handle if lots of user. Firebase make it easy for us.We dont need to handle google will handle it and firebase easy to implement code.

                        there are many authentication system like Firebase,Octa,Auth0, JumpCLoud, Microsoft Azure active directory, ForgeRock etc.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> What other services does firebase provide other than authentication?</Accordion.Header>

                    <Accordion.Body>
                        We cav add Firebase those services are unity, android app+ios , realtime database, server environments, emulate suit, hosting, cloud function etc.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;