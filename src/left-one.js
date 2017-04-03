/**
 * Created by Administrator on 2017/3/24.
 */
// React
// import React,{Component} from 'react';
// import {add,minus} from './actions'
//
// export default class Left extends Component{
//     render(){
//         return(
//             <div className="App">
//                 <button onClick={()=>this.props.store.dispatch(add(2))}>加数据</button>
//                 <button onClick={()=>this.props.store.dispatch(minus(3))}>减数据</button>
//             </div>
//         )
//     }
// }





// React Redux
import React, {Component} from 'react';
import './App.css';
import {add,minus} from './actions';

class Left extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="App">
                <button onClick={()=>this.props.add(2)}>加数据</button>
                <button onClick={()=>this.props.minus(3)}>减数据</button>
            </div>
        );
    }
}

export default Left;