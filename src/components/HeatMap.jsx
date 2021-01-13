import React from "react";
import { Chart } from "react-google-charts";

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();


    return [year, month, date];
}

function getData(data) {
    var dataDict = {};

    for (var i = 0; i < data.length; i++) {
        var [year, month, date] = timeConverter(data[i].creationTimeSeconds);
        var dated = new Date(year, month, date);
        var dt = dated.toString();

        if (dt in dataDict) {
            dataDict[dt] += 1;
        } else {
            dataDict[dt] = 1;
        }
    }

    return Object.keys(dataDict).map(function (key) {
        var dt = new Date(key);
        return [dt, dataDict[key]];
    });
}

function HeatMap(props) {

    console.log("In function Heatmap");

    var data = [[{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }]];
    var years = [];
    data.push(...getData(props.data));
    for(var i=1;i<data.length;i++){
        if(years.indexOf(data[i][0].getFullYear()) === -1){
            years.push(data[i][0].getFullYear());
        }
    }
    var height = (30 + 150 * years.length);
    console.log(years);
    return (
        <div className="heatmap">
            <Chart
                width={"100%"}
                height={height}
                chartType="Calendar"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Submission Heatmap',
                    colorAxis:{minValue: 0, maxValue:"#032052", colors: ['#ffffff', '#0027ff', '#00127d']}
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
}

export default HeatMap;