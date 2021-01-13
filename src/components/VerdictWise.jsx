import React from "react";
import { Chart } from "react-google-charts";

function swap(a, b){
    return [b, a];
}

const verdict = {
    "OK": {
        "term": "Accepted",
        "color": "#207d1a"
    },
    "TIME_LIMIT_EXCEEDED": {
        "term": "TLE",
        "color": "#eb540e"
    },
    "MEMORY_LIMIT_EXCEEDED": {
        "term": "MLE",
        "color": "#2c4a94"
    },
    "IDLENESS_LIMIT_EXCEEDED": {
        "term": "IDLE",
        "color": "#0c827c"
    },
    "RUNTIME_ERROR": {
        "term": "Runtime error",
        "color": "#d6660b"
    },
    "COMPILATION_ERROR": {
        "term": "Compilation Error",
        "color": "#d2e038"
    },
    "WRONG_ANSWER": {
        "term": "Wrong Answer",
        "color": "#d90b0b"
    }
};

function VerdictWise(props) {
    var data = [["Tags", "Solved problems"]];
    var colors = [];
    Object.keys(props.problemVerdicts).map(function (key, index) {
        if (key in verdict) {
            data.push([verdict[key].term, props.problemVerdicts[key]]);
            colors.push({color: verdict[key].color});
        }

    });
    // for(var i=1;i<data.length;i++){
    //     if(data[i][0] === "OK"){
    //         data[1] = [data[i], data[1] = data[i]][0];
    //         colors[0] = [colors[i-1], colors[0] = colors[i-1]][0];
    //     }
    //     if(data[i][0] === "Wrong Answer"){
    //         // [data[2], data[i]] = [data[i], data[2]];
    //         //[colors[1], colors[i-1]] = [colors[i-1], colors[1]];
    //     }
    // }

    //console.log(colors)

    return (
        <div className="verdict-graph">
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    legend: 'none',
                    title: 'Problem Verdicts',
                    is3D: true,
                    slices: colors
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>

    );
}

export default VerdictWise;

