import React, { Component } from 'react'
import {getlist} from '../../api/request'
import './phone.css'
 class Phone extends Component {
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
        getlist("手机").then((res)=>{
            this.setState({
                list:res
            })
        })
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <ul className="phone">
                    {
                        list.map((item)=>{
                            return(
                                <li>
                                    <div><img src={item.src} /></div>
                                    <div>{item.title}</div>
                                    <div>{item.slogan}</div>
                                    <div>￥{item.price}</div>
                                    <button className="button">查看详情</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Phone