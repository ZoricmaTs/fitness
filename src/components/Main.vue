<template>
  <section>
    <Navbar />
    <section class="title-img" id="title-home">
      <div class="title-img-block">
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
    </section>
    <section class="offers-block block-grid">
      <div class="offer">
        <h2 class="offer__heading text__heading_size_h2">
          Занятия
          <br />
          в мини-группах
        </h2>
        <img
          class="offer__img offer__img-1"
          src="../assets/img/poses 1.svg"
          alt="offer image"
          width="77"
          height="77"
        />
        <p class="offer__body text__heading_size_m">
          Если вы всегда занимались<br />
          в группах, наш сервис<br />
          предостави вам возможность<br />
          не изменять своим привычкам
        </p>
      </div>
      <div class="offer">
        <h2 class="offer__heading text__heading_size_h2">
          Индивидуальные
          <br />
          занятия
        </h2>
        <img
          class="offer__img offer__img-1"
          src="../assets/img/tools-and-utensils 1.svg"
          alt="offer image"
          width="77"
          height="77"
        />
        <p class="offer__body text__heading_size_m">
          Мы заботимся о комфорте наших<br />
          клиентов. Если вы чувствуете себя<br />
          уверенне на индивидуальных<br />
          занятия, наш сервис поможет вам<br />
        </p>
      </div>
      <div class="offer">
        <h2 class="offer__heading text__heading_size_h2">
          Комфортные<br />
          условия
        </h2>
        <img
          class="offer__img offer__img-1"
          src="../assets/img/hands-and-gestures 1.svg"
          alt="offer image"
          width="77"
          height="77"
        />
        <p class="offer__body text__heading_size_m">
          Занимайтесь где угодно,<br />
          когда вам удобно и есть желание.<br />
          Выбирайте тренера и начинайте<br />
          дистигать своих целей<br />
        </p>
      </div>
    </section>
    <section class="about-service">
      <h1 class="about-service__heading text__heading_size_h1">
        Как работает наш сервис?
      </h1>
      <div class="about-service__block">
        <div class="about-service__text-reg">
          <h3 class="about-service__text-reg-heading text__heading_size_h3">
            Регистрация
          </h3>
          <p class="about-service__text-reg-body">
            Чтобы воспользоваться услугами сервиса, вы должны пройти
            регистрацию, выбрав в роли кого хотите присутствовать на нашем
            сервисе: тренер или тренирующийся.
          </p>
        </div>
        <img class="about-service__img" src="../assets/img/nout.png" />
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
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    RegisterForm,
    Authorization,
    SuccessRegister,
    NotConfirmed,
    Navbar
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

.block-grid {
  padding: 0 25px;
}
.title-img {
  padding: 0 25px;
  background-image: url('../assets/img/image8.png');
  background-size: cover;
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
}
.title-img-block {
  padding: 100px 0 230px 0; ///пересмотреть момент на мобилке
}

//----------------------------------------------------------------------------

////
.text-title {
  line-height: 21px;
  letter-spacing: 0.05em;
  color: $color-black;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 90px;
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
//-------------------------------------------------------
.offers-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.offer {
  width: 291px;
  padding: 30px 20px 46px 20px;
  color: $color-white;
  background-color: $color-dark-gray;
  &__heading {
    font-weight: bold;
    line-height: 28px;
    text-align: right;
    margin-bottom: 0;
  }
  &__body {
    line-height: 16px;
    text-align: right;
    margin-bottom: 0;
  }
  &__img {
  }
  &__img-1 {
    position: relative;

    &::before {
      position: absolute;
      content: url(../assets/img/Ellipse.svg);
      top: 0;
      left: 0;
    }
  }
  // .offers-block > div:nth-child(2) {
  //   margin-right: 20px;
  //   margin-left: 20px;
  // }
}
//-------------------------------------------------------
.about-service {
  background-color: $color-dark-gray;
  &__heading {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    color: $color-white;
  }
  &__text-reg {
    display: block;

    max-width: 387px;
    padding: 18px;
    background-color: $color-orange;
    color: $color-white;
  }
  &__text-reg-heading {
    font-style: normal;
    font-weight: bold;
    line-height: 21px;
  }
  &__text-reg-body {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0;
  }
  &__img {
    position: absolute;
  }
}
</style>
