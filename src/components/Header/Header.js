import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {

    return (
        <div className={styles.Header}>
            <h2 onClick={props.refreshPageHandler}>Movie-Verse</h2>
            <input className={styles.SearchBar} type="text" onChange={(event) => props.searchHandler(event)} placeholder="Search" />
        </div>
    );
};

export default Header;