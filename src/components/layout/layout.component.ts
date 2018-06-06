// import HeaderDefault from "../header/header.component.vue"
// import MenuDefault from "../menu/menu.component.vue"

// export default {
//     name: 'app',
//     components: {
//         HeaderDefault,
//         MenuDefault
//     }
// }

import Component from 'vue-class-component'
import HeaderDefault from "../header/header.component.vue"
import MenuDefault from "../menu/menu.component.vue"
import Vue from 'vue'

@Component({
    components: {
        HeaderDefault,
        MenuDefault
    }
})
export class Layout extends Vue {
    
}
