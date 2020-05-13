<template>
    <v-layout row wrap>
        <v-flex xs8>
            <listquestion v-for="question in questions" :key="question.id" :data=question></listquestion>
        </v-flex>
        <v-flex>
            <sidebar></sidebar>
        </v-flex>
    </v-layout>

</template>

<script>
    import listquestion from './Question/ListQuestion'
    import sidebar from '../AppSidebar'
    export default {
        data() {
            return {
                questions: {

                }
            }
        },
        components: {
            listquestion,
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
