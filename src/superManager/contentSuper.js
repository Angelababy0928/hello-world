import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Class from './class';
import Rewards from './rewards';
import Teacher from './teacher';
import ScoreHistory from './scoreHistory';



export default class ContentSuper extends Component{
    render(){
        return(
            <div className="middle">
                <div className="inmidd">
                    <Class/>
                    <Rewards/>
                    <Teacher/>
                    <ScoreHistory/>
                </div>
            </div>
        )
    }
}
