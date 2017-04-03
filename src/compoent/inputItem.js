/**
 * Created by Administrator on 2017/3/29.
 */
import React, {Component, PropTypes} from 'react';
import './common.css';

export default class inputItem extends Component {
    render() {
        if(this.props.color=="yellow"){
             return (
                <button className="button-item" onClick={this.props.login}>登录</button>
            )
        }else{
            return (
                <input type="text" className="input-item" placeholder={this.props.prompt}/>
            )
        }
    }
}