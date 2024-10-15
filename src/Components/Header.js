import {ReactComponent as Logo} from "../Assets/littleLemonLogo.svg"
import Nav from "./Nav"
export default function Header() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
                <div className="max-w-8xl mx-auto">
                    <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                        <div className="flex items-center justify-between">
                            <Logo/>
                            <Nav/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}