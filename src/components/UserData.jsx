import React from "react";
import { unmountComponentAtNode } from "react-dom";


//Sort a dictionery on values
function sortOnValues(dict) {
    var items = Object.keys(dict).map(function (key) {
        return [key, dict[key]];
    });
    var tempDict = {};
    // Sort the array based on the second element
    items.sort(function (first, second) {
        return second[1] - first[1];
    });

    items.forEach(function (item) {
        tempDict[item[0]] = item[1];
    });
    return tempDict;
}

//sort a dictionery by it's keys
function sortOnKeys(dict) {
    var sorted = [];
    for (var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();
    var tempDict = {};
    for (var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }
    return tempDict;
}

function contestNumbers(contests) {
    var maxUp = 0;
    var maxDown = 0;
    var bestRank = 200000000;

    for (var i = 0; i < contests.length; i++) {
        if (i !== 0) {
            if (contests[i].newRating - contests[i].oldRating > maxUp) {
                maxUp = contests[i].newRating - contests[i].oldRating;
            }
            if (-contests[i].newRating + contests[i].oldRating > maxDown) {
                maxDown = -contests[i].newRating + contests[i].oldRating;
            }
            if (bestRank > contests[i].rank) {
                bestRank = contests[i].rank
            }
        }
    }

    return [maxUp, maxDown, bestRank];
}

function problemNumbers(data) {
    var tried = 0;
    var onOneSubmission = 0;
    var solved = 0;

    var problemDict = {};

    for (var i = 0; i < data.length; i++) {
        if (data[i].problem.name in problemDict) {
            problemDict[data[i].problem.name].tried++;
            if (data[i].verdict === "OK") {
                problemDict[data[i].problem.name].solved++;
            }

        } else {
            problemDict[data[i].problem.name] = {
                "tried": 1,
                "solved": 0,    
            }
            if (data[i].verdict === "OK") {
                problemDict[data[i].problem.name].solved++;
            }
        }
    }

    Object.keys(problemDict).forEach(function (item) {
        tried++;
        if (problemDict[item].solved !== 0) {
            solved++;
        }
        if (problemDict[item].solved === problemDict[item].tried) {
            onOneSubmission++;
        }
    });

    return [tried, solved, onOneSubmission];
}


function UserData(data) {

    console.log("In function userdata");

    if (data.contests === 0) {
        return (<p>No Contests!!</p>)
    }

    var allSubmissions = data.allSubmissions;
    var uniqueCorrectSubmission = data.uniqueCorrectSubmission;
    var totalSubmissions = allSubmissions.length;
    var solvedProblems = uniqueCorrectSubmission.length;

    var [tried, solved, onOneSubmission] = problemNumbers(allSubmissions)
    var avgAttempts = (totalSubmissions / solvedProblems).toFixed(2);

    var contests = data.contests;

    var totalContests = contests.length;
    var [maxUp, maxDown, bestRank] = contestNumbers(contests);

    const noEndBorder = { borderRight: "none" };

    return (
        <div className="user-data">
            <div className="row">
                <div className="col-lg-3">
                    <p>Tried: {tried}</p>
                </div>
                <div className="col-lg-3">
                    <p>Solved: {solved}</p>
                </div>
                <div className="col-lg-3">
                    <p>Avg submissions: {avgAttempts}</p>
                </div>
                <div className="col-lg-3" style={noEndBorder}>
                    <p>At 1st submission: {onOneSubmission}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <p>Total Contests: {totalContests}</p>
                </div>
                <div className="col-lg-3">
                    <p>Max Up: {maxUp}</p>
                </div>
                <div className="col-lg-3">
                    <p>Max Down: {maxDown}</p>
                </div>
                <div className="col-lg-3" style={noEndBorder}>
                    <p>Best Rank: {bestRank}</p>
                </div>
            </div>
        </div>
    );



}

export default UserData;