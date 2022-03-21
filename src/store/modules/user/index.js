import {doLoginUserData,regUserData} from "../../../api/user";

export default {
    namespaced:true,
    state:{

    },
    mutations:{

    },
    actions:{
        //会员登录
        doLoginUser(conText,payload) {
            doLoginUserData(payload).then(res=>{
                console.log(res);
            })
        },
        //会员注册
        regUser(conText,payload) {
            regUserData(payload).then(res=>{
                console.log(res)
            })
        }
    }
}