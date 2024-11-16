import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocailaLogin = () => {
    return (
        <div>
            <h3 className='font-semibold mb-3'>Login with</h3>
            <div className="*:w-full space-y-2">
                <button className="btn">
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn">
                    <FaGithub></FaGithub> Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocailaLogin;