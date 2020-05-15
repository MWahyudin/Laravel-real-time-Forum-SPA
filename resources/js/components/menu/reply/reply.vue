<template>
    <div class="mt-4 mb-2">
        <v-card>
            <v-card-title>
                <div class="headline mr-2">
                    {{ reply.user }}
                </div>
                <div class="caption mr-2">
                    saidon
                </div>
                <div class="subtitle-2">
                    {{ reply.created_at }}
                </div>
            </v-card-title>
            <v-card-text v-if="!editReply" v-html="body">
                  <vue-simplemde v-if="editReply" v-model="form.body" v-html="reply.body" ref="markdownEditor" />
            </v-card-text>
            <v-card-actions v-if="own">
                <v-btn icon>
                    <v-icon color="primary" @click="edit">mdi-pen</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon color="red" @click="destroy(question.slug, reply.id)">mdi-delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import md from 'marked'
    export default {
        props: ['reply','question'],
        data(){
            return{
                editReply: false
            }
        },
        // data(){
        // return{
        //     own: User.own(this.reply.user_id)
        // } 
        // },
        created() {
            this.listen()
        },
        computed: {
            own() {
                return User.own(this.reply.user_id)
            },
            body(){
            return md.parse(this.reply.body);
            }
        },
        methods: {
            destroy(slug, id) {
                  Vue.swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                }).then((result) => {
                    if (result.value) {
                       axios.delete(`/api/question/${slug}/reply/${id}`)
                        EventBus.$emit("reload");
                        Vue.swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                }) .catch(err => {
                   console.error(err); 
               })

            //    axios.delete(`/api/question/${slug}/reply/${id}`)
            //    .then(res => {
            //        console.log(res)
            //    })
              
            },
            edit(){
                EventBus.$emit("editreply")
                console.log(this.reply.body)
            },
            listen(){
                EventBus.$on("editReply", () => {
                      this.editReply = true;
                })
                  
            }
        },
    }

</script>

<style>

</style>
