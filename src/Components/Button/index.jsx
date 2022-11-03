import React from "react";
import "./styles.css";

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="btn btn-primary btn-lg btn-block text-white w-80 p-3 align-items-center text-center">
            {children}
        </button>
    );
}

export default Button;