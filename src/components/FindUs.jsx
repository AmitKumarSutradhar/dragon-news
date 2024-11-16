import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h3 className='font-semibold mb-3'>Find us on</h3>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaX></FaX> X.com</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instragram</button>
            </div>
        </div>
    );
};

export default FindUs;