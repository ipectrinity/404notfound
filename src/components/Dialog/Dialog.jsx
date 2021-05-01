import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import { blue } from '@material-ui/core/colors';
import "./dialog.scss";

const emails = ['username@gmail.com', 'user02@gmail.com'];
// const useStyles = makeStyles({
//     avatar: {
//         backgroundColor: blue[100],
//         color: blue[600],
//     },
// });

//-------------------------------------------------------------------------
// let usernameInput = document.querySelector(".username");
// let passwordInput = document.querySelector(".password");
// let showPasswordButton = document.querySelector(".password-button");
// let face = document.querySelector(".face");

// passwordInput.addEventListener("focus", (event) => {
//     document.querySelectorAll(".hand").forEach((hand) => {
//         hand.classList.add("hide");
//     });
//     document.querySelector(".tongue").classList.remove("breath");
// });

// passwordInput.addEventListener("blur", (event) => {
//     document.querySelectorAll(".hand").forEach((hand) => {
//         hand.classList.remove("hide");
//         hand.classList.remove("peek");
//     });
//     document.querySelector(".tongue").classList.add("breath");
// });

// usernameInput.addEventListener("focus", (event) => {
//     let length = Math.min(usernameInput.value.length - 16, 19);
//     document.querySelectorAll(".hand").forEach((hand) => {
//         hand.classList.remove("hide");
//         hand.classList.remove("peek");
//     });

//     face.style.setProperty("--rotate-head", `${-length}deg`);
// });

// usernameInput.addEventListener("blur", (event) => {
//     face.style.setProperty("--rotate-head", "0deg");
// });

// usernameInput.addEventListener(
//     "input",
//     _.throttle((event) => {
//         let length = Math.min(event.target.value.length - 16, 19);

//         face.style.setProperty("--rotate-head", `${-length}deg`);
//     }, 100)
// );

// showPasswordButton.addEventListener("click", (event) => {
//     if (passwordInput.type === "text") {
//         passwordInput.type = "password";
//         document.querySelectorAll(".hand").forEach((hand) => {
//             hand.classList.remove("peek");
//             hand.classList.add("hide");
//         });
//     } else {
//         passwordInput.type = "text";
//         document.querySelectorAll(".hand").forEach((hand) => {
//             hand.classList.remove("hide");
//             hand.classList.add("peek");
//         });
//     }
// });

//-------------------------------------------------------------------------

function SimpleDialog(props) {
    // const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    // const handleListItemClick = (value) => {
    //     onClose(value);
    // };

    return (
        <Dialog onClose={handleClose} open={open} >
            <div className="cheems">

                <div class="center">
                    <div class="ear ear--left"></div>
                    <div class="ear ear--right"></div>
                    <div class="face">
                        <div class="eyes">
                            <div class="eye eye--left">
                                <div class="glow"></div>
                            </div>
                            <div class="eye eye--right">
                                <div class="glow"></div>
                            </div>
                        </div>
                        <div class="nose">
                            <svg width="38.161" height="22.03">
                                <path d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z" fill="#243946"></path>
                            </svg>
                            <div class="glow"></div>
                        </div>
                        <div class="mouth">
                            <svg class="smile" viewBox="-2 -2 84 23" width="84" height="23">
                                <path d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161" fill="none" stroke-width="3" stroke-linecap="square" stroke-miterlimit="3"></path>
                            </svg>
                            <div class="mouth-hole"></div>
                            <div class="tongue breath">
                                <div class="tongue-top"></div>
                                <div class="line"></div>
                                <div class="median"></div>
                            </div>
                        </div>
                    </div>
                    <div class="hands">
                        <div class="hand hand--left">
                            <div class="finger">
                                <div class="bone"></div>
                                <div class="nail"></div>
                            </div>
                            <div class="finger">
                                <div class="bone"></div>
                                <div class="nail"></div>
                            </div>
                            <div class="finger">
                                <div class="bone"></div>
                                <div class="nail"></div>
                            </div>
                        </div>
                        <div class="hand hand--right">
                            <div class="finger">
                                <div class="bone"></div>
                                <div class="nail"></div>
                            </div>
                            <div class="finger">
                                <div class="bone"></div>
                                <div class="nail"></div>
                            </div>
                            <div class="finger">
                                <div class="bone"></div>
                                <div class="nail"></div>
                            </div>
                        </div>
                    </div>
                    <div class="login">
                        <label>
                            <div class="fa fa-phone"></div>
                            <input class="username" type="text" autocomplete="on" placeholder="chemes id" />
                        </label>
                        <label>
                            <div class="fa fa-commenting"></div>
                            <input class="password" type="password" autocomplete="off" placeholder="password" />
                            <button class="password-button">show</button>
                        </label>
                        <button class="login-button">lets go!!</button>
                    </div>
                    <div class="footer">Elon Musk chemes</div>
                </div>
            </div>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                login
      </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}
