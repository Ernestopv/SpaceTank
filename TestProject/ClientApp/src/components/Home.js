import React, { Component } from 'react';
import Joystick from "./joystick";

export class Home extends Component {
  static displayName = Home.name;

    render() {

        var imageNr = 0; // Serial number of current image
        var finished = new Array(); // References to img objects which have finished downloading
        var paused = false;

        function createImageLayer() {
            var img = new Image();
            img.style.position = "absolute";
            img.style.zIndex = -1;
            img.onload = imageOnload;
            img.onclick = imageOnclick;
            img.src = "http://192.168.0.48:8090/?action=snapshot&n=" + (++imageNr);
            var webcam = document.getElementById("webcam");
            webcam.insertBefore(img, webcam.firstChild);
        }

        // Two layers are always present (except at the very beginning), to avoid flicker
        function imageOnload() {
            this.style.zIndex = imageNr; // Image finished, bring to front!
            while (1 < finished.length) {
                var del = finished.shift(); // Delete old image(s) from document
                del.parentNode.removeChild(del);
            }
            finished.push(this);
            if (!paused) createImageLayer();
        }

        function imageOnclick() { // Clicking on the image will pause the stream
            paused = !paused;
            if (!paused) createImageLayer();
        }

        return (
            <div width="100%" height="400" >
        <div>
            <center><img src={"http://192.168.1.82:8090/?action=stream"} width="100%" height="320" /> </center>
        <div className="container jumbotron mt-3">
        <Joystick />
        </div>
                </div>
            </div>


   
    );
  }
}
