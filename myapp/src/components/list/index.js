import React, { Component } from 'react'
import {Route,NavLink,Redirect,Switch} from 'react-router-dom'
import One from '../one'
import Two from '../two'
import './list.css'

export default class List extends Component {
    render() {
        return (
            <div>
                <div className="leftContent">
                    <NavLink to="/list/one">手机数码</NavLink>
                    <NavLink to="/list/two">官方配件</NavLink>
                </div>
                <div className="rightContent">
                    <Switch>
                        <Route path="/list/one" component={One} />
                        <Route path="/list/two" component={Two} />
                        <Redirect from="/list" to="/list/one" exact />
                    </Switch>
                </div>
                
            </div>
        )
    }
}
