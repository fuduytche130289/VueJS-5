import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('MyButton',{
  data(){
    return {
      buttonText: 'MyButton'
    }
  },
  template: '<button>{{buttonText}}</button>'
})
Vue.component('MySelect',{
  template: '<select><option>Vui long chon</option></select>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
