// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// export default class App extends Component {
//   render() {
//     return (
//       <div className="App" style={{width:"300px",height:"300px",backgroundColor:"red"}}>
//        123
//           {
//               this.props.children
//           }
//       </div>
//     );
//   }
// }




// Redux
// import React, { Component } from 'react';
// import Left from './left-one';
// import Right from './right-one';
//
// export default class App extends Component{
//         constructor(props){
//                 super(props);
//                 this.add = this.add.bind(this);
//                 this.minus = this.minus.bind(this);
//                 this.state = {
//                     value:0
//                 }
//         }
//     render(){
//         return(
//             <div>
//                 <Left add = {this.add} minus = {this.minus} store = {this.props.store}/>
//                 <Right value = {this.state.value} store = {this.props.store}/>
//             </div>
//         )
//     }
//    add(){
//        this.setState({
//            value:this.state.value+1
//        })
//    }
//     minus(){
//         this.setState({
//             value:this.state.value-1
//         })
//     }
// }


// React Redux
import React, {Component} from 'react';
import './App.css';
import Left from './left-one';
import Right from './right-one';
import {connect} from 'react-redux';


class App extends Component {
    constructor(props){
        super(props);
    }
    render() {

        console.log(this.props);
        return (
            <div className="App">
                <Left add={this.props.onAdd}
                      minus={this.props.onMinus}/>
                <Right value={this.props.value}/>
            </div>
        );
    }

}
function todo(state) {

    return {
        value:state.culculator
    }
}

const mapDispatchToProps = {
    onAdd: (text) => {

        return{
            type: 'add',
            text
        }
    },
    onMinus: (text) => {

        return{
            type: 'minus',
            text
        }
    }
};

export default connect(todo,mapDispatchToProps)(App);