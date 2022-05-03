import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;

    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }



    if (user || user1) {
        navigate('/');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='px-2 mt-2'>OR</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className='w-50 mt-2 d-block mx-auto btn btn-primary'><span>Google Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()} className='w-50 mt-2 d-block mx-auto btn btn-info'><span>Github Sign In</span>
                </button>





            </div>



        </div>
    );
};

export default SocialLogin;