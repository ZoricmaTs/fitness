<template>
  <section id="firts_section">
    <header class="container-fluid" id="header">
      <div class="row">
        <div class="ml-5 col-lg-8">
          <h1 class="logo__title">Fitness</h1>
          <h3 class="text__heading_size_h3">
            Нужно придумать какую-нибудь фразу в строку
          </h3>
          <div class="btn-block">
            <button
              class="btn__title btn__title_color_orange text__heading_size_h3"
              @click="showModal = !showModal"
            >
              Регистрация
            </button>
            <button
              class="btn__title btn__title_color_transp text__heading_size_h3 marg20"
              @click="showModalAuth = !showModalAuth"
            >
              Вход
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

@import '../assets/scss/variables.scss';
.logo {
  &__min {
    font-style: normal;
    font-weight: normal;
    @include font-size($h1-font-size);
    color: #03ada7;
  }
  &__title {
    position: relative;
    font-family: 'Sacramento';
    font-style: normal;
    font-weight: normal;
    @include font-size(160px);
    color: #db4b1a;
    border: 1px solid white;
    max-width: 488px;
    max-height: 177px;
    &::after {
      position: absolute;
      bottom: 20px;
      right: 5px;
      font-family: 'Jura';
      @include font-size($font-size-body20);
      content: 'онлайн';
      color: #312829;
    }
  }
}

.btn {
  &__title {
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.05em;
    width: 188px;
    padding: 10px 0;
    box-sizing: border-box;
  }
  &__title_color_orange {
    border: 2px solid #db4b1a;
    color: $color-white;
    background-color: #db4b1a;
  }
  &__title_color_transp {
    border: 2px solid #db4b1a;
    color: $color-black;
    background-color: transparent;
  }
  &:focus {
    background: #cbff35;
    border: #cbff35 solid 3px;
  }
  &:hover {
    background: #bbf417;
    border: #bbf417 solid 3px;
  }
}
.marg20 {
  margin-left: 20px;
}
</style>
