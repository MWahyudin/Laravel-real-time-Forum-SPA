<template>
    <v-card class="mt-8 mx-auto" max-width="1400">
        <v-card-text>
            <div>{{ data.user }}</div>
            <p class="display-1 text--primary">
                {{ data.title }}
            </p>
            <p>{{ data.created_at}}</p>
            <div class="text--primary" v-html="body">
            </div>
        </v-card-text>
        <v-card-actions v-if="own">
          
            <v-btn icon @click="edit">
                <v-icon color="success">mdi-pen</v-icon>
            </v-btn>
             <v-btn icon @click="destroy">
                <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
        </v-card-actions>
        <v-card-actions>
          
            <v-btn icon @click="newReply">
                <v-icon color="">mdi-comment-multiple-outline</v-icon>
            </v-btn>
             <v-btn icon @click="like">
                <v-icon color="primary">mdi-check</v-icon>
            </v-btn>
        </v-card-actions>
      <v-spacer></v-spacer>
       
                <v-row  justify="end">
                    <v-icon class="mb-2">mdi-timer</v-icon>
                    <span class="subheading mr-8 mb-2" dark>{{ data.reply_total }} komentar</span>
                </v-row>
    </v-card>
</template>
<script>
    export default {
        props: ['data'],
        data(){
            return {
                own : User.own(this.data.user_id)
            }
        },
         computed: {
            body(){
                return md.parse(this.data.body);
            }
        },
        methods: {
            destroy(){
                axios.delete(`/api/question/${this.data.slug}`)
                .then(res => this.$router.push({
                    name: "forum"
                }))
                .catch(err => {
                    console.error(err.response.data); 
                })
            },
            edit(){
                EventBus.$emit('startEditing')
            },
            newReply(){
                EventBus.$emit('newReply')

            },
            like(){

            },
           
        }

    }

</script>

<style>

</style>
