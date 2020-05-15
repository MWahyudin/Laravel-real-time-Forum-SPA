<template>
    <div v-if="question">
        <editquestion v-if="editing" :data=question></editquestion>
       
            <show v-else :data=question > </show>
    
        
                <replies  :replies="question.replies" :question="question" v-if="!newReply"></replies>
           <p v-if="!hideme"></p>
            <newreply v-if="hideme"  :questionSlug="question.slug"></newreply>
    </div>
</template>

<script>
    import show from './show'
    import editquestion from './Edit'

import replies from '../reply/replies'
import newreply from '../reply/newReply'

    // import editquestion from './AppEditQuestion'

    export default {
        components: {
            show,
            editquestion,
            replies,
            newreply,
          
        },
        data() {
            return {
                question: null,
                editing: false,
                newReply: false,
                editReply: false,
                hideme: false,
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
                    this.hideme = false
                    this.newReply = true
                })
                EventBus.$on('cancelEditing', () => {
                    this.editing = false
                    this.newReply = false
                    this.hideme = false

                })
                  EventBus.$on('newReply', () => {
                    this.newReply = true
                    this.hideme = true
                })
                 EventBus.$on('afterEdit', () => {
                    this.newReply = false
                    this.hideme = false
                    this.editing = false
                    this.editReply = false
                     this.getQuestion()
                })
                //     EventBus.$on('editReply', () => {
                //     this.editReply = true
                //     this.newReply = false
                //     this.editing = true
                // })
                   EventBus.$on('cancelReply', () => {
                    this.newReply = false
                    this.hideme = false
                })
                  EventBus.$on('reload', () => {
                   this.getQuestion()
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
