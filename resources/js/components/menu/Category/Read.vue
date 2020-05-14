<template>
    <div v-if="category">
        <edit v-if="editing" :data=category></edit>
       
            <show v-else :data=question> </show>
    </div>
</template>

<script>
    import show from './show'
    import edit from './Edit'
    // import editquestion from './AppEditQuestion'

    export default {
        components: {
            show,
            edit
        },
        data() {
            return {
                category: null,
                editing: false
            }
        },
        created() {
            this.listen()
            this.getCategory()
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
            getCategory() {
                axios.get(`/api/category/${this.$route.params.slug}`)
                    .then(res => this.category = res.data.data)
                    .catch(err => {
                        console.error(err);
                    })
            }
        }
    }

</script>

<style>

</style>
