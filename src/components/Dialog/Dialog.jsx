import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import "./dialog.scss";
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open} >
            <div className="cheems">
                <div className="center">
                    <div className="ear ear--left" />
                    <div className="ear ear--right" />
                    <div className="face">
                        <div className="eyes">
                            <div className="eye eye--left">
                                <div className="glow" />
                            </div>
                            <div className="eye eye--right">
                                <div className="glow" />
                            </div>
                        </div>
                        <div className="nose">
                            <svg width="38.161" height="22.03">
                                <path d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z" fill="#243946" />
                            </svg>
                            <div className="glow" />
                        </div>
                        <div className="mouth">
                            <svg className="smile" viewBox="-2 -2 84 23" width={84} height={23}>
                                <path d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161" fill="none" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={3} />
                            </svg>
                            <div className="mouth-hole" />
                            <div className="tongue breath">
                                <div className="tongue-top" />
                                <div className="line" />
                                <div className="median" />
                            </div>
                        </div>
                    </div>
                    <div className="hands">
                        <div className="hand hand--left hide">
                            <div className="finger">
                                <div className="bone" />
                                <div className="nail" />
                            </div>
                            <div className="finger">
                                <div className="bone" />
                                <div className="nail" />
                            </div>
                            <div className="finger">
                                <div className="bone" />
                                <div className="nail" />
                            </div>
                        </div>
                        <div className="hand hand--right hide">
                            <div className="finger">
                                <div className="bone" />
                                <div className="nail" />
                            </div>
                            <div className="finger">
                                <div className="bone" />
                                <div className="nail" />
                            </div>
                            <div className="finger">
                                <div className="bone" />
                                <div className="nail" />
                            </div>
                        </div>
                    </div>
                    <div className="login">
                        <label>
                            <div className="fa fa-phone" />
                            <input className="username" type="text" autoComplete="on" placeholder="chemes id" />
                        </label>
                        <label>
                            <div className="fa fa-commenting" />
                            <input className="password" type="password" autoComplete="off" placeholder="password" />
                            <button className="password-button">show</button>
                        </label>
                        <button className="login-button">lets go!!</button>
                    </div>
                    <div className="footer">Elon Musk chemes</div>
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
            <Button variant="outlined" style={{ color: "white", border: "none" }} onClick={handleClickOpen}>
                enter chems world
      </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}
