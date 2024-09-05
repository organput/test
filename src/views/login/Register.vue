<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入用户名"
      v-model="userName"/>
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password"
      v-model="password"/>
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="确认密码" type="password"
      v-model="checkpassword"/>
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">已有账号，去登陆</div>
    <ToastView v-if="showToast" :message="message"></ToastView>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../untils/request.js'
import ToastView, { useToastEffect } from '../../components/Toast'

const useRegisterEffect = (changeToast) => {
  const data = reactive({
    userName: '',
    password: '',
    checkpassword: ''
  })
  const router = useRouter()
  const handleRegister = async () => {
    const { userName, password, checkpassword } = toRefs(data)
    if (userName.value === '' || password.value === '') {
      changeToast('用户名或密码不能为空')
      return
    } else if (password.value !== checkpassword.value) {
      changeToast('两次输入密码不同')
      return
    }
    try {
      const result = await post('api/user/Login', {
        userName: data.userName,
        password: data.password
      })
      if (result?.data?.userId === '12345') {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        changeToast('注册失败')
      }
    } catch (e) {
      changeToast('请求失败')
    }
  }

  const { userName, password, checkpassword } = toRefs(data)
  return { userName, password, checkpassword, handleRegister }
}

const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'RegisterPage',
  components: { ToastView },
  setup () {
    const { showToast, message, changeToast } = useToastEffect()
    const { userName, password, checkpassword, handleRegister } = useRegisterEffect(changeToast)
    const { handleLoginClick } = useLoginEffect()
    return { showToast, message, changeToast, userName, password, checkpassword, handleRegister, handleLoginClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #f9f9f9;
    border: .01rem solid rgba(0, 0, 0, 0.1);
    border-radius: .06rem;
    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontColor;
      &::placeholder {
        color: $content-notice-fontColor;
      }
    }
  }
  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    background-color: $btn-bgColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: #f9f9f9;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontColor;
  }
}
</style>
