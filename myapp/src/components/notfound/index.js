import React, { Component } from 'react'


export default class Notfound extends Component {
    render() {
        return (
            <div>
                <div className="notfound">
                    <img style={{"width":"12.25rem","height":"12.25rem"}} src={require("../../assets/img/404.jpg")} />
                </div>
            </div>
        )
    }
}
