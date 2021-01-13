import React from 'react';
import { Chart } from 'react-google-charts';


function FindMaxRating(data){
    var index = 0;
    var maxRating = 0;
    for(var i=0; i< data.length;i++){
        if( maxRating < data[i].newRating ) {
            maxRating = data[i].newRating
            index = i;
        }
    }
    return [maxRating, index];
}

function RatingGraph(props) {

    console.log("In function Rating graph");
    
    var ratingData = props.userRatings.slice(-100,);
    var data = [["x", "Rating", {'type': 'string', 'role': 'style'}]];

    var [maxRating, maxRatingIndex] = FindMaxRating(ratingData);
    var i = 0;

    //console.log(maxRating, maxRatingIndex);

    ratingData.forEach(function (item) {
        if( i === maxRatingIndex){
            data.push([item.contestId.toString(), item.newRating, 'point { size: 4; fill-color: #0a0a0a; }']);
        } else {
            data.push([item.contestId.toString(), item.newRating, null]);
        }
        i += 1;
    });

    var title = "Contest rating in last " + ratingData.length + " contests";
    return (
        <div className="rating-graph">
            <Chart
                width={'100%'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: title,
                    // hAxis: {
                    //     title: 'ContestID',
                    // },
                    // vAxis: {
                    //     title: 'Rating',
                    // },
                    pointSize: 4,
                    pointShape: "circle",
                    colors:["rgb(2, 2, 140)"],
                    legend: { position: 'none' },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
        //}
    );
}

export default RatingGraph;