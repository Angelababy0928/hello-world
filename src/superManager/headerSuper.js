import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../compoent/common.css';
import shezhi from '../compoent/shezhi.png';


export default class HeaderSuper extends Component{

    render(){
        console.log(this.props)
        return(
            <div className="nav">
                <div className="inernav">
                    <a href="">数字媒体学院</a>
                    <ul className="navLeft">
                        <li><a href="">数字媒体学院&nbsp;&nbsp;:</a></li>
                        
                        <li><a href="">{this.props.courseList[2].cname}</a></li>
                        <li><a href="" className="spns">|</a></li>
                        <li><a href="">第一教学周期</a></li>
                    </ul>
                    <a>
                        <img src={shezhi}/>
                    </a>
                </div>
            </div>
        )
    }
}