<template>
    <div class="page">
        <img src="../../assets/img/login/bac2.jpg" class="bac">
        <div class="cart" :style="{'display':isCart}">
            <div class="circle"></div>
            <img src="../../assets/img/login/cat.svg">
            <div class="context">
                <h3>欢迎</h3>
                <p>此处进行用户名和密码等表单域操作 为了凑字数，在此处附上一段小诗：假如生活欺骗了你不要悲伤，不要心急！忧郁的日子里需要镇静：相信吧，快乐的日子将会来临。心儿永远向往着未来，现在却常是忧郁；一切都是瞬息，一切都将会过去
                </p>
                <a href="#" @click="isLogin">登入</a>
            </div>
        </div>
       <div class="main" :style="{'display': isMain}">
           <div class="title">
               <div class="name">交通管理系统</div>
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
           <div class="btn-wrap" @click="login">登录</div>
           <div class="reg" @click="$router.replace('/reg')">立即注册 >></div>
       </div>
    </div>
</template>

<script>
    import {Message} from 'element-ui'
    import Vue from 'vue';
    Vue.component(Message);
    import {mapActions} from 'vuex';
    export default {
        name: "login",
        data() {
            return {
                id:"",
                password:"",
                isMain:"none",
                isCart:"block"
            }
        },
        created() {
            if(this.$route.query.isReg && this.$route.query.isReg === '1') {
                this.isMain = "block";
                this.isCart = "none";
            }
        },
        methods:{
            ...mapActions({
               userLogin:"user/doLoginUser"
            }),
            //登录
            login() {
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
                this.userLogin({id:this.id,password: this.password,success:(res)=>{
                    if(res.data.code !== 200) {
                        Message({
                            message:res.data.message,
                            type:"error",
                            duration:1500
                        });
                    } else {
                        this.$router.push('/main');
                    }
                    }})
            },
            //点击登入
            isLogin() {
                this.isMain = "block";
                this.isCart = "none";
            }
        }
    }
</script>

<style scoped>
    body {
        height: 100vh;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .my-error {color: #dcdcdc;margin: 0 auto}
    .cart {
        position: absolute;
        width: 450px;
        height: 260px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    .cart img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transition-duration: 1s;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    .cart:hover img {
        left: 74%;
    }

    .circle {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
    }

    .circle::after {
        content: "";
        width: 100%;
        height: 100%;
        display: inline-block;
        background-color: red;
        transition-duration: 1s;
        clip-path: circle(35% at 50% 50%);
    }

    .cart:hover .circle::after {
        clip-path: circle(100% at 50% 50%);
        background-color: #0077B8;
    }

    .context {
        position: absolute;
        width: 45%;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        transition-duration: 1s;
        opacity: 0;
        visibility: hidden;
        padding: 10px 10px 10px 30px;
        text-transform: uppercase;
    }

    .cart:hover .context {
        left: 27%;
        opacity: 1;
        visibility: visible;
    }

    .context h3 {
        padding: 10px 0;
    }

    .context p {
        font-size: .8em;
        line-height: 1.5em;
    }

    .context a {
        padding: 5px 10px;
        font-size: .8em;
        display: inline-block;
        font-weight: 700;
        border-radius: 10px;
        text-decoration: none;
        margin-top: 15px;
        background-color: #fff;
        color: #131313;
    }

    @media screen and (max-width:990px) {
        .cart {
            max-width: 300px;
        }
        .cart:hover {
            height: 600px;
        }
        .circle::after {
            clip-path: circle(45% at 50% 50%);
        }
        .cart .context {
            width: 60%;
        }
        .cart:hover .context {
            left: 50%;
            padding: 10px 10px 10px 10px;
        }
        .cart:hover img {
            top: 72%;
            left: 50%;
        }
    }



    .page{box-sizing: border-box;}
    .page .bac{width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: -1}
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