import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import xiuxue from './xiuxue_03.png';


export default class StudentsMap extends Component{
    render(){
        return(
            <div className="ssss"
                 onClick={()=>this.props.showMask(this.props.obj)}
                 style={{background:this.props.obj.status==2?"#bbb":""}}
            >
                <img src={xiuxue} alt="" style={{display:this.props.obj.status==2?"block":"none",position: "absolute"}}/>
                {
                    this.props.obj.sname
                }
            </div>
        )
    }
}