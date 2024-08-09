import React from "react";
import { logoutService } from "../../Services/Logout";
import { router } from '@inertiajs/react'

const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            const response = await logoutService();

            if (response.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                router.delete("/logout", {});
            } else {
                console.error("Logout failed:", response.data.message);
            }
        } catch (error) {
            console.error("Unexpected logout error:", error.message);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
