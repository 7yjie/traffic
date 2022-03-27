<template>
    <div class="page">
        <img src="../../assets/img/login/bac2.jpg" class="bac">
        <div class="main">
            <div class="title">
                <div class="name">注册</div>
                <div class="line"></div>
            </div>
            <div class="main-wrap">
                <div class="text">账号</div>
                <div class="input"><input placeholder="请输入账号" v-model="id" type="text"/></div>
            </div>
            <div class="main-wrap">
                <div class="text">密码</div>
                <div class="input"><input placeholder="请输入密码" type="password" v-model="password"/></div>
            </div>
            <div class="btn-wrap" @click="reg">注册</div>
            <div class="reg" @click="$router.replace('/login?isReg=1')">已有账号,去登录 >></div>
        </div>
    </div>
</template>

<script>
    import {Message} from 'element-ui'
    import Vue from 'vue';
    Vue.component(Message);
    import {mapActions} from 'vuex'
    export default {
        name: "login",
        data() {
            return {
                id:"",
                password:""
            }
        },
        methods:{
            ...mapActions({
                regUser:"user/regUser"
            }),
            //登录
            reg() {
                if(this.id.trim() === "") {
                    Message({
                        message:"请输入账号",
                        type:"error",
                        duration:1500
                    });
                    return;
                }
                if(this.password.trim() === "") {
                    Message({
                        message:"请输入密码",
                        type:"error",
                        duration:1500
                    });
                    return;
                }
                this.regUser({id:this.id,password: this.password,success:(res)=>{
                        if(res.data.code !== 200) {
                            Message({
                                message:res.data.message,
                                type:"error",
                                duration:1500
                            });
                        } else {
                            Message({
                                message:res.data.message,
                                type:"success",
                                duration:1500
                            });
                            setTimeout(()=>{
                                this.$router.push('/login?isReg=1');
                            },1500)
                        }
                    }})
            }
        }
    }
</script>

<style scoped>
    .page{box-sizing: border-box;}
    .page img{width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: -1}
    .main{width: 30rem;height: 15rem;position: absolute;top: 35%;left: 50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%);transform: translate(-50%,-50%)}
    .main-wrap{width: 90%;height: 4.5rem;margin: 0 auto;margin-bottom: 2rem}
    .main-wrap .text{padding-left: 5rem;color: #fff;font-size: 1.2rem;margin-bottom: 1rem}
    .main-wrap .input{width:15rem;height:2rem;margin-top: 0.5rem;margin-left: 5rem;}
    .main-wrap .input input{width:100%;outline: none;border: 0 none;padding-left: 1rem;line-height: 2rem;background-color: rgba(192,192,192,0.2);color: #c0c0c0;border-radius: 4px;font-size: 12px}
    .main-wrap .input input::-webkit-input-placeholder{color:#dcdcdc}
    .btn-wrap{width:16rem;height: 2.5rem;background-color: #346FFF;color: #fff;text-align: center;line-height: 2.5rem;border-radius: 3px;margin-left: 6.5rem;margin-top: 3rem;cursor: pointer}
    .main .title{width: 90%;height: 4.5rem;margin: 0 auto;margin-bottom: 2rem}
    .main .title .name{width: 100%;height: 4.5rem;text-align: center;line-height: 4.5rem;color: #dcdcdc;font-size: 22px;letter-spacing: 20px}
    .main .title .line{width: 100%;height: 0.15rem;background: -webkit-linear-gradient(-180deg,rgba(0,74,128,0.09),rgba(255,255,255,0.59),rgba(0,74,128,0.09));border-radius: 5px}
    .main .reg{color: #dcdcdc;font-size: 8px;position: absolute;top: 24rem;right: 7.5rem;cursor: pointer}
</style>