import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../compoent/common.css';
import xiuchou from '../compoent/xinchou.png';
import xiuxue from '../compoent/xiuxue_03.png';

export default class ScoreHistory extends Component{
    render(){
        return(  
            <div className="banner b_three">
                <div>
                    <img src={xiuchou}/>
                    <h1>历史平均薪资<br/>
                        <span>The remuneration of this teaching cycle</span>
                    </h1>
                    <h1 className="renminb r_three">
                        ￥
                        <span>trfetgg</span>
                    </h1>
                </div>
            </div>
        )
    }
}