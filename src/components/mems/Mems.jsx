import React from 'react';
import styles from "./mems.module.scss";

import Board from "../board/Board.jsx";




export default function Memes(prop) {
    return (<div>
        <div className={styles.mainHead}>
            <h1 className={styles.topMeme}>Top meme news</h1>
            <div className={styles.wrapperFlex}>
                <div className={styles.container}>
                    <div className={`${styles.bannerImg} ${styles.tesla}`} />
                    <div className={styles.description}>Reports Suggest That Upcoming Tesla Cars Will Be Driven By Cheems. Elon Musk says "I am Proud" :)</div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.bannerImg} ${styles.cheems}`} />
                    <div className={styles.description}>Cheems Dog Demands A New Nation For Itself. Wants To Name It "Cheems Bois" !!</div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.bannerImg} ${styles.dogecoin}`} />
                    <div className={styles.description}>Popular Meme Platform "Elon Musk Cheems" Got Award for Making 100 Million People Laugh</div>
                </div>
            </div>
            <h1 className={styles.topMeme}>Top memes of the day</h1>
        </div>

        {prop.data.map((meme, index) => {
            return (
                <Board
                    key={index}
                    author={meme.author}
                    imageUrl={meme.url}
                    vote={meme.ups}
                    caption={meme.title}
                />
            );
        })}
    </div>);
}
