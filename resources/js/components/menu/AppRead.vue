<template>
    <div v-if="question">
        <editquestion v-if="editing" :data=question></editquestion>
       
            <showquestion v-else :data=question> </showquestion>
    </div>
</template>

<script>
    import showquestion from './AppShowQuestion'
    import editquestion from './EditQuestion'
    // import editquestion from './AppEditQuestion'

    export default {
        components: {
            showquestion,
            editquestion
        },
        data() {
            return {
                question: null,
                editing: false
            }
        },
        created() {
            this.listen()
            this.getQuestion()
        },
        methods: {
            listen() {
                EventBus.$on('startEditing', () => {
                    this.editing = true
                })
                EventBus.$on('cancelEditing', () => {
                    this.editing = false
                })
            },
            getQuestion() {
                axios.get(`/api/question/${this.$route.params.slug}`)
                    .then(res => this.question = res.data.data)
                    .catch(err => {
                        console.error(err);
                    })
            }
        }
    }

</script>

<style>

</style>
