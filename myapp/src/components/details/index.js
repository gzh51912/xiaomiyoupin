import React, { Component } from 'react'
import store from '../../store'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
import {details,checktitle, addCar} from '../../api/request'
import './details.css'
class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            num:1
        }
    }
    componentDidMount(){
        this.getDetails();
    }
    componentDidUpdate(){ 
        // 轮播图
       new Swiper('.swiper-container',{
           direction: 'horizontal', // 垂直切换选项
           loop:true,//循环模式
           autoplay:{
               delay:2000,
               disableOnInteraction:false
           },
           //如果需要分页器
           pagination:{
               el:'.swiper-pagination'
           }
       })
    }
    goback=()=>{
        this.props.history.push("/list")
    }
    getDetails(){
        details(store.getState().id).then((res)=>{
            // console.log(store.getState().id);
            // console.log(res);
            this.setState({
                list:res
            })
        })
    }
    incar=()=>{
        this.props.history.push("/car")
    }
    addCar=(id)=>{
        this.props.details(id)
        this.getCar()
    }
    getCar(){
        checktitle(this.state.list[0].title,sessionStorage.getItem("user")).then((res)=>{
            if(res.type==0){//此时购物车列表没有此商品
                console.log(res.msg);
                console.log(this.state.list[0].id);
               addCar(this.state.list[0].id,this.node.innerText).then((res)=>{
                   console.log(res);
                   if(res.type==1){
                       alert(res.msg)
                   }else{
                       alert("添加失败")
                   }
                })
            }
        })
    }
    render() {
        return (
            <div className="details">
                <div className="det-top">
                    <div onClick={this.goback}>《返回上一级</div>
                </div>
                <div className="det-banner">
                    {
                         this.state.list.map((item)=>{
                            return <div className="swiper-container"   key={item.id} style={{marginTop:"36px"} }>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide"><img src={item.src} /></div>
                                        <div className="swiper-slide"><img src="//openfile.meizu.com/group1/M00/06/A8/Cgbj0FusSKiAW4z7AALHc8pivJY472.png480x480.jpg" /></div>
                                        <div className="swiper-slide"><img src='//openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhu-AaV4AAAlk4z4lkt0463.png480x480.jpg' /></div> 
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                         })
                    }
                </div>
               
                <div className="det-info">
                    {
                        this.state.list.map((item)=>{
                            return <div className="det-goods">
                                <span>￥{item.price}</span>
                                <span>{item.title}</span>
                                <span>{item.slogan}</span>
                            </div>
                        })
                    }
                </div>
                <div className="det-center">
                    <div>
                        <img src={require("../../assets/img/det1.png")} />
                    </div>
                </div>
                <div className="det-centerA">
                    <div>
                        <img src={require("../../assets/img/get2.png")} />
                    </div>
                </div>
                <div className="det-num">
                    <span>默认购买数量：</span><span ref={(node)=>this.node=node}>{this.state.num}</span>
                </div>
                <div className="det-footer">
                    <span>店铺</span>
                    <span onClick={this.incar}>进入购物车</span>
                    <span onClick={this.addCar}>加入购物车</span>
                </div>
            </div>
        )
    }
}
var mapState=()=>{
    return{
        
    }
}
export default connect(mapState,actionCreator)(Details)