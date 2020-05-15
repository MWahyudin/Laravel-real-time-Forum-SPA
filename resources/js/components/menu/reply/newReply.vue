<template>

    <v-card max-width="1400px" class="mx-auto mt-6">
        <v-form @submit.prevent="newReply">
            <vue-simplemde v-model="form.body" ref="markdownEditor" />



            <v-btn @click="newReply()" class="" outlined color="indigo">
                Reply
            </v-btn>
            <v-btn class="" outlined color="red" @click="cancel">
                Cancel
            </v-btn>
        </v-form>
    </v-card>


</template>

<script>
    export default {
        props: ['questionSlug'],
        data() {
            return {
                form: {
                    body: null,
                    // user_id: User.id() menggunakan fungsi otomatis di model saat creating,
                    // question_id: this.question.id

                }
            }
        },
        methods: {
            newReply() {
                axios.post(`/api/question/${this.questionSlug}/reply`, this.form)
                     .then(() => Vue.swal({
                                icon: "success",
                                title: "Data saving successfully"
                            },
                            EventBus.$emit("cancelReply"),
                             EventBus.$emit("reload"),
                        ))
            },
            cancel() {
                EventBus.$emit('cancelReply')

            }
        }

    }

</script>

<style>

</style>
