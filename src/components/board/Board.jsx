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
        minWidth: 700,

        backgroundColor: "#1a1a1b",
    },
});


export default function Board(props) {
    const classes = useStyles();
    return (
        <div className={styles.mainContainer}>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={styles.flexMain}>
                        <div className={styles.flexOne}>
                            <ArrowUpwardIcon />
                            <div className={styles.count}><p>{props.vote}</p></div>
                            <ArrowDownwardIcon />

                        </div>
                        <div className={styles.flexTwo}>
                            <div className={styles.subFlexMain}>
                                <div className={styles.subFlexOne}>
                                    <span><img src={props.imageUrl} alt="person-1" className={styles.personImage} /></span>
                                    <span className={styles.texForm}>{props.author}</span>
                                    <span className={styles.Date}>Date : 18 June 2018</span>
                                    <div> <h4 className={styles.comments}>{props.caption}</h4></div>
                                </div>

                                <div className={styles.subFlexTwo}>
                                    <button className={styles.follow}><AddIcon />follow</button>
                                </div>
                            </div>
                            <img src={props.imageUrl} alt="meme-1" className={styles.image} />
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