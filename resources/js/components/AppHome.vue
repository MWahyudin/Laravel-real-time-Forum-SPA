<template>
    <div>
        <toolbar></toolbar>
      <router-view></router-view>
        <appfooter></appfooter>

    </div>
</template>


<script>
    import toolbar from './Toolbar'
    import appfooter from './AppFooter'
    import applogin from '../components/login/AppLogin'
    import appforum from '../components/menu/AppForum'
    export default {
        components: {
            toolbar,
            appfooter,
            applogin,
            appforum
        }
    }

</script>

<style></style>
