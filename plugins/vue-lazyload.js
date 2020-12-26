import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import loader from '../assets/svg/loader.svg'
import problem from '../assets/svg/error.svg'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: problem,
  loading: loader,
  attempt: 3,
})
