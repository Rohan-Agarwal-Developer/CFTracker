import React from "react";

import { Chart } from "react-google-charts";

function TagWise(props) {

    console.log("In function Tag wise");

    var data = [["Tags", "Solved problems", {role: "style"}]];
    Object.keys(props.problemTags).map(function (key, index) {
        data.push([key, props.problemTags[key], '#b87333']);
    });

    //data = [data[0], data.slice(1,).reverse()];

    return (
        <div className="tag-graph">
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Problem Tags',
                    pieSliceText: 'none',
                    pieHole: 0.5,
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        </div>

    );
}

export default TagWise;