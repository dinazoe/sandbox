import React from "react";

const Button = () => {
    return (
        <button
            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
            <span>
                <ion-icon name="settings-outline"></ion-icon>
            </span>
        </button>
    );
}

export default Button;