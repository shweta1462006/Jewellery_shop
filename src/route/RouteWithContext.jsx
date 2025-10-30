import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../Component/component_context/Hero";
import Login from "../Component/component_context/Login";
import ProfileDetails from "../Component/component_context/ProfileDetails";
import Navbar from "../Component/component_context/Navbar";
import { UserProvider } from "../Component/context/UserContext1";
import Card_tittle from '../Component/Pages/Card_tittle';
import Grid_card from "../Component/Pages/Grid_card";
import Masonry from "../Reactbit/UI/Masonry";


export default function RouteWithContext() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profilePage" element={<ProfileDetails />} />
                    <Route path="/card" element={<Card_tittle />} />
                    <Route path="/grid" element={< Grid_card/>} />
                    <Route path="/world" element={< Masonry/>} />

                    
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}