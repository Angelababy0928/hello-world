/**
 * Created by Administrator on 2017/3/24.
 */
// import React, {Component} from 'react';
//
// export default class Right extends Component{
//     constructor(props){
//             super(props);
//             this.state = {
//                 value:this.props.store.getState().calculate
//             }
//     }
//
//     render(){
//             return(
//                     <div className="App">
//                         {
//                             this.state.value
//                         }
//                     </div>
//             )
//     }
//
//     componentDidMount() {
//             this.props.store.subscribe(()=> {
//                     this.setState({
//                         value: this.props.store.getState().calculate
//                     })
//             })
//     }
// }




// React Redux
import React, {Component} from 'react';
import './App.css';


class Right extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                {
                    this.props.value
                }
            </div>
        );
    }
}


export default Right;