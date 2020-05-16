<template>
  <section>
    <header class="container-fluid">
      <h1 class="logo__min ml-3">Fitness</h1>
      <nav class="navb text__heading_size_m">
        <ul class="navb__list">
          <li class="navb__item">Регистрация</li>
          <li class="navb__item">Вход</li>
          <li class="navb__item">О сервисе</li>
          <li class="navb__item">Направления</li>
          <li class="navb__item">Вопросы и ответы</li>
          <li class="navb__item">Контакты</li>
        </ul>
      </nav>
      <ul class="social__list">
        <li class="social__list__item">
          <a class="social__link" href="#">
            <img src="../assets/img/facebook 1.svg" width="15" height="15" />
          </a>
        </li>
        <li class="social__list__item">
          <a class="social__link" href="#">
            <img
              src="../assets/img/social-media 1.svg"
              width="15"
              height="15"
            />
          </a>
        </li>
        <li class="social__list__item">
          <a class="social__link" href="#">
            <img
              src="../assets/img/social-network 1.svg"
              width="15"
              height="15"
            />
          </a>
        </li>
        <li class="social__list__item">
          <a class="social__link" href="#">
            <img src="../assets/img/twitter 1.svg" width="15" height="13" />
          </a>
        </li>
      </ul>
    </header>
    <section class="container-fluid" id="title-home">
      <div class="">
        <div class="col-lg-5">
          <h1 class="logo__title">Fitness</h1>
          <h3 class="text__heading_size_h3 text-title">
            Нужно придумать какую-нибудь фразу в строку
          </h3>
          <div class="btn-block">
            <button
              class=" btn btn__title btn__title_color_orange text__heading_size_h3"
              @click="showModal = !showModal"
            >
              Регистрация
            </button>
            <button
              class="btn btn__title btn__title_color_transp text__heading_size_h3 marg20"
              @click="showModalAuth = !showModalAuth"
            >
              Вход
            </button>
          </div>
        </div>
      </div>
    </section>

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
    position: relative;
    font-family: 'Sacramento';
    font-style: normal;
    font-weight: normal;
    @include font-size($h1-font-size);
    color: $color-blue;
    max-width: 133px;
    max-height: 56px;
    &::after {
      position: absolute;
      bottom: 0px;
      right: 5px;
      font-family: 'Jura';
      @include font-size(15px);
      content: 'онлайн';
      color: $color-orange;
    }
  }
  //navbar----------------------------------------------------------------------
  .navb {
    color: $color-dark-gray;
    &__list {
    }
  }
  li.navb__item {
    //display: inline-block;
    list-style: none !important;
  }

  //----------------------------------------------------------------------------
  &__title {
    position: relative;
    font-family: 'Sacramento';
    font-style: normal;
    font-weight: normal;
    max-width: 488px;
    max-height: 177px;
    border: 1px solid white;
    @include font-size(160px);
    color: $color-orange;
    &::after {
      position: absolute;
      bottom: 20px;
      right: 5px;
      font-family: 'Jura';
      @include font-size($font-size-body20);
      content: 'онлайн';
      color: $color-dark-gray;
    }
  }
}
////
.text-title {
  line-height: 21px;
  letter-spacing: 0.05em;
  color: $color-black;
}

//buttons----------------------------------------------------------------------
.btn {
  &__title {
    border-radius: 0 !important;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.05em;
    width: 188px;
    padding: 10px 0;
    box-sizing: border-box;
  }
  &__title_color_orange {
    border: 2px solid $color-orange;
    color: $color-white;
    background-color: $color-orange;
    &:focus {
      background: #cbff35;
      border: #cbff35 solid 2px;
    }
    &:hover {
      background: #bbf417;
      border: #bbf417 solid 2px;
    }
  }
  &__title_color_transp {
    border: 2px solid $color-orange;
    color: $color-black;
    background-color: transparent;
    &:focus {
      background: #cbff35;
      border: #cbff35 solid 2px;
    }
    &:hover {
      background: #bbf417;
      border: #bbf417 solid 2px;
    }
  }
}
.marg20 {
  margin-left: 20px;
}
</style>
