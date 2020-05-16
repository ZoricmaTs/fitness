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
    </section>
    <Homeoffers />
    <Homeaboutserv />
    <Homeattainment />
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
import Homeoffers from '@/components/Homeoffers.vue'
import Homeaboutserv from '@/components/Homeaboutserv.vue'
import Homeattainment from '@/components/Homeattainment.vue'

export default {
  components: {
    RegisterForm,
    Authorization,
    SuccessRegister,
    NotConfirmed,
    Navbar,
    Homeoffers,
    Homeaboutserv,
    Homeattainment
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

@import '../assets/scss/btn.scss';
@import '../assets/scss/home-offers.scss';
@import '../assets/scss/home-aboutserv.scss';
@import '../assets/scss/home-attainment.scss';

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

//-------------------------------------------------------

//-------------------------------------------------------
</style>
