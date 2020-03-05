import React, { Component } from 'react'
import {getlist} from '../../api/request'
import './peijian.css'
 class Peijian extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        getlist("配件").then((res)=>{
            this.setState({
                list:res
            })
        })
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <ul className="peijian">
                    {
                        list.map((item)=>{
                            return(
                                <li>
                                    <div><img src={item.src} /></div>
                                    <div>{item.title}</div>
                                    <div>{item.slogan}</div>
                                    <div>￥{item.price}</div>
                                    <button className="button">立即购买</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Peijian