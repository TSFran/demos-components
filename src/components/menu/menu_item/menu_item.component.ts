// export default {
//     name: 'MenuItem',
//     data(){
//         return {}
//     },
//     props: ['url', 'itemName']
// }

import Vue from 'vue'
import Component from 'vue-class-component'

 @Component({
     props: ['url', 'itemName']
 })
 export class MenuItem extends Vue {
 }