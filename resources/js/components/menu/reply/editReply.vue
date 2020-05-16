<template>
    <v-form @submit.prevent="edit">
        <vue-simplemde v-model="form.body" ref="markdownEditor" class="mt-4" />

        <v-btn class="" outlined color="indigo" @click="edit(questionSlug, reply.id)">
            Edit Reply ok
        </v-btn>
        <v-btn class="" outlined color="red" @click="cancel">
            Cancel
        </v-btn>

    </v-form>
</template>

<script>
    export default {
        props: ['reply', 'questionSlug'],
        data() {
            return {
                form: {
                    body: null,
                    created_at: null,
                    id: null,
                }
            }
        },
        created() {

        },
        mounted() {
            this.form = this.reply
        },
        methods: {
            edit(slug, id) {
          let data = this.form
          delete this.form.user;
           delete this.form.like_count;
            delete this.form.liked;
              Vue.swal({
                    title: 'Are you sure edit this reply?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'oke , update it!',
                }).then((result) => {
                    if (result.value) {
                        axios.patch(`/api/question/${slug}/reply/${id}`, data)
                        EventBus.$emit("cancelEditReply");
                        EventBus.$emit("reload");
                        Vue.swal(
                            'Updated!',
                            'Your reply has been edited.',
                            'success'
                        )
                    }
                }).catch(err => {
                    console.error(err);
                })
          
           
            },
            cancel() {
                EventBus.$emit('cancelEditReply')

            }
        },


    }

</script>

<style>

</style>
