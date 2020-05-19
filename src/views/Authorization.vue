<template>
  <section class="singin-bg">
    <router-link :to="{ name: 'Home' }">назад</router-link>
    <form class="block-grid" @submit.prevent="login">
      <h1 class="logo__title">Fitness</h1>
      <div class="form-blocks">
        <h1 class="singin__heading text__heading_size_h1">Вход в систему</h1>
        <div class="form-block">
          <div class="singin__err">
            {{ errArray['email'] ? errArray['email'].toString() : '' }}
          </div>
          <input
            type="email"
            name="email"
            placeholder="Ваш  e-mail"
            class="singin__input text__heading_size_h2"
            v-model="email"
          />
        </div>
        <div class="form-block">
          <div class="singin__err">
            {{ errArray['email'] ? errArray['email'].toString() : '' }}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            class="singin__input text__heading_size_h2"
            v-model="password"
          />
        </div>
        <div class="form-modal__link">
          У Вас нет аккаунта? Зарегистрируйтесь
        </div>
        <button type="submit" class="btn">ВОЙТИ</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'authorization',
  data() {
    return {
      email: '',
      password: '',
      errArray: {}
    }
  },

  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password
      }

      this.$store
        .dispatch('login', data)
        .then(resp => {
          if (resp.data.success == false) {
            if (resp.data.active == '0') {
              this.$emit('autorizationNotActive')
              //окно учетка неактивна (модалка)
              return
            } else {
              alert(resp.data.message)
              this.errArray = { email: resp.data.message }
            }
            //ошибки
          } else {
            const token = resp.data['0'].api_token
            const userI = resp.data['0']
            localStorage.setItem('api_token', token)
            localStorage.setItem('id', userI.id),
              this.$store.commit('auth_success', { token, userI })
            //axios.defaults.headers.common['Authorization'] = token
            if (resp.data['0'].role == 'trainer') {
              this.$router.push({
                name: 'profiletrainer',
                params: { id: userI.id }
              })
              //открыть кабинет тренера
            }
            if (resp.data['0'].role == 'user') {
              this.$router.push({
                name: 'profileuser',
                params: { id: userI.id }
              })
              //открыть кабинет обычного пользователя
            }
            this.$emit('close')
          }
        })
        .catch(err => console.log(err))
    },

    onClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap';
@import '../assets/scss/registers.scss';
@import '../assets/scss/variables.scss';
</style>
