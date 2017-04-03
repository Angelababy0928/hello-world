import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../compoent/common.css';
import Img from './img';
import SelectSuper from './selectSuper';


export default class LeftSuper extends Component{
    render(){
        return(
            <div className="left">
                <Img/>
                <ul className="inbox_down">
                   <SelectSuper store={this.props}/>
                </ul>
            </div>
        )
    }
}