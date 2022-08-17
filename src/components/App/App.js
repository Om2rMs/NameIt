import React, { setState, useState } from "react";
import Header from "./../Header/Header";
import SearchBox from "./../SearchBox/SearchBox";
import ResultContainer from "../ResultContainer/ResultContainer";
import './App.css'


const name = require(`@rstacruz/startup-name-generator`);

//functional component
const App = () => {
    const [headertext, setHeadertext] = useState('Search User!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);
    const [writtenName, setWrittenName] = useState('');

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
        setWrittenName(inputText);
    }

    return (
        <div>
            <Header headertitle={headertext}
                HeaderExpanded={headerExpanded} />
            <SearchBox onInputText={handleInputChange} />
            <ResultContainer SuggestedNames={suggestedNames}
                writtenName={writtenName}
                HeaderExpanded={headerExpanded} />
        </div>

    )
}
// //class component
// class App extends React.Component {
//     //the old way
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         headertext: 'Name It!',
//     //     }
//     // }


//     state = {
//         headertext: 'Name It!',
//         HeaderExpanded: true,
//         SuggestedNames: [],
//         writtenName: '',
//     }

//     handleInputChange = (inputText) => {
//         this.setState({
//             HeaderExpanded: !inputText,
//             SuggestedNames: inputText ? name(inputText) : [],
//             writtenName: inputText
//         });
//     }


//     render() {
//         return (
//             <div>
//                 <Header headertitle={this.state.headertext}
//                     HeaderExpanded={this.state.HeaderExpanded} />
//                 <SearchBox onInputText={this.handleInputChange} />
//                 <ResultContainer SuggestedNames={this.state.SuggestedNames}
//                     writtenName={this.state.writtenName}
//                     HeaderExpanded={this.state.HeaderExpanded} />
//             </div>

//         )
//     }
// }

// //----------------------------//

// //functional
// // function App() {
// //     state = {
// //         headertext: "Hi, Omar",
// //     };

// //     return (
// //         <div>
// //             <Header />
// //             <h3>{this.state.headertext}</h3>
// //         </div>
// //     )
// // }

export default App;