/**
 * Created by Administrator on 2017/3/22.
 */
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import angle from './angle_03.png';
import teacher from './teacher_15.png';
import kecheng from './class_15.png';

export default class Class extends Component{
    render(){
        return(
            <div>
                <div className="bh">
                    <div className="innerbh">
                        <div>
                            <img src={teacher} alt=""/>
                                <span>学期</span>
                                <div className="iiner"></div>
                        </div>
                        <span className="time">第一教学周期</span>
                        <img src={angle} alt="" className="angle_down"/>
                    </div>
                    <div className="innerbh">
                        <div>
                            <img src={kecheng} alt=""/>
                                <span>课程</span>
                                <div className="iiner"></div>
                        </div>
                        <span className="time">班级教师</span>
                        <img src={angle} alt="" className="angle_down"/>
                    </div>
                </div>
            </div>
        )
    }
}