import Header from "../Components/Header"
import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
export default function Homepage() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <Header/>
            </div>
                <Main/>
                <Footer/>
        </>
    );
}