<template>
  <div class="form-container">
    <div class="form-group">
      <label>收货人：</label>
      <input type="text" placeholder="请输入收货人" v-model="name"/>
    </div>

    <div class="form-group">
      <label>手机号：</label>
      <input type="text" placeholder="请输入手机号" v-model="phone"/>
    </div>

    <div class="form-group address">
      <label>详细地址：</label>
      <input type="text" placeholder="请输入详细地址" v-model="address"/>
    </div>

    <div class="button-group">
      <button class="save-btn" @click="handleSave">保存</button>
      <button class="back-btn" @click="handleCancel">返回</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'CreatePage',
  setup () {
    const store = useStore()
    const router = useRouter()
    const name = ref('')
    const phone = ref('')
    const address = ref('')
    const handleSave = () => {
      const newAddress = {
        name: name.value,
        phone: phone.value,
        address: address.value
      }
      store.commit('handleSave', { newAddress })
      router.back()
    }
    const handleCancel = () => {
      router.back()
    }
    return { handleSave, handleCancel, name, phone, address }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  padding: .2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  label {
    color: #007aff;
    margin-right: 10px;
    width: 80px;
    text-align: right;
  }

  input {
    flex: 1;
    padding: 8px;
    border: 2px solid #007aff;
    border-radius: 6px;
    font-size: 16px;
  }

  &.address {
    position: relative;
    input {
      width: calc(100% - 70px);
    }

    .locate-btn {
      position: absolute;
      right: 0;
      top: 0;
      padding: 8px 16px;
      background-color: #007aff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  }
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    width: 120px;
    padding: 10px;
    font-size: 18px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }

  .save-btn {
    background-color: #007aff;
    color: white;
  }

  .back-btn {
    background-color: #b0c4de;
    color: white;
  }
}
</style>
