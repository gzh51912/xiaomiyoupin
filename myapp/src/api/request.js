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

export const login=(name,password)=>{//注册
    return axios.get('/users/login',{params:{name,password}})
}