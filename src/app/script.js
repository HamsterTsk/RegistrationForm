import {mapState} from "vuex";
import Multiselect from 'vue-multiselect'
import datepicker from 'vuejs-datepicker'

export default {
    name: 'app',
    data() {
        return {
            isLogin: false,
            isEmail: false,
            isPassword: false,
            valueForSelectCountry: '',
            optionsForCountry: [
                {
                    country: 'Russia',
                    city: ['Tomsk', 'Moscow', 'Novosibirsk']
                },
                {
                    country: 'USA',
                    city: ['Los Angeles', 'Chicago', 'Houston']
                },
                {
                    country: 'England',
                    city: ['Bradford', 'Cambridge', 'Chester']
                },],
            valueForSelectCity: '',
            optionsForCity: [],
            isDisabledSelectCity: true,
            date: null
        }
    },
    components: {
        Multiselect,
        datepicker
    },
    computed: {
        ...mapState({
            'firstName': state => state.firstName,
            'lastName': state => state.lastName,
            'login': state => state.login,
            'email': state => state.email,
        }),
    },
    methods: {
        setLogin(event) {
            let value = event.target.value;
            this.$store.commit('setLogin', value);
            if (value.length > 0) {
                this.isLogin = true;
            } else {
                this.isLogin = false;
            }
        },
        setEmail(event) {
            let value = event.target.value;
            this.$store.commit('setEmail', value);
            if (value.length > 0) {
                this.isEmail = true;
            } else {
                this.isEmail = false;
            }
        },
        setPassword(event) {
            let value = event.target.value;
            this.$store.commit('setPassword', value);
            if (value.length > 0) {
                this.isPassword = true;
            } else {
                this.isPassword = false;
            }
        },
        setFirstName(event) {
            let value = event.target.value;
            this.$store.commit('setFirstName', value)
        },
        setLastName(event) {
            let value = event.target.value;
            this.$store.commit('setLastName', value)
        },
        setCountry() {
            this.valueForSelectCity = '';
            if (this.valueForSelectCountry) {
                this.isDisabledSelectCity = false;
            } else {
                this.isDisabledSelectCity = true;
            }
            this.$store.commit('setCountry', this.valueForSelectCountry);
            this.optionsForCountry.forEach(country => {
                if (country === this.valueForSelectCountry) {
                    this.optionsForCity = country.city;
                }
            })
        },
        setCity() {
            this.$store.commit('setCity', this.valueForSelectCity);
        },
        setDate() {
            this.$store.commit('setDateOfBirth', this.date)
        },
        setZipCode(event) {
            let value = event.target.value;
            this.$store.commit('setZipCode', value)
        }
    }

}