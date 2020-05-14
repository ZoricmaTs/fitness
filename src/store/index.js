import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import reviews from './modules/reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    reviews
  }
})
