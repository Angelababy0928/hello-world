/**
 * Created by Administrator on 2017/3/22.
 */
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';

export default class TodaysTwo extends Component{
    render(){
        return(
            <div>
                <div className="rightbox">
                    <div className="incircle_right">
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
}