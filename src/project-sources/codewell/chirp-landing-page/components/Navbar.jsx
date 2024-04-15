
import TwitterIcon from "../assets/images/shared/twitter.svg";

export default function Navbar() {
    return (
        <>
            <nav className="w-full h-14 flex justify-between items-center border-black border-2 border-solid">
                <a className="text-chirp-theme-logo-blue font-bold text-2xl italic">
                    Chirp.
                </a>

                <div className="w-[475px] h-full flex justify-between items-center">
                    <a>Home</a>
                    <a>Pricing</a>
                    <a>Faq</a>

                    <div className="w-64 h-full flex justify-center items-center rounded-md bg-chirp-theme-twitter-light-blue">
                        <img src={TwitterIcon} alt="" className="mr-3" />
                        <span className="text-white font-bold">
                            Sign In With Twitter
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}