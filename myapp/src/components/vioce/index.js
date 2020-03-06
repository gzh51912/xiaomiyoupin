import React, { Component } from 'react'
import {getlist} from '../../api/request'
import './vioce.css'
 class Vioce extends Component {
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
        getlist("声学").then((res)=>{
            this.setState({
                list:res
            })
        })
    }
    details(){
        console.log(123);
        // this.props.history.push("/details")
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <ul className="vioce">
                    {
                        list.map((item)=>{
                            return(
                                <li>
                                    <div><img src={item.src} /></div>
                                    <div>{item.title}</div>
                                    <div>{item.slogan}</div>
                                    <div>￥{item.price}</div>
                                    <button className="button" onClick={this.details}>查看详情</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Vioce