import data from "./data.js"
import React, { useState } from 'react';
import './styles.css';
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setmultiple] = useState([]);
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const getindexofcurrentId = cpyMultiple.indexOf(getCurrentId);

        if (getindexofcurrentId === -1) { cpyMultiple.push(getCurrentId); }
        else { cpyMultiple.splice(getindexofcurrentId, 1); }
        setmultiple(cpyMultiple);
        console.log(getindexofcurrentId, multiple);
    }
    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi selection</button>
        <div className='Accordian'>
            {data && data.length > 0 ? (
                data.map(dataItem => (
                    <div className="item">
                        <div onClick={
                            enableMultiSelection
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)}
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>{
                            enableMultiSelection ?
                                multiple.indexOf(dataItem.id) !== -1 ? (
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                ) : null
                                : selected === dataItem.id ? (
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                ) : null
                        }
                    </div>))) : (<div>No Data Found !</div>
            )}
        </div>
    </div>
}
