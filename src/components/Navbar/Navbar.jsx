import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Dialogs from "../Dialog/Dialog.jsx";

import styles from "./navbar.module.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(4.5),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav() {

    const classes = useStyles();
    // const [sidebar, setSidebar] = useState(false);
    return (<div>
        <div className={classes.root}>
            <AppBar position="static" style={{ background: "#393e46", width: "100vw" }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <div className={styles.NavCsi}>
                            <h5 className={styles.navText}>Elon Musk Chemes</h5>
                        </div>
                    </Typography>
                    <Button color="inherit">
                        <span>
                            <Dialogs />
                        </span>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    </div>);
}