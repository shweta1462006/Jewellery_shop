import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../Component/component_context/Hero";
import Login from "../Component/component_context/Login";
import ProfileDetails from "../Component/component_context/ProfileDetails";
import Navbar from "../Component/component_context/Navbar";
import { UserProvider } from "../Component/context/UserContext1";
import Card_tittle from '../Component/Pages/Card_tittle';
import Grid_card from "../Component/Pages/Grid_card";
// import ModelViewer from '../Component/Pages/MVPage'
import MVPage from "../Component/Pages/MVPage";
import Rings from "../Component/component_context/Ring/Rings.jsx";
import Bangles from "../Component/component_context/Ring/Bangle/Bangles.jsx";
import Necklaces from "../Component/component_context/Necklace/Necklaces.jsx";
import Earrings from "../Component/component_context/Earring/Earrings.jsx";



export default function RouteWithContext() {
    return (
        <UserProvider>
            <BrowserRouter>
              <Navbar/>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profilePage" element={<ProfileDetails />} />
                    <Route path="/card" element={<Card_tittle />} />
<Route path="/grid" element={<Grid_card />} />
<Route path="/bangles" element={<Bangles />} />
<Route path="/rings" element={<Rings />} />
<Route path="/necklaces" element={<Necklaces />} />
<Route path="/earrings" element={<Earrings />} />





                    {/* <Footer/> */}
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}