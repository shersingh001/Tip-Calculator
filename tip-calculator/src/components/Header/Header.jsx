import React from 'react';
import style from './Header.module.css';
import Card from '../UI/Card';

const Header = () => {
    return(
        <Card className={style.header_main}>
            <div className={style.header_main_heading}>
                <h2>Tip Calculator</h2>
            </div>
            <div className={style.header_main_text}>
                <p>Build in React</p>
            </div>
        </Card>
    )
}

export default Header;