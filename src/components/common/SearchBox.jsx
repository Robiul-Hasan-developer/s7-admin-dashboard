import React from 'react';

const SearchBox = () => {
    return (
        <form className="s7__nav-search-form">
            <input type="text" name="#0" placeholder="Search..." />
            <button type="submit" className='text-white'><i className='fas fa-search'></i></button>
        </form>
    );
};

export default SearchBox;