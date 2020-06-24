<template>
    <v-container>
        <v-form @submit.prevent="login">
              <v-alert type="error" v-show="errors">
      Salah , silahkan masukan ulang
    </v-alert>
            <v-text-field v-model="form.email" label="E-mail" type="email" required></v-text-field>
            <v-text-field v-model="form.password" label="Password" type="password" required>
            </v-text-field>
            <div class="blue--text font-italic font-weight-medium">Belum punya akun ? daftar di sini , klik tombol
                daftar</div>
            <v-btn type="submit" class="ma-2" outlined color="indigo">
                Login
            </v-btn>
            <router-link to="daftar">
                <v-btn outlined color="green">Daftar</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                ifErrow: false,
                form: {
                    email: null,
                    password: null
                },
                errors: false
            }
        },
        created() {
            if (User.loggedIn()) {
                this.$router.push({
                    name: 'forum'
                })
            }
        },
        methods: {
        login() {
        axios.post('/api/auth/login', this.form)
            .then(res => User.responseAfterLogin(res))
            .catch(() => this.errors = true)
            
    }
        // login() {
    //    User.login(this.form)
            
            
    // }
        }
    }

</script>

<style>

</style>
