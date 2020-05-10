<template>
    <v-container>
        <v-form @submit.prevent="login">
            <v-text-field v-model="form.email" label="E-mail" type="email" required></v-text-field>
            <v-text-field v-model="form.password" :counter="10" label="Password" type="text" required>
            </v-text-field>
            <v-btn color="primary" type="submit">
                Login
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
      methods:{
      login() {
      User.login(this.form);
    }
       
    }
    }


</script>

<style>

</style>
