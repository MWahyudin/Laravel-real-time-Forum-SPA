<template>
  <h1>Ini Kategori</h1>
</template>

<script>
export default {
  created(){
            if(!User.loggedIn()){
                this.$router.push({name: 'login'})
            }
        },

}
</script>

<style>

</style>