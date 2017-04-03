import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './common.css';
import Img from './img';
import Select from './select';
import SelectTwo from './selectTwo';
import SelectThree from './selectThree';

export default class Left extends Component{
    render(){
        return(
            <div className="left">
                <Img/>
                <ul className="inbox_down">
                    {
                        this.props.pathName=="/student/repos"||this.props.pathName=="/student/three"?this.props.students.map(function (obj,index) {
                            return <Select
                                            key={index} 
                                            index={index}
                                            student={obj}
                                            changeIndex={this.props.changeIndex}
                                            clickedStudent={this.props.clickedStudent}
                                            changeColorsSelect={this.props.changeColorsSelect}
                                            numbersLeft={this.props.numbersLeft}
                                            pathName={this.props.pathName}
                            />;
                        },this):<SelectTwo/>
                    }
                </ul>
            </div>
        )
    }
}