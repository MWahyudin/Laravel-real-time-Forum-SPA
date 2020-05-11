<template>
    <v-toolbar>
        <v-toolbar-title class="indigo--text">Indramayu Programmer Community</v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
        <div class="frm">
            <router-link v-for="item in items" :key="item.title" :to="item.to" v-if="item.show">
                <v-btn class="ma-2" outlined color="indigo">{{ item.title }}</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>
</template>

</template>

<script>
    export default {
        data() {
            return {
                items: [{
                        title: 'Forum',
                        to: '/forum',
                        show: true
                    },
                    {
                        title: 'Login',
                        to: '/login',
                        show: !User.loggedIn()
                    },
                    {
                        title: 'Tanya Pertanyaan',
                        to: '/pertanyaan',
                        show: User.loggedIn()
                    },
                    {
                        title: 'kategori',
                        to: '/kategori',
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
