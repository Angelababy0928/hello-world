import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import xiuchou from './xinchou.png';
import xiuxue from './xiuxue_03.png';

export default class Score extends Component{
    render(){
        return(
            <div className="banner">
                <img src={xiuxue} alt="" style={this.props.students[this.props.index].status==2?{display:"block",width:"176px",height:"94px",position:"absolute",top:"71%",left:"82%"}:{display:"none",width:"176px",height:"94px",position:"absolute",top:"108px",right:"36px"}}/>
                <div>
                    <img src={xiuchou}/>
                    <h1>本教学周期薪酬<br/>
                        <span>The remuneration of this teaching cycle</span>
                    </h1>
                    <h1 className="renminb">
                        ￥
                        <span>{this.props.students[this.props.index].score}</span>
                    </h1>
                    <h6 style={{display:this.props.pathname=="students/three"?"none":"block",cursor:"pointer"}}
                        onClick={this.props.clickThree}
                    >查看详情>></h6>
                </div>
            </div>
        )
    }
}