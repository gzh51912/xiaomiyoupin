import React, { Component } from 'react'
import Swiper from 'swiper'
import "swiper/css/swiper.css"

export default class Myswiper extends Component {
    componentDidMount(){
        // 说明数据变化了，异步数据回来
        new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项，
              autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,//是否能够拖动
            
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
           
          })     
    }
    render() {
        return (
            <div>
               <div className="swiper-container">
                        <div className="swiper-wrapper">
                           {
                               this.props.list.map((item)=>{
                               return <div className="swiper-slide" key={item.bannerId}>
                                            {item.imgUrl}
                                      </div>
                               })
                           }
                        </div>
                        <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
