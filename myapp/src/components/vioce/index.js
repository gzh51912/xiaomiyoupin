import React, { Component } from 'react'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
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
    details=(id)=>{
        // console.log(id);
        this.props.details(id)
        this.props.history.push("/details")
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <ul className="vioce">
                    {
                        list.map((item)=>{
                            return(
                                <li key={item.id} onClick={this.details.bind(this,item.id)}>
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
var mapState=(state)=>{
    return{
        
    }
}
export default connect(mapState,actionCreator)(Vioce)