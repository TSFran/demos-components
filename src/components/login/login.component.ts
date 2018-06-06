import axios from 'axios';

export default {
    data() {
        return {
            form: {
                user: '',
                pass: '',
            }
        }
    },
    methods: {
        logIn() {
            // axios.get('https://www.json-generator.com/api/json/get/cuidHJSdlu?indent=2', {
            //     params: {
            //         username: this.form.user,
            //         password: this.form.pass
            //     }
            // })
            //     .then((response) => {
            //         console.log("OK", response.data)
            //     })
            //     .catch(function (error) {
            //         console.log('ERROR', error);
            //     })
            // this.form.user = ''
            // this.form.pass = ''
        }
    }
}