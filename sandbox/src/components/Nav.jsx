import React from "react";

const Nav = () => {
    return (
        <div className="shadow-md w-full fixed top-0 left-0" >
            <div className="md:flex bg-white py-4">
                <div>
                    <span>
                        <ion-icon name="game-controller-outline"></ion-icon>
                    </span>
                    BangsVille
                </div>
            </div>
        </div>
    );
}

export default Nav;