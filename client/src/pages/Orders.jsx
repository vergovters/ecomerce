import Announcement from "../components/Announcement";
import React from 'react';
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer/Footer";
import OrdersList from "../components/OrdersList";

const Orders = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <OrdersList/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default Orders;
