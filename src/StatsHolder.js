import React, { Component } from 'react';
import ColumnChart from './ColumnChart.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slider from 'material-ui/Slider';
import './App.css';


class StatsHolder extends Component {
  render() {
    const styles = {
        root: {
          display: 'flex',
          height: 300,
          flexDirection: 'row',
          justifyContent: 'space-around',
          axis: 'y',
          defaultValue: 0.5
        },
      };

    return (
      <div className="StatsHolder">
        <div className="inputs">
                <div className="titles">
                    <label>Price</label>
                    <label>Speed</label>
                    
                </div>
                <div className="change">    
                    <input name="price" id="Price"></input>
                    <input name="speed" id="speed"></input>
                </div>
        </div>
        <div className="graphs">
            <div className="slider" style={styles.root}>
                <MuiThemeProvider>
                    <Slider style={{height: 300}} axis="y" defaultValue={0}/>
                </MuiThemeProvider>
            </div>
            <div className="bar-chart">
                <ColumnChart data={this.props.data}/>
            </div>
        </div>
        <div className="choice">
            <label>Item Price</label>
            <input name="item_price" id="Item_Price"></input>
            <button>Buy</button>
        </div>
      </div>
    );
  }
}

export default StatsHolder;