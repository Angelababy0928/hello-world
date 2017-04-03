import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../compoent/common.css';
import teacher from '../compoent/teacher_23.png';

export default class Rewards extends Component{
    render(){
        return(
            <div className="xinchou" style={this.props.selectC==0?{marginTop:"2%",backgroundColor:this.props.backgroundColor}:{backgroundColor:this.props.backgroundColor}}>
                <img src={teacher}/>
                <span>班级教师</span>
            </div>
        )
    }
}