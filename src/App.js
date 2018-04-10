import React, { Component } from 'react'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
//引入组件components
import NotFound from './components/NotFound'
import Login from './components/Login'


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return ( < Layout className = "base-layout" >
            <
            Switch >
            <
            Route exact path = "/"
            component = { Index }
            /> <
            Route path = "/login"
            component = { Login }
            /> <
            Route component = { NotFound } > < /Route> <
            /Switch> <
            /Layout>
        )
    }
}


export default (App)