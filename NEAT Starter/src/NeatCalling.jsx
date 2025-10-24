import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Hello from "./Header";


export default function NeatCalling() {
  return (
    <div>
        <Hello/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
    </div>
  )
}
