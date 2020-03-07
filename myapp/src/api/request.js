import axios from './index';  //进行了二次封装了

export const tuijian =(id,imgurl,biaoti,info,price)=>{
    return axios.get("/goods/tuijian",{params:{id,imgurl,biaoti,info,price}})
}

export const zhineng =(id,imgurl,biaoti,info,price)=>{
    return axios.get("/goods/zhineng",{params:{id,imgurl,biaoti,info,price}})
}

export const dianqi =(id,imgurl,biaoti,info,price)=>{
    return axios.get("/goods/dianqi",{params:{id,imgurl,biaoti,info,price}})
}

export const shenghuo =(id,imgurl,biaoti,info,price)=>{
    return axios.get("/goods/shenghuo",{params:{id,imgurl,biaoti,info,price}})
}

export const getlist=(type)=>{//分类页
    return axios.get('/goods/type',{params:{type}})
}

export const checkname=(name)=>{//检查是否被注册
    return axios.get('/users/checkname',{params:{name}})
}

export const reg=(name,password)=>{//注册
    return axios.post('/users/reg',{name,password})
}

export const login=(name,password)=>{//登陆
    return axios.get('/users/login',{params:{name,password}})
}

export const details=(id)=>{//详情页
    return axios.get('/goods/details',{params:{id}})
}

export const checktitle=(title,name)=>{//检查购物车是否有该商品
    return axios.get('/goods/checktitle',{params:{title,name}})
}

export const addCar=(id,number)=>{//添加商品
    return axios.post('/goods/add',{id,number})
}

export const carid=()=>{//进入购物车的表
    return axios.get('/goods/carid')
}

export const cardet=(id)=>{//渲染购物车
    return axios.get('/goods/cardet',{params:{id}})
}