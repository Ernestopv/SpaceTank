import React, { Component } from "react";
import JoyStick from "react-joystick";

JoyStick.defaultProps = {
    options: {
        mode: "semi",
        catchDistance: 150,
        color: "gray",
        size: 180
    },
    containerStyle: {
        width: "50%",
        height: "40vh",
        position: "relative",
        background: "linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)"
    }
};

const joyOptions = {
    mode: "semi",
    catchDistance: 150,
    color: "white",
    size: 50
};

const containerStyle = {
    position: "relative",
    height: "40vh",
    width: "100%",
    background: "linear-gradient(to right, #77A1D3, #79CBCA, #77A1D3)"
};

class Control extends Component {
    constructor() {
        super();
        this.managerListener = this.managerListener.bind(this);
    }

    managerListener(manager) {
        manager.on("move", (e, stick) => {
            console.log(stick.direction);
        });
        manager.on("end", () => {
            console.log("stop");
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
            <JoyStick
        joyOptions={joyOptions}
        containerStyle={containerStyle}
        managerListener={this.managerListener}
            />
            </div>
    );
}
}



export default Control;