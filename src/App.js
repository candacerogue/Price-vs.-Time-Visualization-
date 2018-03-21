import React, { Component } from 'react';
import './App.css';
import StatsHolder from './StatsHolder.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null
  //     hoverLoc: null,
  //     activePoint: null
    }
  }
  // handleChartHover(hoverLoc, activePoint){
  //   this.setState({
  //     hoverLoc: hoverLoc,
  //     activePoint: activePoint
  //   })
  // }
  componentDidMount(){
    const getData = () => {
      const url = 'https://ethgasstation.info/json/predictTable.json';

      fetch(url).then( r => r.json())
        .then((ethereumData) => {
          const sortedData = [];
          let count = 0;
          for (let obj = 0; obj < ethereumData.length; obj+=1){
            sortedData.push({
              price: ethereumData[obj].gasprice.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
              time: Math.floor(ethereumData[obj].expectedWait/60000),
              x: count, //previous days
              y: ethereumData[obj].gasprice // numerical price
            });
            count++;
          }
          this.setState({
            data: sortedData,
            fetchingData: false
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Price vs. Time Component</h1>
        </header>
        {!this.state.fetchingData 
          ? <StatsHolder data={this.state.data}/>
          : null }
      </div>
    );
  }
}

export default App;
