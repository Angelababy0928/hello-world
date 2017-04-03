import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import xiuchou from './xinchou.png';

export default class ScoreThree extends Component{
    render(){
        return(
            <div>
                <div className="lizhi">
                    <div className="lizhitop">{this.props.students[this.props.index].sname}</div>
                    <p>学号：{this.props.students[this.props.index].sno}</p>
                    <p>市场部：{this.props.students[this.props.index].market}</p>
                    <p>入学日期：{this.props.students[this.props.index].updateTime}</p>
                    <p>学制：{this.props.students[this.props.index].term}</p>
                </div>
                <div className="banner b_two">
                    <div>
                        <img src={xiuchou}/>
                        <div className="zhou">本教学周期薪酬<br/>
                            <span>The remuneration of this teaching cycle</span>
                        </div>
                        <div className="renminb r_two">
                            ￥
                            <span>{this.props.students[this.props.index].score}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}