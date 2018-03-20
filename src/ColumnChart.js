import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import './App.css';

class ColumnChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          options: {
            title: 'Age vs. Weight comparison',
            hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
            vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
            legend: 'none',
          },
          data: [
            ['Age', 'Weight'],
            [8, 12],
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
          legend_toggle
        />
      </div>
    );
  }
}

export default ColumnChart;