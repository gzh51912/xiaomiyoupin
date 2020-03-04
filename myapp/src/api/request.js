import axios from './index';  //进行了二次封装了

export const tuijian =(id,imgurl,biaoti,info,price)=>{
    return axios.get("/tuijian",{params:{id,imgurl,biaoti,info,price}})
}

export const zhineng =(id,imgurl,biaoti,info,price)=>{
    return axios.get("/zhineng",{params:{id,imgurl,biaoti,info,price}})
}

export const dianqi =(id,imgurl,biaoti,info,price)=>{
    return axios.get("/dianqi",{params:{id,imgurl,biaoti,info,price}})
}

export const shenghuo =(id,imgurl,biaoti,info,price)=>{
    return axios.get("/shenghuo",{params:{id,imgurl,biaoti,info,price}})
}