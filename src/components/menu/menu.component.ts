// import MenuItem from "./menu_item/menu_item.component.vue"

// export default {
//     data() {
//         return {}
//     },
//     components: {
//         MenuItem
//     }
// }

import Component from 'vue-class-component'
import Vue from 'vue'
import MenuItem from "./menu_item/menu_item.component.vue"

@Component({
    components: {
        MenuItem
    }
})
export class Menu extends Vue {

}