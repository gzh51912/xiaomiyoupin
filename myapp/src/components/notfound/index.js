import React, { Component } from 'react'
import './notfound.css'

export default class Notfound extends Component {
    render() {
        return (
            <div className="notfound">
                <img src={require("../../assets/img/404.jpg")} />
            </div>
        )
    }
}
