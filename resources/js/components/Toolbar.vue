<template>
<v-toolbar >
        <v-toolbar-title class="indigo--text">Indramayu Programmer Community</v-toolbar-title>

        <v-spacer></v-spacer>
            <router-link v-for="item in items" :key="item.title" :to="item.to" v-if="item.show">
                <v-btn class="ma-2" outlined color="indigo">{{ item.title }}</v-btn>
            </router-link>

</v-toolbar>
</template>


<script>
    export default {
        data() {
            return {
                items: [{
                    title: 'Beranda',
                    to: '/beranda',
                    show: true
                },
                {
                        title: 'Forum',
                        to: '/forum',
                        show: User.loggedIn()
                    },
                    {
                        title: 'Login',
                        to: '/login',
                        show: !User.loggedIn()
                    },
                    {
                        title: 'Ask Question',
                        to: '/create-question',
                        show: User.loggedIn()
                    },
                    {
                        title: 'Create category',
                        to: '/create-category',
                        show: User.loggedIn()
                    },
                    {
                        title: 'Logout',
                        to: '/logout',
                        show: User.loggedIn()
                    },
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout()
            })  
        },
    }

</script>

<style>
    a {
        text-decoration: none;
    }

</style>
