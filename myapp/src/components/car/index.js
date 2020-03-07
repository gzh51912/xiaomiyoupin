import React, { Component } from 'react'
import store from '../../store'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
import { carid,cardet } from '../../api/request';
import './car.css'
 class Car extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getCar()
    }
    getCar(){
        carid().then((res)=>{
            // console.log(res);
            var data = []
            for(var i in res){
                // console.log(res);
                cardet(res[i].id).then((res)=>{
                    data.push(res[0])
                    this.setState({
                        list:data,
                    },()=>{
                        // console.log(this.state.list.length);
                    })
                })
            }
        })
    }

    quitcar=()=>{
        this.props.history.push("/home")
    }
    carback=()=>{
        this.props.history.push("/list/phone")
    }

    back=()=>{
        this.props.history.push("/list/phone")
    }
    render() {
        return (
            <div className="car">
                
                {
                    this.state.list.length===0?<div className="car-empty">
                    <p className="msg">购物车内还没有商品，赶紧去选购吧～</p>
                    <p onClick={this.back} className="btn">随便逛逛</p></div>:
                    
                    <ul className="car-ul">
                        <div className="car-top">
                            <span className="text" onClick={this.carback}>再去逛逛</span>
                            <span>购物车</span>
                            <span></span>
                            <span onClick={this.quitcar}>退出</span>
                        </div>
                        {
                            this.state.list.map((item,index)=>{
                                return(
                                <li key={index} className="car-info">
                                        <div className="car-info-one"><img src={item.src} /></div>
                                        <div className="car-info-two">
                                            <div className="ps">
                                                <p>{item.title}</p>
                                                <p>￥{item.price}元</p>
                                            </div>
                                        </div>
                                </li>)
                            })
                        }
                         <div className="car-footer">
                            <span>您一共选购{this.state.list.length}件商品</span>
                            <span>去结算</span>
                        </div>
                    </ul>
                }
               
            </div>
        )
    }
}
var mapState=()=>{
    return{
        
    }
}
export default connect(mapState,actionCreator)(Car)