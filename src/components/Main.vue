<template>
  <section id="firts_section">
    <header class="container w-1280" id="header">
      <div class="row">
        <div class="wrapper_header ml-5 col-lg-8">
          <h1 class="header_h1 mt-3 mb-3">
            ФИТНЕС ОНЛАЙН
            <br />С КОЛЛЕКТИВНОЙ ПОДДЕРЖКОЙ
          </h1>
          <p class="header_p">
            Художественный ритуал многопланово образует эпитет. Интерпретация,
            по определению, изящно дает фактографический горизонт ожидания.
            многопланово аккумулирует онтогенез.
          </p>
          <div class>
            <button
              class="btn mr-4 header__btn mt-3 pt-2 pb-2"
              @click="showModalAuth = !showModalAuth"
            >ВОЙТИ</button>
            <button
              class="btn ml-5 header__btn mt-3 pt-2 pb-2"
              @click="showModal = !showModal"
            >ЗАРЕГИСТРИРОВАТЬСЯ</button>
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

<style lang="scss" scoped></style>
