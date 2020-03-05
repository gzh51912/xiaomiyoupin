import React, { Component } from 'react'
import {Route,NavLink,Redirect,Switch} from 'react-router-dom'
import './home.css'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import Tuijian from '../tuijian'
import Zhineng from '../zhineng'
import Dianqi from '../dianqi'
import Shenghuo from '../shenghuo'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            listsw:[]
        }
    }
    componentDidMount(){
        // this.getSw()
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

    render() {
        return (
            <div>
                <div className="topLogo">
                     <img src={require("../../assets/img/logo.png")} />
                    <div className="homeSearch">
                        <div className="search">
                            <img src={require("../../assets/img/search.png")} />
                            <input type="tetx" />
                            <span>黑鲨游戏手机3</span>
                        </div>
                    </div>
                </div>
                <div className="home-center">
                    <div className="banner">
                        <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="https://img.youpin.mi-img.com/youpinoper/ef9014b5045639a5ad8b75d9786e49c4.jpg@base@tag=imgScale&h=320&w=750"/></div>
                        <div className="swiper-slide"><img src="https://img.youpin.mi-img.com/youpinoper/f17b2533de435aff14c3b35a5dd01573.jpg@base@tag=imgScale&h=320&w=750"/></div>
                        <div className="swiper-slide"><img src="https://img.youpin.mi-img.com/youpinoper/1b6623f65714c055a48c3b93f0de8e12.jpg@base@tag=imgScale&h=320&w=750"/></div>
                        <div className="swiper-slide"><img src="https://img.youpin.mi-img.com/youpinoper/3564e9ac500741f2d1f806af358ed1c6.jpg@base@tag=imgScale&h=320&w=750"/></div>
                        <div className="swiper-slide"><img src="https://img.youpin.mi-img.com/youpinoper/8b8768faceb441266d13f75801f733e5.jpg@base@tag=imgScale&h=320&w=750"/></div>
                        <div className="swiper-slide"><img src="https://img.youpin.mi-img.com/youpinoper/a88499b48ff68ded211c61147e4f7c0f.jpg@base@tag=imgScale&h=320&w=750"/></div>
                    </div>
                    <div className="swiper-pagination" style={{width:"160%"}}></div>
                </div>
                    </div>
                    <div className="home-icon">
                        <div className="home-icon-top">
                        <div>
                            <div>
                                 <img src={require("../../assets/img/1.png")} />
                            </div>
                            <span>每日上新</span>
                        </div>
                        <div>
                            <div>
                                 <img src={require("../../assets/img/2.png")} />
                            </div>
                            <span>小米众筹</span>
                        </div>
                        <div>
                            <div>
                                 <img src={require("../../assets/img/3.png")} />
                            </div>
                            <span>限时抢购</span>
                        </div>
                        <div>
                            <div>
                                 <img src={require("../../assets/img/4.png")} />
                            </div>
                            <span>热销排行</span>
                        </div>
                        <div>
                            <div>
                                 <img src={require("../../assets/img/5.png")} />
                            </div>
                            <span>小米自营</span>
                        </div>
                    </div>
                        <div className="home-icon-footer">
                    <div>
                            <div>
                                 <img src={require("../../assets/img/6.png")} />
                            </div>
                            <span>0元专享</span>
                        </div>
                        <div>
                            <div>
                                 <img src={require("../../assets/img/7.png")} />
                            </div>
                            <span>5折神券</span>
                        </div>
                        <div>
                            <div>
                                 <img src={require("../../assets/img/8.png")} />
                            </div>
                            <span>DLAB</span>
                        </div>
                        <div>
                            <div>
                                 <img src={require("../../assets/img/9.png")} />
                            </div>
                            <span>雷军同款</span>
                        </div>
                        <div>
                            <div>
                                 <img src={require("../../assets/img/10.png")} />
                            </div>
                            <span>新人必买</span>
                        </div>
                    </div>
                    </div>
                    <div className="home-active">
                            <img src={require("../../assets/img/18.gif")} />
                    </div>
                    <div className="home-active-one">
                        <div>
                            <img src={require("../../assets/img/11.gif")} />
                        </div>
                        <div>
                            <img src={require("../../assets/img/12.png")} />
                        </div>
                        <div>
                            <img src={require("../../assets/img/13.png")} />
                        </div>
                    </div>
                    <div className="home-active-two">
                        <div>
                            <img src={require("../../assets/img/14.png")} />
                            <img src={require("../../assets/img/15.png")} />
                        </div>
                        <div>
                            <img src={require("../../assets/img/16.png")} />
                            <img src={require("../../assets/img/17.png")} />
                        </div>
                    </div>
                    <div className="home-active-three">
                        <div className="biaoti">
                            <span>小米有品众筹</span>
                            <span>更多></span>
                        </div>
                        <div className="info">
                            <div className="content">
                                <div>智能可视采耳棒</div>
                                <div>300W高精内窥镜，磁吸充电底座，酷爽采耳，让你大开眼界</div>
                                <div>￥169</div>
                            </div>
                            <div className="goodsimg">
                                <img src={require("../../assets/img/19.png")} />
                            </div>
                        </div>
                        <div className="info-footer">
                            <img src={require("../../assets/img/20.png")} />
                            <span>支持人数</span><span>9758</span><span>/</span><span>完成度</span><span>487%</span>
                            <p></p>
                        </div>
                        <div className="info2">
                            <div className="content1">
                                <div>烘干消毒器</div>
                                <div>￥129</div>
                                <img src={require("../../assets/img/21.png")} />
                                <div className="info-footer">
                                    <img src={require("../../assets/img/20.png")} />
                                    <span>支持人数</span><span>9758</span><p></p>
                                </div>
                            </div>

                            <div className="content2">
                                <div>九号电动C40</div>
                                <div>￥4199</div>
                                <img src={require("../../assets/img/22.png")} />
                                <div className="info-footer">
                                    <img src={require("../../assets/img/20.png")} />
                                    <span>支持人数</span><span>9758</span><p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-active-four">
                        <div>
                            <div>
                                <span>每日上新</span><span>更多></span>
                            </div>
                           <div className="goodsinfo">
                               <div>
                                    <img src={require("../../assets/img/23.png")} />
                                    <p>小米手表</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/24.png")} />
                                    <p>黑鲨游戏手机3</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/25.png")} />
                                    <p>吸拖一体吸尘器</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/26.png")} />
                                    <p>小米无线充音箱</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/23.png")} />
                                    <p>小米手表</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/24.png")} />
                                    <p>黑鲨游戏手机3</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/25.png")} />
                                    <p>吸拖一体吸尘器</p>
                               </div>
                               
                           </div>
                        </div>
                    </div>
                    <div className="home-active-five">
                        <div>
                            <div>
                                <span>热销榜</span>
                                <span>排序由销量、搜索、好评等综合得出</span>
                                <span>更多></span>
                            </div>
                           <div className="goodsinfo">
                               <div>
                                    <img src={require("../../assets/img/23.png")} />
                                    <p>小米手表</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/24.png")} />
                                    <p>黑鲨游戏手机3</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/25.png")} />
                                    <p>吸拖一体吸尘器</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/26.png")} />
                                    <p>小米无线充音箱</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/23.png")} />
                                    <p>小米手表</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/24.png")} />
                                    <p>黑鲨游戏手机3</p>
                               </div>
                               <div>
                                    <img src={require("../../assets/img/25.png")} />
                                    <p>吸拖一体吸尘器</p>
                               </div>
                               
                           </div>
                        </div>
                    </div>
                    <div className="home-active-six">
                        <div>
                            <div className="one">
                                <span>特卖汇</span>
                                <span>女神节特惠精选</span>
                                <img src={require("../../assets/img/biao.png")} />
                                <img src={require("../../assets/img/yuan.png")} />
                            </div>
                            <div className="two">
                                <span>防疫指南</span>
                                <span>开工&宅家</span>
                                <img src={require("../../assets/img/ping.png")} />
                            </div>
                            <div className="three">
                                <span>玩家福利</span>
                                <span>先领券后购物</span>
                                <img src={require("../../assets/img/erji.png")} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-list">
                    <div className="home-list-content">
                        <div className="home-list-top">
                            <NavLink to="/home/tuijian">推荐</NavLink>
                            <NavLink to="/home/zhineng">智能</NavLink>
                            <NavLink to="/home/dianqi">电器</NavLink>
                            <NavLink to="/home/shenghuo">生活</NavLink>
                        </div>
                        <div className="home-list-footer">
                            <Switch>
                                <Route path="/home/tuijian" component={Tuijian} />
                                <Route path="/home/zhineng" component={Zhineng} />
                                <Route path="/home/dianqi" component={Dianqi} />
                                <Route path="/home/shenghuo" component={Shenghuo} />
                                <Redirect from="/home" to="/home/tuijian" exact />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
