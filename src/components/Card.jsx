import React from 'react'
import styles from '../styles/Card.module.css'

const Card = ({ usuario }) => {
    return (
        <div className={styles.cardContainer}>
            <div >Mascota: </div>
            <div >{usuario.mascota}</div>
            <div >Dueño: </div>
            <div >{usuario.dueño}</div>
        </div>
    )
};

export default Card