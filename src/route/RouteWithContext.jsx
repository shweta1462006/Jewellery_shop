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
import Collection from "../Component/component_context/Collection/Collection.jsx";
import Useparams from "../Component/Destination_page/Useparams.jsx";
import ShowDetail from "../Component/Destination_page/ShowDetail.jsx";
import Wedding from "../Component/component_context/Wedding_folder/Wedding.jsx";
import Row3 from "../Component/Repeated_file/Row3.jsx";
import Gift from "../Component/component_context/Gift_Componenet/Gift.jsx";
import Silver_idol from "../Component/component_context/Silver_idol.jsx";
import GCoins_page from "../Component/component_context/GCoins_page.jsx";
import GCoins from "../Component/component_context/GCoins.jsx";
import Footer from "../Component/component_context/Footer.jsx";
import CardPage from "../Component/component_context/CardPage.jsx";
import Practice from "../Component/component_context/Practice.jsx";

import { CartProvider } from "../Component/component_context/CardContext";
import AddToCard from "../Component/component_context/AddToCard.jsx";
import Row1Neck from "../Component/Repeated_file/Row1Neck.jsx";



export default function RouteWithContext() {
  return (
    <UserProvider>
      <CartProvider> {/* 🔥 Wrap here */}
        <BrowserRouter>
          <Navbar />

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
            <Route path="/Collection" element={<Collection />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/row3" element={<Row3 />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/silver-idols" element={<Silver_idol />} />
            <Route path="/Gold_coins" element={<GCoins_page />} />
            <Route path="/Gold_coin" element={<GCoins />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/Addtocard" element={<AddToCard />} />
            <Route path="/useparams/:id" element={<Useparams />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/rneck1" element={<Row1Neck />} />






            {/* ❌ Remove this — CartProvider is NOT a page */}
            {/* <Route path="/Content_card" element={<CartProvider/>} /> */}
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}
