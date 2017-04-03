/**
 * Created by Administrator on 2017/3/22.
 */
/**
 * Created by Administrator on 2017/3/22.
 */
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import yuan from './yuan.png';

export default class Todays extends Component{
    constructor(props) {
        super(props);
        this.over = this.over.bind(this);
        this.out = this.out.bind(this);
        this.state={
            aa: -1,
            index:""
        }
    }
    render(){
        return(
            <div>
                <div className="rightbox">
                    <div className="incircle_right" onMouseOver={()=>this.over(this.props.index)} onMouseOut={()=>this.over(-1)}>
                        <img src={yuan} alt="" style={this.state.aa==-1?{display:"none"}:{display:"block"}}
                            onClick={()=>this.props.del(this.props.todayArr,this.props.index)}
                        />
                        <div className="reflex_top">
                            <div className="bisai">
                                <p className="speech">{this.props.obj.des}</p>
                            </div>
                            <div className="speecnq">
                                <span>{this.props.obj.operate}</span>
                                <span>$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    over(val){
        this.setState({
            aa:val
        })
    }
    out(val){
        this.setState({
            aa:val
        })
    }
}