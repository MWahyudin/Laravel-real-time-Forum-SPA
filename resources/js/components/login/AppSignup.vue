<template>
<v-app>
<v-content>
    <v-container>
        <v-form @submit.prevent="signup">
            <v-text-field v-model="form.name" label="Name" type="text" required></v-text-field>
            <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>
            <v-text-field v-model="form.email" label="E-mail" type="email" required></v-text-field>
            <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>
            <v-text-field v-model="form.password" label="Password" type="password" required></v-text-field>
            <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>
            <v-text-field v-model="form.password_confirmation" :counter="10" label="Confirm Password" type="password"
                required>
            </v-text-field>
             <span class="red--text" v-if="errors.password_confirmation">{{ errors.confirmation[0] }}</span>
            <div class="blue--text font-italic font-weight-medium">Sudah punya akun ? Silahkan login</div>
            <v-btn type="submit" class="ma-2" outlined color="green">
                Daftar
            </v-btn>
            <router-link to="login" >
                <v-btn outlined color="indigo" class="mb-12">Login</v-btn>
            </router-link>
        </v-form>
    </v-container>
</v-content>
</v-app>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null
                },
                errors: {}
            }
        },
          created(){
            if(User.loggedIn()){
                this.$router.push({name: 'forum'})
            }
        },
        methods: {
            signup() {
                axios({
                        method: 'post',
                        url: '/api/auth/signup',
                        data: this.form
                    })
                    .then(res => {
                      User.responseAfterLogin(res)
                      this.$router.push({name: 'forum'})
                      })
                    .catch(error => this.errors = error.response.data.errors)
            }

        }
    }

</script>
