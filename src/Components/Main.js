import { Link } from "react-router-dom"
import dish from "../Assets/restauranfood.jpg"
export default function Main() {
    return (
        <>
            <div className="bg-green">
                <div className="max-w-screen-xl mx-auto flex justify-around">
                    <div className="w-2/6 content-center">
                        <h1 className="text-yellow text-7xl">Little Lemon</h1>
                        <p className="text-white text-4xl">Chicago</p>
                        <p className="text-white text-2xl pt-8 pb-6 max-w-96">We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to="/reservation" className="inline bg-yellow text-3xl text-center font-bold rounded-xl p-2 px-10 self-center">Reserve a Table</Link>
                    </div>
                    <div>
                        <img src={dish} className="rounded-xl w-96 relative right-20 top-20"/>
                    </div>
                </div>
            </div>
            <div className="mt-40 max-w-screen-xl mx-auto">
                <div className="flex content-center justify-between">
                    <p className="text-black text-7xl font-semibold">This week special!</p>
                    <Link to="/menu" className="inline bg-yellow text-3xl text-center font-bold rounded-xl p-4 px-10 self-center">Online Menu</Link>
                </div>
            </div>
        </>
    )
}