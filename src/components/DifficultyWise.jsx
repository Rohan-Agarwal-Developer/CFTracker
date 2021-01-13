import React from "react";
import { XYPlot, XAxis, YAxis, makeWidthFlexible, VerticalGridLines, HorizontalGridLines, LineSeries, MarkSeries, LineMarkSeries, VerticalBarSeries, HorizontalBarSeries } from 'react-vis';
import { Chart } from "react-google-charts";
import $ from "jquery";

function DifficultyWise(props) {

    console.log("In function Difficulty wise");

    var data = [["Level", "Solved"]];
    Object.keys(props.problemDifficulty).map(function (key) {
        data.push([key, props.problemDifficulty[key]]);
    });


    var width = Math.max((Math.floor((data.length - 28) * (700 / 15) + 1500)), $(".difficulty-chart").width());

    //console.log();
    //console.log(width);
    return (
        <div className="difficulty-chart">
            <Chart
                width={width}
                height={'275px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: "Problems Difficulty",
                    chartArea: {
                        width: '80%'
                    },
                    chart: {
                        title: 'Difficulty wise problems',
                        subtitle: 'The bars show to total no. of problems solved as per difficulty',
                    },
                    colors: ['rgb(2, 2, 140)'],
                    legend: { position: 'none' },
                    bar: { groupWidth: "55%" },

                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    );
}

export default DifficultyWise;