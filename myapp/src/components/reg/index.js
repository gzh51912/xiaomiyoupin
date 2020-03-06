import React, { Component } from 'react'
import './reg.css'
import {checkname,reg} from '../../api/request'
 class Reg extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }
    getReg(){
        console.log(789);
        checkname(this.node.value).then((res)=>{
            console.log(this.node.value);
            if(res.type===1){
               reg(this.node.value,this.psw.value).then((res)=>{
                   if(res.type===1){
                    alert("注册成功，点击确认跳转登陆页")
                    this.props.history.push("/login")
                   }
               })
            }else{
                alert("该用户名已经被注册，换个其它的试试吧")
            }
        })
    }
    zhuce=()=>{
        if(this.node.value==="" && this.psw.value===""){
            // console.log(123);
            alert("请输入注册的相关信息")
        }else{
            // console.log(this.node.value);
            this.getReg()
        }
    }
    render() {
        return (
            <div className="reg">
                <div className="reg-content">
                    <div className="reg-title">
                        <h4>注册小米帐号</h4>
                    </div>
                    <div className="reg-input">
                        <input type="username" ref={(node)=>{this.node = node}} id="username" placeholder="请输入用户名" />
                        <input type="password" ref={(psw)=>{this.psw = psw}} placeholder="请输入密码" />              
                    </div>
                    <div className="reg-button">
                        <button onClick={this.zhuce}>注册</button>
                    </div>
                    <div className="reg-way">
                        <span>已阅读并同意：小米用户协议和隐私政策</span>
                    </div>
                    <div className="reg-style">
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
export default Reg