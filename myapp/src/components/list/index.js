import React, { Component } from 'react'
import {Route,NavLink,Redirect,Switch} from 'react-router-dom'
import './list.css'
import Phone from '../phone'
import Life from '../life'
import Vioce from '../vioce'
import Peijian from '../peijian'
export default class List extends Component {
    render() {
        return (
            <div>
               <div className="listSearch">
                        <div className="search">
                            <img src={require("../../assets/img/search.png")} />
                            <input type="tetx" />
                            <span>黑鲨游戏手机3</span>
                        </div>
                </div>
                <div className="listContent">
                    <div className="left">
                        <NavLink to="/list/phone">手机</NavLink>
                        <NavLink to="/list/vioce">声学</NavLink>
                        <NavLink to="/list/peijian">配件</NavLink>
                        <NavLink to="/list/life">生活</NavLink>
                    </div>
                    <div className="right">
                        <Switch>
                            <Route path="/list/phone" component={Phone} />
                            <Route path="/list/vioce" component={Vioce} />
                            <Route path="/list/peijian" component={Peijian} />
                            <Route path="/list/life" component={Life} />
                            <Redirect from="/list" to="/list/phone" exact />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
