import React, { useState } from "react";
import "./styles.css";
import Button from './../Button/index';

const AddWatter = ({ handleWatterAddition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddWatterClick = () => {
        handleWatterAddition(inputData);
    };

    return (
        <div className="add-task-container">
            <input
                onChange={handleInputChange}
                value={inputData}
                className="col-sm align-items-center w-80 p-3 text-center text-primary h5"
                type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleAddWatterClick}>Adicionar</Button>
            </div>

        </div>
    );
};

export default AddWatter;