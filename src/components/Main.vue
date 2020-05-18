<template>
  <section>
    <Navbar />
    <section class="title-img" id="title-home">
      <div class="title-img-block">
        <h1 class="logo__title">Fitness</h1>
        <h3 class="text__heading_size_h3 text-title">Нужно придумать какую-нибудь фразу в строку</h3>
        <div class="btn-block">
          <button
            class="btn__title btn__title_color_orange text__heading_size_h3"
            @click="showModal = !showModal"
          >Регистрация</button>
          <button
            class="btn__title btn__title_color_transp-orange text__heading_size_h3 marg20"
            @click="showModalAuth = !showModalAuth"
          >Вход</button>
        </div>
      </div>
    </section>
    <Homeoffers />
    <Homeaboutserv />
    <section class="attainment block-grid">
      <h1
        class="attainment__heading attainment__heading_color_white text__heading_size_h1"
      >Что вы получаете?</h1>
      <div class="attainment__blocks">
        <div class="attainment__block">
          <div class="attainment__img-block">
            <img class="attainment__img" src="../assets/img/mat.svg" alt="comfortable training" />
          </div>
          <p class="text__heading_size_h3">Комфортные условия для тренировок</p>
        </div>
        <div class="attainment__block">
          <div class="attainment__img-block">
            <img class="attainment__img" src="../assets/img/yoga.svg" alt="training" />
          </div>
          <p class="text__heading_size_h3">Тренировки на любой вкус</p>
        </div>
        <div class="attainment__block">
          <div class="attainment__img-block">
            <img class="attainment__img" src="../assets/img/online.svg" alt="online training" />
          </div>
          <p class="text__heading_size_h3">Возможность проводить тренировки онлайн</p>
        </div>
      </div>
    </section>
    <div class="attainment__register">
      <div class="attainment__heading-block">
        <span
          class="attainment__heading attainment__heading_color_gray text__heading_size_h1"
        >Готовы приступить</span>
        <span class="attainment__heading attainment__heading_color_white text__heading_size_h1">_</span>
        <span
          class="attainment__heading attainment__heading_color_blue text__heading_size_h1"
        >тренировкам</span>
        <span class="attainment__heading attainment__heading_color_gray text__heading_size_h1">?</span>
      </div>
      <div class="attainment__btn">
        <button
          class="btn__title btn__title_color_blue text__heading_size_h3"
          @click="showModal = !showModal"
        >Регистрация</button>
        <button
          class="btn__title btn__title_color_transp-blue text__heading_size_h3 marg20"
          @click="showModalAuth = !showModalAuth"
        >Вход</button>
      </div>
    </div>

    <Footer />
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
import Footer from '@/components/Footer.vue'

export default {
  components: {
    RegisterForm,
    Authorization,
    SuccessRegister,
    NotConfirmed,
    Navbar,
    Homeoffers,
    Homeaboutserv,
    Footer
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
@import '../assets/scss/footer.scss';

.block-grid {
  padding-left: 25px;
  padding-right: 25px;
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
