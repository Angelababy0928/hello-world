/**
 * Created by Administrator on 2017/3/20.
 */
// import React ,{Component} from 'react';
// import {connect} from'react-redux'
// import '../compoent/common.css';
//
// export default class Login extends Component{
//     render(){
//         return(
//             <div className="bigbox">
//                 <div className="box">
//                     <form action="">
//                         <div id="am" className="am">数字媒体WEB</div>
//                         <div id="HMF-1" style={{display:"none"}} className="bm">
//                             <span id="a1" className="cur">数字媒体学院</span>
//                             <span id="a1" className="cur">数字媒体WEB</span>
//                         </div>
//                         <div id="pm" className="pm">超级管理员</div>
//                         <div id="HMF-2" style={{display:"none"}} className="bm">
//                             <span id="a1" className="curp">数字媒体</span>
//                             <span id="a1" className="curp">超级管理员</span>
//                         </div>
//                         <input type="text" placeholder="用户名" defaultValue="" className="yhm" id="user"/>
//                         <input type="password" placeholder="密码" defaultValue="" className="mm" id="password"/>
//                         <input type="text" placeholder="验证码" defaultValue="" className="yzm" id="yzm" maxLength="4"/>
//                         <div className="suiji" id="suiji">
//                             <span className="hq">获取验证码</span>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                         </div>
//                         <input type="button" defaultValue="登录" className="login" id="login"/>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }






import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from'react-redux';
import {teacherLoginData} from './actions';
import {hashHistory} from 'react-router';
import InputItem from '../compoent/inputItem';
import Identifying from '../compoent/identifying';
import SelectItem from '../compoent/selectItems';
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.saveLoginMessage = this.saveLoginMessage.bind(this);
        this.getIden = this.getIden.bind(this);
    }

    login() {
        let user = ReactDOM.findDOMNode(this.refs.username).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${user}&password=${password}&roleType=1&officeType=1`)
            .then(json=>json.json())
            .then(json=> {
                if (json.status == 201) {
                    alert(json.message);
                } else if (json.status == 200) {
                    this.props.onSuper(json);
                    hashHistory.push("/super");
                }
            }, err=> {
                alert("服务器异常");
            })
    }

    saveLoginMessage() {
        let college = parseInt(ReactDOM.findDOMNode(this.refs.college).value) + 1;
        let authority = ReactDOM.findDOMNode(this.refs.authority).value;
        let username = ReactDOM.findDOMNode(this.refs.username).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        let identify = ReactDOM.findDOMNode(this.refs.identify).children[0].value;
        let laissezPasser = false;
        this.login(college, authority, username, password, identify, laissezPasser);
    }

    render() {
        console.log(this.props);
        // return (
        //     <div>
        //         <input type="text" placeholder="user" ref="username"/>
        //         <input type="password" placeholder="password" ref="password"/>
        //         <button onClick={this.login}>登陆</button>
        //     </div>
        // )


        return(
            <div style={{height:"100%"}}>{
               <div className="login-bg">
                    <div className="login-box" onKeyDown={this.keyLogin}>
                        <SelectItem prompt={['数字媒体web','数字媒体ui']}
                                    ref="college"
                        />
                        <SelectItem prompt={['学生','教师','超级管理员']}
                                    ref="authority"
                        />
                        <InputItem prompt="用户名" ref="username" name=""/>
                        <InputItem prompt="密码" ref="password" name=""/>
                        <Identifying ref="identify" getId={this.getIden}/>
                        <InputItem prompt="登录" login={this.saveLoginMessage} color="yellow"/>
                    </div>
                </div>
            }</div>
        )
    }


    keyLogin(event) {
        if (event.keyCode == 13) {
            this.saveLoginMessage();
        }
    }

    getIden(value) {
        this.setState({
            id: value
        })
    }
}

function maneger(state) {
    return {}
}
const mapDispatchToProps = {
    onSuper:teacherLoginData
};
export default connect(maneger,mapDispatchToProps)(Login);