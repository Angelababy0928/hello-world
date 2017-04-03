import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Rewards from './rewards';
import StudentsMap from './studentMap';
import guanli from './guan_03.png';
import add from './jia.png';

export default class ContentTwo extends Component{
    render(){
        return(
            <div className="middle">
                <div className="inmidd">
                    <div>
                        <Rewards name={"学生管理"} backgroundColor="#EFD63B" img={guanli} color="#333"/>
                        <div className="studentMap">
                            {
                                this.props.students.map(function(obj,index){
                                    return <StudentsMap
                                        key={index}
                                        obj={obj}
                                        index={index}
                                        showMask={this.props.showMask}
                                        cancelMask={this.props.cancelMask}
                                    />
                                },this)
                            }
                        </div>
                        <div className="addBox" onClick={this.props.showMask}>
                            <img src={add} alt=""/>
                        </div>
                    </div>                                            
                </div>
            </div>
        )
    }
}