import React, { Component } from 'react'
import {shenghuo} from '../../api/request'
import './shenghuo.css'
class Shenghuo extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        shenghuo().then((res)=>{
            this.setState({
                list:res
            })
        })
        
        
    }
    render() {
        let {list} = this.state;
        // console.log(this.state);
        return (
            <div>
                <ul>
                    {
                        list.map((item)=>{
                            return (<li key={item.id}>
                                <img src={item.imgurl} />
                                <span className="biaoti">{item.biaoti}</span>
                                <span className="info">{item.info}</span>
                                <span className="price">￥{item.price}</span>
                            </li>)
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}
export default Shenghuo