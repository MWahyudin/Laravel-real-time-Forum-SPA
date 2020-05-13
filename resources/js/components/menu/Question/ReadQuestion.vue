<template>
    <div v-if="question">
        <editquestion v-if="editing" :data=question></editquestion>
       
            <show v-else :data=question> </show>
    </div>
</template>

<script>
    import show from './show'
    import editquestion from './Edit'
    // import editquestion from './AppEditQuestion'

    export default {
        components: {
            show,
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
