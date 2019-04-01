import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store(
    {
        state: {
            firstName: '',
            lastName: '',
            login: '',
            email: '',
            password: '',
            country: '',
            city: '',
            dateOfBirth: '',
            zipCode: '',
        },

        mutations: {
            setFirstName(state, firstName) {
                state.firstName = firstName;
            },
            setLastName(state, lastName) {
                state.lastName = lastName;
            },
            setLogin(state, login) {
                state.login = login;
            },
            setEmail(state, email) {
                state.email = email;
            },
            setPassword(state, password) {
                state.password = password;
            },
            setCountry(state, country) {
                state.country = country;
            },
            setCity(state, city) {
                state.city = city;
            },
            setDateOfBirth(state, dateOfBirth) {
                state.dateOfBirth = dateOfBirth;
            },
            setZipCode(state, zipCode) {
                state.zipCode = zipCode;
            },
        }
    },


)