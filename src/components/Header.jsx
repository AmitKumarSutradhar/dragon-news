import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-3">
            <div className="logo">
                <img src={logo} className="w-[300px]" alt="" />
                <h2>Journalism Without Fear or Favour</h2>
            </div>
        </div>
    );
};

export default Header;