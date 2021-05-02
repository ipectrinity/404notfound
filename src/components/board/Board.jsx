import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AddIcon from '@material-ui/icons/Add';

import styles from "./board.module.scss";

// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";

// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
        backgroundColor: "#1a1a1b",
    },
});


export default function Board() {
    const classes = useStyles();
    return (
        <div className={styles.mainContainer}>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={styles.flexMain}>
                        <div className={styles.flexOne}>
                            <ArrowUpwardIcon />
                            <div className={styles.count}><p>69k</p></div>
                            <ArrowDownwardIcon />

                        </div>
                        <div className={styles.flexTwo}>
                            <div className={styles.subFlexMain}>
                                <div className={styles.subFlexOne}>
                                    <span><img src="https://media.pitchfork.com/photos/592c54d513d197565213eeee/2:1/w_2560%2Cc_limit/99c7a81c.jpg" alt="person-1" className={styles.personImage} /></span>
                                    <span className={styles.texForm}>xxxtentacion</span>
                                    <span className={styles.Date}>Date : 18 June 2018</span>
                                    <div> <h4 className={styles.comments}>Shout out to Elon Bhaiya</h4></div>
                                </div>

                                <div className={styles.subFlexTwo}>
                                    <button className={styles.follow}><AddIcon />follow</button>
                                </div>
                            </div>
                            <img src="https://www.digitalmarketer.com/wp-content/uploads/2020/07/you-said-memes-would-work.png" alt="meme-1" className={styles.image} />
                            <div className={styles.bottom}>
                                <span>
                                    <ChatBubbleIcon />
                                    &nbsp;
                                    Comment
                                </span>
                                <span>
                                    &nbsp; &nbsp;
                                    <ShareIcon />
                                    &nbsp;
                                    Share
                                </span>
                                <span>
                                    &nbsp; &nbsp;
                                    <BookmarksIcon />
                                    &nbsp;
                                    Save
                                </span>
                            </div>
                        </div>
                    </div>

                </CardActionArea>
            </Card>
        </div>);
}