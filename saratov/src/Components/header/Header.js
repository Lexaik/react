import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
            <div>
                <h2 className="Header">Российская федерация</h2>
                <h3 className="Header">Саратовская область</h3>
                <h1 className="Header">Саратов</h1>
            </div>
        )
    }
}
export default Header;