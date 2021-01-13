import React from "react";
import { XYPlot, XAxis, YAxis, makeWidthFlexible, VerticalGridLines, HorizontalGridLines, LineSeries, MarkSeries, LineMarkSeries, VerticalBarSeries, HorizontalBarSeries } from 'react-vis';
import { Chart } from "react-google-charts";
import $ from "jquery";

function CharacterWise(props) {

    console.log("In function Character wise");

    var data = [["Level", "Solved"]];
    Object.keys(props.problemChar).map(function (key) {
        data.push([key, props.problemChar[key]]);
    });

    var width = Math.max((Math.floor((data.length - 28) * (700 / 15) + 1500)), $(".character-graph").width());
    //console.log(width);

    return (
        <div className="character-graph">
            <Chart
                width={width}
                height={'275px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: "Problem Level",
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

export default CharacterWise;



// import React from "react";
// import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, MarkSeries, LineMarkSeries, VerticalBarSeries, HorizontalBarSeries } from 'react-vis';

// function buildValue(hoveredCell) {
//     const {radius, angle, angle0} = hoveredCell;
//     const truedAngle = (angle + angle0) / 2;
//     return {
//       x: radius * Math.cos(truedAngle),
//       y: radius * Math.sin(truedAngle)
//     };
//   }

// function Example(props) {

//     var ratingData = props.userRatings.map(item => (
//         {
//             x: item.contestId,
//             y: item.newRating
//         }
//     ));

//     return (
//         <XYPlot
//             xType="ordinal"
//             width={1000}
//             height={250}>
//             <VerticalGridLines />
//             <HorizontalGridLines />
//             <XAxis title="Contest ID" />
//             <YAxis title="Rating" />
//             <LineMarkSeries
//                 color={"blue"}
//                 fill={"black"}
//                 size={3}
//                 data={ratingData}
//                 onValueMouseOver={(datapoint, event) => {
//                     alert(datapoint);   
//                 }}
//             />
//         </XYPlot>
//     );
// }
// export default Example;
