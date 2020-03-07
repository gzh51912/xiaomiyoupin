import React, { Component } from 'react'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
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
    details=(id)=>{
        this.props.details(id)
        this.props.history.push("/details")
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <ul className="phone">
                    {
                        list.map((item)=>{
                            return(
                                <li onClick={this.details.bind(this,item.id)}>
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
export default connect(mapState,actionCreator)(Phone)