<template>
    <div class="reg">
        <div class="main">
            账号 : <input placeholder="请输入账号" v-model="id"/>
        </div>
        <br>
        <div class="main">
            密码 : <input placeholder="请输入密码" type="password" v-model="password"/>
        </div>
        <div class="regBtn" @click="reg">注册</div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "reg",
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
            reg() {
               this.regUser({id:this.id,password: this.password})
            }
        }
    }
</script>

<style scoped>
    .main input{outline: none}
    .regBtn{width: 100px;height: 30px;text-align: center;line-height: 30px;color: #fff;border-radius: 10px;background-color: brown;margin-top: 10px;cursor: pointer}
</style>