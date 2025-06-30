// Component
import MiddleFooter from "./middle-footer";
import TopFooter from "./top-footer";
import BottomFooter from "./bottom-footer";

export default function MainFooter() {
    return (
        <footer className="shadow-t bg-content1 py-25 lg:py-13">
            <div className="main-container space-y-13">
                <TopFooter />
                <MiddleFooter />
                <BottomFooter />
            </div>
        </footer>
    );
}
