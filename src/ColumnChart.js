import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import './App.css';

class ColumnChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          options: {
            title: 'Price vs. Time Comparison',
            hAxis: { title: 'Price', minValue: 0, maxValue: 100 },
            vAxis: { title: 'Time', minValue: 0, maxValue: 1000 },
            legend: 'none',
          },
          data: [
            ['Price', 'Time',{role: 'style'}, {role: 'annotation'}],
            [100, 100,],
            [4, 5.5],
            [11, 14],
            [4, 5],
            [3, 3.5],
            [6.5, 7],
          ],
        };
      }

  render() {
      const styles = {
        width: 500,
        height: 700
      }

    return (
      <div className="Chart-Container" style={styles}>
         <Chart
          chartType="ColumnChart"
          data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
          options={{}}
          graph_id="ColumnChart"
          width="100%"
          height="400px"
        />
      </div>
    );
  }
}

export default ColumnChart;