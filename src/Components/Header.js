import {ReactComponent as Logo} from "../Assets/littleLemonLogo.svg"
export default function Header() {
    return (
        <>
            <header className="bg-blue-500">
                <Logo className="bg-blue-500"/>
                <p className="text-3xl font-bold underline">hi</p>
            </header>
        </>
    )
}