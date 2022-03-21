import {request} from "../../assets/js/util/request";
// import config from '../../assets/js/conf/index'


//会员登录
export function doLoginUserData(data) {
    return request("http://82.157.62.161:8001/user/login","post",data);
}
//会员注册
export function regUserData(data) {
    return request("http://82.157.62.161:8001/user/register","post",data);
}