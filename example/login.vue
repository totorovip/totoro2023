<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input v-model="formData.username" type="text" name="username" class="input" id="username" />
      <label for="password">Password</label>
      <input v-model="formData.password" type="password" class="input" id="password" />
      <button class="btn" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data () {
    return {
      formData: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    login () {
      axios.post('/api/login', this.formData).then(res => {
        // 省略校验用户名、密码等代码
        if (res.data.code === 0) {
            alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      }).catch(error => {
        console.error(error);
      })
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-flow: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>
