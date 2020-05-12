<template>
    <v-layout row wrap="">
        <v-flex xs8>
            <question v-for="question in questions" :key="question.id"
            :data=question></question>
        </v-flex>
        <sidebar></sidebar>
    </v-layout>

</template>

<script>
    import question from './AppQuestion'
    import sidebar from './AppSidebar'
    export default {
        data() {
            return {
                questions: {

                }
            }
        },
        components: {
            question,
            sidebar
        },
        created() {
                if (!User.loggedIn()) {
                this.$router.push({
                    name: 'login'
                })
            }
            axios({
                    method: 'get',
                    url: '/api/question/',
                }).then(res => this.questions = res.data.data)
                .catch(error => console.log(error.response.data))
        }
    }

</script>

<style>

</style>
