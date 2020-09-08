import React from 'react';

function Header () {
    return (
        <div className="col-12 m-auto" id="header-color">
            <div className="row">
                <div className="col-8 h1 py-5 pl-5 text-dark">Phonebook</div>
                <div className="col-4 text-center py-5">
                    <i className="fas fa-phone-square-alt fa-3x text-dark"></i>
                </div>
            </div>
        </div>
    )
}


export default Header