// Components
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";
import HeaderMobile from "./header-mobile";

export default function MainHeader() {
    return (
        <header className="shadow-b bg-content1 sticky top-0 z-30 pt-5 shadow">
            <div className="main-container">
                <HeaderTop />
                <HeaderBottom />
                <HeaderMobile />
            </div>
        </header>
    );
}
