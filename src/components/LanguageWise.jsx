import React from "react";
import { XYPlot, RadialChart } from "react-vis";

function LanguageWise(props) {

    console.log("In function Language wise");

    var languageData = Object.keys(props.problemLanguages).map(function (key) {
        return {
            "angle": props.problemLanguages[key],
            "label": key,
        }
    });

    //console.log(languageData.length);
    
    return (
        <ul>

            <RadialChart
                data={languageData}
                width={300}
                height={300}
                showLabels={true} />


            <li>Total Submissions: {props.totalSubmissions}</li>
            {
                Object.keys(props.problemLanguages).map((key, index) => (
                    <p key={index}> Problem {key}: {props.problemLanguages[key]}</p>
                ))
            }
        </ul>
    );
}

export default LanguageWise;