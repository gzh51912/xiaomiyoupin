import Home from '../components/home'
import List from '../components/list'
import Car from '../components/car'
import Mine from '../components/mine'
import Login from '../components/login'
import Reg from '../components/reg'
import Details from '../components/details'
// import Loadable from 'react-loadable'
// var Home=Loadable({  //异步加载组件
//     loader:()=>import("../App"),
//     loading:()=><div>loading.....</div>
// })

export const routes =[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/list',
        component:List
    },
    {
        path:'/car',
        component:Car
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/reg',
        component:Reg
    },
    {
        path:'/details',
        component:Details
    },
    {
        path:'/404',
        component:NotFound
    }
]

export const subRoutes =[
    {
        path:'/home/dashboard',
        component:DashBoard,
        // roles:["admin","abc","liuyin"]
    },
    {
        path:'/mine/login',
        component:Login,
    },
    {
        path:'/list/vioce/details',
        component:Details,
    }
]