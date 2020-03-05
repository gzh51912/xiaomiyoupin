import React from 'react';
import './App.css';
import '../src/font/iconfont.css'
import Home from './components/home'
import List from './components/list'
import Car from './components/car'
import Mine from './components/mine'
import Login from './components/login'
import NotFound from './components/notfound'

import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      visible:true
    }
  }
  componentDidMount(){
    this.changeTitle(this.props.location.pathname); //解决刷新问题的
    this.routeListen();  //组件一挂载就监听,  为了用setState
  }
  routeListen(){  //监听路由的变化
       this.props.history.listen((location)=>{
         this.changeTitle(location.pathname);
       })
  }
  //根据路由的变化改变标题栏的标题
  changeTitle(pathname){
      this.setState({
        visible:true
      })
      switch(pathname){
        case  '/':
        case '/home':document.title="首页";break;
        case '/car':document.title="购物车";break;
        case '/mine':document.title="我的";break;
        case '/login':document.title="登录";break;
        default:
                if(pathname.includes("/list/")){
                  document.title="分类"
                }
                else{
                  //显示404页面时候，隐藏导航
                  this.setState({
                    visible:false
                  })
                }

      }
  }
  render() {
    return (
    <div className="App">
      <Switch>
            <Route path="/home" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/car" component={Car} />
            <Route path="/mine" component={Mine} />
            <Route path="/login" component={Login} />
            <Redirect from="/" to="/home" exact />
            <Route component={NotFound} />
        </Switch>
        <ul className="footer">
           <li><NavLink to="/home"><span className="iconfont">&#xe600;</span>首页</NavLink></li>
           <li><NavLink to="/list"><span className="iconfont">&#xe601;</span>分类</NavLink></li>
           <li><NavLink to="/car"><span className="iconfont">&#xe634;</span>购物车</NavLink></li>
           <li><NavLink to="/mine"><span className="iconfont">&#xe698;</span>我的</NavLink></li>
        </ul>
    </div>
  );
  }
}

export default withRouter(App);
