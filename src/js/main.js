// styles
import '../css/main.css'

// importing components
import Button from '../components/button/index.vue'
import Icon from '../components/icon/index.vue'

const install = (Vue, component) => {
  Vue.component(component.name, component)
}
const Clair = {
  install (Vue) {
    // installing components
    install(Vue, Button)
    install(Vue, Icon)
  }
}

export default Clair
