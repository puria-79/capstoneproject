import {ReactComponent as Logo} from "../Assets/littleLemonLogo.svg"
import Nav from "./Nav"
export default function Header() {
    return (
        <>
            <header className="sticky top-0 z-40 w-full backdrop-blur">
                <div className="max-w-8xl mx-auto">
                    <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                        <div className="flex items-center justify-between">
                            <Logo/>
                            <Nav/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}