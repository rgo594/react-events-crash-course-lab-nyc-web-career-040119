import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  }

  cycleClick = (e) => {
    toggleCycling()
    /* TODO: Create an event handler which, when fired, invokes the provided
     * `toggleCycling` function with no arguments. Don't forget the click event
     * listener that should fire it!
     */
  }

  resizeKey = (event) => {
    event.key == 'a' ? resize('+') : event.key == 's' ? resize('-') : alert('increase sprite size with a or s key')
  }


  render() {
    return (
      <canvas
        onKeyPress={this.resizeKey}
        onClick={this.cycleClick}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
