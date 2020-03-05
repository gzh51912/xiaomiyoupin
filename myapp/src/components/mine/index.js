import React, { Component } from 'react'
import '../../font/iconfont.css'
import './mine.css'
 class Mine extends Component {
    login=()=>{
        console.log(123);
        this.props.history.push("/login")
    }
    render() {
        return (
            <div className="mine">
                <div className="mine-top">
                    <img src={require("../../assets/img/touxiang.png")} />
                    <span onClick={this.login}>请登陆</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>></span>
                </div>
                <div className="mine-content">
                    <div className="mine-content-one">
                        <span>我的订单</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>></span>
                    </div>
                    <div className="mine-content-two">
                        <div>
                            <span className="iconfont">&#xe602;</span>
                            <span>待付款</span>
                        </div>
                        <div>
                            <span className="iconfont">&#xe604;</span>
                            <span>待收货</span>
                        </div>
                        <div>
                            <span className="iconfont">&#xe873;</span>
                            <span>评价</span>
                        </div>
                        <div>
                            <span className="iconfont">&#xe874;</span>
                            <span>退款/售后</span>
                        </div>
                    </div>
                    <div className="mine-content-img">
                        <img src={require("../../assets/img/mine.gif")} />
                    </div>
                    <div className="mine-content-one">
                        <span>我的资产</span>
                        <span></span>
                        <span></span>
                        <span style={{"font-size":"10px"}}>优惠券/积分</span>
                        <span>></span>
                    </div>
                    <div className="mine-content-one">
                        <span>拼团</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>></span>
                    </div>
                    <div className="mine-content-one">
                        <span>我的收藏</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>></span>
                    </div>
                    <div className="mine-content-one">
                        <span>地址管理</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>></span>
                    </div>
                    <div className="mine-content-one">
                        <span>资质证照</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>></span>
                    </div>
                    <div className="mine-content-one">
                        <span>协议规则</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>></span>
                    </div>
                    <div className="mine-content-one">
                        <span>帮助与反馈</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Mine