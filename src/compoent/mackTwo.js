/**
 * Created by Administrator on 2017/3/19.
 */
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';

export default class MackTwo extends Component{
    render(){
        return(
            <div className="hide" style={{display:this.props.flag==false||this.props.flag.status==2?"none":"block"}}>
                <div className="inner two">
                    <h3>班级基本信息</h3>
                    <div className="sss">
                        <div className="firstDiv">
                            <div className="names">姓名</div>
                            <input type="text" defaultValue={this.props.flag.sname}/>
                        </div>
                        <div className="firstDiv">
                            <div className="names">班级</div>
                            <input type="text" defaultValue="1503B"/>
                        </div>
                        <div className="firstDiv">
                            <div className="names">学号</div>
                            <input type="text" defaultValue="150001"/>
                        </div>
                        <div className="firstDiv">
                            <div className="names">性别</div>
                            <input type="text" defaultValue="男"/>
                        </div>
                        <div className="firstDiv">
                            <div className="names">身份证号</div>
                            <input type="text" defaultValue="372926**0049"/>
                        </div>
                    </div>
                    <div className="btn">
                        <button onClick={this.props.cancelMask}>取消</button>
                        <button>确定</button>
                    </div>
                </div>
            </div>
        )
    }
}