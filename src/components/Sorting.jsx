import React from "react";

class Sorting extends React.Component {
    // constructor(props) {
    //     super(props);

    //     var dict = {};
    //     for (var i = 800; i <= 3400; i += 100) {
    //         dict[i] = false;
    //     }
    //     this.state = { dict };
    //     this.handleChange = this.handleChange.bind(this);
    // }

    // componentDidMount() {
    //     fetch("https://codeforces.com/api/problemset.problems")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log("here");
    //                 setUserRating(result["result"]);
    //                 setIsLoadedRating(true);
    //             },
    //             (error) => {
    //                 setIsLoadedRating(true);
    //                 setError(error);
    //             }
    //         )
    // }

    // handleChange(event) {
    //     var tempDict = this.state;
    //     if (tempDict[event.target.name] === true) {
    //         tempDict[event.target.name] = false;
    //     } else {
    //         tempDict[event.target.name] = true;
    //     }
    //     this.setState(tempDict);
    //     console.log(this.state)
    // }
    // render() {
    //     console.log(this.state);
    //     return (
    //         <div>
    //             <input type="checkbox" id="vehicle1" name={800} onChange={this.handleChange} />
    //             <label for="800">800</label>
    //         </div>
    //     );
    // }
    render(){return (<p>sort</p>);}
}

export default Sorting;
