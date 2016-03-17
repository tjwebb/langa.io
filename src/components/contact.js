import React, { Component } from 'react';
import globalStyles from '../assets/styles/globals.scss';
import localStyles from './styles/Contact.scss';

//assets
import skyline from '../assets/images/skyline.svg';
import team from '../assets/images/teamblue.png';

const styles = Object.assign({}, localStyles, globalStyles);
export default class Contact extends Component {
    render() {
        return (
            <div className={styles.Contact}>
                <div className={styles.flexLeft} />
                <div className={`${styles.flexMiddle}`}>

                </div>
                <div className={styles.flexLeft} />
            </div>
        );
    }
}