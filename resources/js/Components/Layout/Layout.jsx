import React from "react";

export default function Layout({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const menuToggle = () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }
    
    return (
        <div className="">
            <nav className="flex justify-around py-4 bg-white/80backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center">
                    <a className="cursor-pointer">
                        <h3 className="text-2xl font-medium text-blue-500">
                            <img
                                className="h-10 object-cover"
                                src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                                alt="Store Logo"
                            />
                        </h3>
                    </a>
                </div>
                <div className="items-center hidden space-x-8 lg:flex">
                    <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                        Home
                    </a>

                    <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold">
                        Themes
                    </a>

                    <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                        Developers
                    </a>

                    <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                        Pricing
                    </a>

                    <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                        Blog
                    </a>

                    <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                        About Us
                    </a>
                </div>
                <div className="flex items-center space-x-5">
                    <div className="action">
                        <div className="profile" onClick={menuToggle}>
                            <img src="./assets/avatar.jpg" />
                        </div>
                        <div className="menu">
                            <h3>{user.name}<br /><span>User</span></h3>
                            <ul>
                            <li>
                                <img src="./assets/icons/user.png" /><a href="#">My profile</a>
                            </li>
                            <li>
                                <img src="./assets/icons/edit.png" /><a href="#">Edit profile</a>
                            </li>
                            <li>
                                <img src="./assets/icons/envelope.png" /><a href="#">Inbox</a>
                            </li>
                            <li>
                                <img src="./assets/icons/settings.png" /><a href="#">Setting</a>
                            </li>
                            <li><img src="./assets/icons/question.png" /><a href="#">Help</a></li>
                            <li>
                                <img src="./assets/icons/log-out.png" /><a href="#">Logout</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="mt-20">
                {children}
            </div>
        </div>
    );
}
