import React, { useState } from 'react';

const Select = () => {

    const [select, setSelect] = useState(); 

    const selectOption = [
        { value: 'Category One', label: 'Category One' },
        { value: 'Category Two', label: 'Category Two' },
        { value: 'Category Three', label: 'Category Three' },
        { value: 'Category Four', label: 'Category Four' },
        { value: 'Category Five', label: 'Category Five' },
    ];
    
    const handleSelect = (event) => {
        let eventText = event.target.value; 
        setSelect(eventText)
    }
    
    return (
        <>
            <select className="form-select w-auto form-select-sm me-2" onChange={handleSelect}>
                <option disabled>Select Category</option>
                {
                    selectOption.map((item, index) => {
                        return (
                            <option value={item.value} key={index}>{item.label}</option>
                        )
                    })
                } 
            </select>  
        </>
    );
};

export default Select;