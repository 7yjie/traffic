<template>
    <div class="page">
        <img src="../../assets/img/login/bac2.jpg" class="bac">
       <div class="main">
           <div class="main-wrap">
               <div class="text">账号</div>
               <div class="input"><input placeholder="请输入账号" v-model="id" /></div>
           </div>
           <div class="main-wrap">
               <div class="text">密码</div>
               <div class="input"><input placeholder="请输入密码" type="password" v-model="password"/></div>
           </div>
           <div class="btn-wrap" @click="login">登录</div>
               <!--<div class="btn-wrap" @click="$router.replace('/reg')">注册</div>-->
       </div>
    </div>
</template>

<script>
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
               userLogin:"user/doLoginUser"
            }),
            //登录
            login() {
                this.userLogin({id:this.id,password: this.password})
            }
        }
    }
</script>

<style scoped>
    .page{box-sizing: border-box;}
    .page img{width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: -1}
    .main{width: 30rem;height: 15rem;position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%);transform: translate(-50%,-50%)}
    .main-wrap{width: 90%;height: 4.5rem;margin: 0 auto;margin-bottom: 2rem}
    .main-wrap .text{padding-left: 5rem;color: #fff;font-size: 1.2rem;margin-bottom: 1rem}
    .main-wrap .input{width:15rem;height:2rem;margin-top: 0.5rem;margin-left: 5rem;}
    .main-wrap .input input{width:100%;outline: none;border: 0 none;padding-left: 1rem;line-height: 2rem;background-color: #fff;color: #bababa;opacity: 0.2;border-radius: 3px}
    .main-wrap .input input::-webkit-input-placeholder{color:#eee }
    .btn-wrap{width:16rem;height: 2.5rem;background-color: #346FFF;color: #fff;text-align: center;line-height: 2.5rem;border-radius: 3px;margin-left: 6.5rem;margin-top: 3rem}
</style>