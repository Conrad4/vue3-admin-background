<template>
  <div>
    <el-form :model="loginForm" :rules="loginRules">
      <el-form-item label="登录" prop="username">
        <el-input v-model="loginForm.username" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="登录">
        <el-input
          v-model="loginForm.password"
          placeholder=""
          :type="passwordType"
        ></el-input>
        <span class="show-pwd">
          <svg-icon
            :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            @click="onChangePwdType"
          ></svg-icon>
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import SvgIcon from '../../components/SvgIcon/index.vue'
import { validatePassword } from './rules'
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

const passwordType = ref('password')

// 点击切换密码显示状态，三元运算符和if的写法
const onChangePwdType = () => {
  // passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
</script>

<style></style>
