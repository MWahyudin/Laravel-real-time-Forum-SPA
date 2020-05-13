<template>
    <div>
        <toolbar></toolbar>
        <v-app>
            <v-content>
      <router-view></router-view>
            </v-content>
        </v-app>
        <appfooter v-if="!beranda"></appfooter>
    </div>
    
</template>


<script>
    import toolbar from './Toolbar'
    import appfooter from './AppFooter'
    import applogin from '../components/login/AppLogin'
    import appsignup from '../components/login/AppSignup'
    import appforum from '../components/menu/AppForum'
    export default {
        components: {
            toolbar,
            appfooter,
            applogin,
            appforum,
            appsignup
        },
    }

</script>

<style>
</style>