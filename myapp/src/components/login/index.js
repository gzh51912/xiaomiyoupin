import React, { Component } from 'react'
import './login.css'
import {login} from '../../api/request'
 class Login extends Component {
    reg=()=>{
        this.props.history.push("/reg")
    }
    login=()=>{
        login(this.node.value,this.psw.value).then((res)=>{
            // console.log(this.node.value);
            if(res.type===1){
                sessionStorage.setItem("user",this.node.value) //储存登录信息到本地
                this.props.history.push("/mine")
            }
            else{
                alert("请输入正确的用户名和密码")
            }
        })
    }
    render() {
        return (
            <div className="login">
                <div className="login-content">
                    <div className="login-title">
                        <h4>米家有品</h4>
                    </div>
                    <div className="login-input">
                        <input type="text" id="username" ref={(node)=>{this.node = node}} placeholder="请输入用户名" />
                        <input type="password" id="password" ref={(psw)=>{this.psw = psw}} placeholder="请输入正确的密码" />              
                    </div>
                    <div className="login-button">
                        <button onClick={this.login}>登入</button>
                    </div>
                    <div className="login-way">
                        <span>手机短信登入</span>
                        <span>/</span>
                        <span onClick={this.reg}>注册</span>
                    </div>
                    <div className="login-reg">
                        <span onClick={this.reg}>立即注册</span>
                        <span>|</span>
                        <span>忘记密码？</span>
                    </div> 
                    <div className="login-style">
                        <span>简体</span>
                        <span>|</span>
                        <span>繁体</span>
                        <span>|</span>
                        <span>English</span>
                        <span>|</span>
                        <span>常见问题</span>
                        <span>|</span>
                        <span>隐私政策</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login