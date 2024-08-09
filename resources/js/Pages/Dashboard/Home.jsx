import React from "react";
import LogoutButton from "../../Components/Auth/LogoutButton";
import Layout from "../../Components/Layout/Layout";
import { Head } from '@inertiajs/react'

const Home = () => {

    return (
        <div>
            <Head title="Home" />
            <div className="">Home</div>
            <LogoutButton />
        </div>
    );
}

Home.layout = page => (
    <Layout children={page} title="Welcome" />
);

export default Home;
