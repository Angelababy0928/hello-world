import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
    }
    changeStatus(){
        let aa;
        this.props.courseList.map(function(ele,index){
            if(ele.cname==this.props.grade.course){
                return aa = `第${index+1}教学周期`
            }
        },this);
        return aa;
    }
    render(){
        return(
            <div className="nav">
                <div className="inernav">
                    <a href="">数字媒体学院</a>
                    <ul className="navLeft">
                        <li><a href="">{new Date().getYear()+1900}</a></li>
                        <li><a href="">
                            {
                                this.changeStatus()
                            }
                        </a></li>
                        <li><a href="" className="spns">|</a></li>
                        <li><a href="">
                            {
                                this.props.courseList.map(function(ele){
                                        return ele.cname==this.props.grade.course?ele.cname:""
                                },this)
                            }
                        </a></li>
                    </ul>
                    <a onClick={this.props.changeTwo}>
                        <img src={this.props.img}/>
                    </a>
                    <ul className="navRight">
                        <li><a href="">任课老师：{this.props.grade.teacher}</a></li>
                        <li><a href="" className="spans">|</a></li>
                        <li><a href="">班主任：{this.props.grade.header}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}