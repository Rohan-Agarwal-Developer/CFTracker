import React, { useState, useEffect } from 'react';
import CharacterWise from './CharacterWise';
import DifficultyWise from "./DifficultyWise";
import TagWise from "./TagWise";
import VerdictWise from "./VerdictWise";
import LanguageWise from "./LanguageWise";
import RatingGraph from "./RatingGraph";
import UserData from "./UserData";
import HeatMap from "./HeatMap"

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

//Get all unique correct submissions
function MakeSubmissionUnique(submissions) {
    var tempSubmission = [];
    var tempArray = [];

    submissions.forEach(function (submission) {
        if (submission.verdict === "OK") {
            if (tempArray.indexOf(submission.problem.name) === -1) {
                tempSubmission.push(submission);
                tempArray.push(submission.problem.name);
            }
        }
    });
    return tempSubmission;
}

//Get a dictionery of number of problems by A, B, C, D....
function CharacterWiseProblem(submissions) {
    var problemChar = {};

    submissions.forEach(function (submission) {
        if (submission.problem.index[0] in problemChar) {
            problemChar[submission.problem.index[0]] += 1;
        } else {
            problemChar[submission.problem.index[0]] = 1;
        }
    });
    return sortOnKeys(problemChar);
}

//Get a dictionery of number of problems by problem rating
function DifficultyWiseProblem(submissions) {
    var problemRating = {};

    submissions.forEach(function (submission) {
        /*var temp = problemRating;*/
        if (submission.problem.rating) {
            if (submission.problem.rating in problemRating) {
                problemRating[submission.problem.rating] += 1;
            } else {
                problemRating[submission.problem.rating] = 1;
            }
        }
    });
    return problemRating;
}


//Get a dictionary of number of problems according to tags
function TagWiseProblem(submissions) {
    var problemTag = {};
    submissions.forEach(function (submission) {
        submission.problem.tags.forEach(function (tag) {
            if (tag in problemTag) {
                problemTag[tag] += 1;
            } else {
                problemTag[tag] = 1;
            }
        });
    });
    return sortOnValues(problemTag);
}

//Get num of problems according to verdict
function VerdictProblem(submissions) {
    var verdictWise = {};
    submissions.forEach(function (submission) {
        if (submission.verdict in verdictWise) {
            verdictWise[submission.verdict] += 1;
        } else {
            verdictWise[submission.verdict] = 1;
        }
    });
    return verdictWise;
}

//Get num of problems according to language used
function LanguageProblem(submissions) {
    var languageWise = {};
    submissions.forEach(function (submission) {
        if (submission.programmingLanguage in languageWise) {
            languageWise[submission.programmingLanguage] += 1;
        } else {
            languageWise[submission.programmingLanguage] = 1;
        }
    });
    return sortOnValues(languageWise);
}

function HandleData(item) {

    console.log("In function Handle");

    const [error, setError] = useState(null);

    const [isLoadedSubmission, setIsLoadedSubmission] = useState(false);
    const [isLoadedRating, setIsLoadedRating] = useState(false);

    const [allSubmissions, setAllSubmission] = useState([]);
    const [uniqueCorrectSubmissions, setUniqueCorrectSubmission] = useState([]);
    const [totalSubmissions, setTotalSubmissions] = useState(0);
    const [problemChar, setProblemChar] = useState({});
    const [problemDifficulty, setProblemDifficulty] = useState({});
    const [problemTags, setProblemTags] = useState({});
    const [problemVerdicts, setProblemVerdicts] = useState({});
    const [problemLanguages, setProblemlanguages] = useState({});

    const [userRatings, setUserRating] = useState({});

    useEffect(() => {

        var handle = item.handle;
        var problemURL = "https://codeforces.com/api/user.status?handle=" + handle + "&from=1&count=10000";
        var ratingURL = "https://codeforces.com/api/user.rating?handle=" + handle;

        console.log("In function Handlle data use effect");

        fetch(problemURL)
            .then(res => res.json())
            .then(
                (result) => {
                    var allSubmissions = result["result"];
                    setAllSubmission(allSubmissions);
                    var uniqueSubmissions = MakeSubmissionUnique(allSubmissions)

                    setUniqueCorrectSubmission(uniqueSubmissions)            
                    setProblemChar(CharacterWiseProblem(uniqueSubmissions));
                    setTotalSubmissions(allSubmissions.length);
                    setProblemDifficulty(DifficultyWiseProblem(uniqueSubmissions));
                    setProblemTags(TagWiseProblem(uniqueSubmissions));
                    setProblemVerdicts(VerdictProblem(allSubmissions));
                    setProblemlanguages(LanguageProblem(allSubmissions));
                    setIsLoadedSubmission(true);

                },
                (error) => {
                    setIsLoadedSubmission(true);
                    setError(error);
                }
            )

        fetch(ratingURL)
            .then(res => res.json())
            .then(
                (result) => {
                    setUserRating(result["result"]);
                    setIsLoadedRating(true);
                },
                (error) => {
                    setIsLoadedRating(true);
                    setError(error);
                }
            )

    }, [item.handle])

    if (error) {
        return <div>Error: Not Found</div>;
    } else if (!(isLoadedSubmission && isLoadedRating)) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <UserData
                    contests={userRatings}
                    allSubmissions={allSubmissions}
                    uniqueCorrectSubmission={uniqueCorrectSubmissions}
                />
                <RatingGraph
                    totalSubmissions={totalSubmissions}
                    userRatings={userRatings}
                />
                <CharacterWise
                    totalSubmissions={totalSubmissions}
                    problemChar={problemChar}
                />

                <DifficultyWise
                    totalSubmissions={totalSubmissions}
                    problemDifficulty={problemDifficulty}
                />

                <div className="row">
                    <div className="col-lg-5">
                        <VerdictWise
                            totalSubmissions={totalSubmissions}
                            problemVerdicts={problemVerdicts}
                        />
                    </div>
                    <div className="col-lg-7">
                        <TagWise
                            totalSubmissions={totalSubmissions}
                            problemTags={problemTags}
                        />
                    </div>
                </div>
                <HeatMap data={allSubmissions}/>
            </div>
        );
    }
}

export default HandleData;