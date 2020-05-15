<template>
  <section id="firts_section">
    <header class="container-fluid" id="header">
      <div class="row">
        <div class="ml-5 col-lg-8">
          <h1 class="logo__title mt-3 mb-3">Fintess</h1>
          <h3>Нужно придумать какую-нибудь фразу в строку</h3>
          <div class>
            <button
              class="btn mr-4 header__btn mt-3 pt-2 pb-2"
              @click="showModalAuth = !showModalAuth"
            >
              ВОЙТИ
            </button>
            <button
              class="btn ml-5 header__btn mt-3 pt-2 pb-2"
              @click="showModal = !showModal"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </div>
        </div>
      </div>
    </header>

    <RegisterForm
      v-if="showModal"
      @registration="onRegister"
      @close="showModal = false"
      @authFromToReg="authFromToRegister"
    />
    <Authorization
      v-if="showModalAuth"
      @authorizations="showModalAuth = !showModalAuth"
      @close="showModalAuth = false"
      @autorizationNotActive="onNonConfirmed"
    />
    <SuccessRegister
      v-if="showModalSuccessregister"
      @successregister="showModalSuccessregister = !showModalSuccessregister"
      @close="showModalSuccessregister = !showModalSuccessregister"
    />
    <NotConfirmed
      v-if="showModalNotConfirmed"
      @notconfirmed="showModalNotConfirmed = !showModalNotConfirmed"
      @close="showModalNotConfirmed = !showModalNotConfirmed"
    />
  </section>
</template>

<script>
import RegisterForm from '@/components/Register.vue'
import Authorization from '@/components/Authorization.vue'
import SuccessRegister from '@/components/SuccessRegister.vue'
import NotConfirmed from '@/components/NotConfirmed.vue'

export default {
  components: {
    RegisterForm,
    Authorization,
    SuccessRegister,
    NotConfirmed
  },
  data() {
    return {
      showModal: false,
      showModalAuth: false,
      showModalSuccessregister: false,
      showModalNotConfirmed: false
    }
  },
  methods: {
    onRegister() {
      this.showModal = false
      this.showModalSuccessregister = true
    },
    onNonConfirmed() {
      this.showModalAuth = false
      this.showModalNotConfirmed = true
    },
    authFromToRegister() {
      // у вас нет акк..зарегистрируйтесь ааа3 как эт сделать
      this.showModalAuth = false
      this.showModal = true
    }
  }
}
</script>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap';

@import '../../node_modules/bootstrap/scss/functions';
@import '../../node_modules/bootstrap/scss/variables';
//@import '../assets/scss/main.scss';
.logo {
  &__title {
    font-family: 'Sacramento';
    font-style: normal;
    font-weight: normal;

    @include font-size(160px);
    color: #db4b1a;
    border: 1px solid white;
  }
}
@media (max-width: 768px) {
  .logo__title {
  }
}
</style>
