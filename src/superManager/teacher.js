/**
 * Created by Administrator on 2017/3/22.
 */
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../compoent/common.css';

export default class Teacher extends Component{
    render(){
        return(
            <div>
                <div className="second">
                    <div className="blue">
                        <div>
                            <p>教研主任</p>
                            <p>Teacher</p>
                        </div>
                        <div>
                            <span>苗林超</span>
                            <span>WEB</span>
                            <span>WEB</span>
                        </div>
                    </div>
                    <div className="blue">
                        <div className="gold">
                            <p>任课老师</p>
                            <p>Teacher</p>
                        </div>
                        <div>
                            <span>边云风</span>
                            <span>WEB</span>
                            <span>WEB</span>
                        </div>
                    </div>
                    <div className="blue">
                        <div className="red">
                            <p>班主任</p>
                            <p>Teacher</p>
                        </div>
                        <div>
                            <span>胡乃全</span>
                            <span>WEB</span>
                            <span>WEB</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}