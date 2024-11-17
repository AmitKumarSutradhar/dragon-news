import { Link } from "react-router-dom";
import userIcon from '../assets/images/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="flex justify-between">
            <div className="">{user && user.name}</div>
            <div className="nav space-x-5">
                <Link to={'/'}>Home</Link>
                <Link to={'/career'}>Career</Link>
                <Link to={'/about'}>About</Link>
            </div>

            {
                user && user?.email ?
                    <button onClick={ logOut } className="btn btn-neutral rounded-none">
                        Logout
                    </button>
                    :
                    <div className="login">
                        <div className="flex gap-2">
                            <img src={userIcon} alt="" />
                            <Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>
                        </div>
                    </div>
            }


        </div>
    );
};

export default NavBar;