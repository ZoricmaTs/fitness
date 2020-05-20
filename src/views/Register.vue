<template>
  <section class="singup-bg block-grid">
    <router-link
      :to="{ name: 'Home' }"
      class="singin__linkback text__heading_size_l"
    >
      <img src="../assets/img/Arrow.svg" alt="backlink" />
      Назад
    </router-link>
    <form class="singup" @submit.prevent="registers">
      <h1 class="singup__heading text__heading_size_h1">Регистрация</h1>
      <div class="form-block">
        <div class="singup__err text__heading_size_h3">
          {{ errArray['email'] ? errArray['email'].toString() : '' }}
        </div>
        <input
          type="name"
          name="name"
          placeholder="Ваше имя"
          class="singup__input text__heading_size_h2"
          v-model="name"
        />
      </div>
      <div class="form-block">
        <div class="singup__err text__heading_size_h3">
          {{ errArray['email'] ? errArray['email'].toString() : '' }}
        </div>

        <input
          type="email"
          name="email"
          placeholder="Ваш e-mail"
          class="singup__input text__heading_size_h2"
          v-model="email"
        />
      </div>
      <div class="form-block">
        <div class="singup__err text__heading_size_h3">
          {{ errArray['password'] ? errArray['password'].toString() : '' }}
        </div>

        <input
          type="password"
          name="password"
          placeholder="Пароль"
          class="singup__input text__heading_size_h2"
          v-model="password"
        />
      </div>
      <div class="form-block">
        <div class="singup__err text__heading_size_h3">
          {{
            errArray['password_confirmation']
              ? errArray['password_confirmation'].toString()
              : ''
          }}
        </div>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Повторите пароль"
          class="singup__input text__heading_size_h2"
          v-model="password_confirmation"
        />
      </div>
      <div class="radio-buttons">
        <div class="radio-buttons-role">
          <input
            class="radio-buttons-role__input"
            type="radio"
            id="trainer"
            name="role"
            value="trainer"
            v-model="role"
            checked
          />
          <label for="trainer" class="radio-buttons-role__label"
            >Хочу быть тренером</label
          >
        </div>
        <div class="radio-buttons-role">
          <input
            class="radio-buttons-role__input"
            type="radio"
            id="user"
            name="role"
            value="user"
            v-model="role"
          />
          <label for="user" class="radio-buttons-role__label"
            >Хочу тренироваться</label
          >
        </div>
      </div>
      <label class="check option-check">
        <input class="check__input" type="checkbox" v-model="checked_policy" />
        <span class="check__box"></span>
        <div class="check__text">
          <span class>Согласен с политикой конфиденциальности</span>
        </div>
      </label>
      <div class="form-modal__policy" v-show="checked_policy == false">
        “Необходимо указать, что вы согласны с политикой конфиденциальности”.
      </div>
      <button
        type="submit"
        :disabled="!checked_policy"
        class="btn header__btn-large"
      >
        ЗАРЕГИСТРИРОВАТЬСЯ
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: '',
      errArray: {},
      checked_policy: null
    }
  },

  methods: {
    registers() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        role: this.role //
      }
      this.$store
        .dispatch('register', data)
        .then(resp => {
          if (resp.data.success == true) {
            this.$emit('showModalSuccessregister')
          }
          if (resp.data[0]) {
            this.errArray = resp.data['0']
          } else {
            this.$emit('registration')
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

<style lang="scss" scoped>
@import '../assets/scss/registers.scss';
</style>
