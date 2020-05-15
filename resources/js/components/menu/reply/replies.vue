<template>
  <div>
        <v-card max-width="1400px" class="mx-auto" v-if="!editing">
        <reply  v-for="reply in replies" :key="reply.id" :reply="reply" :question="question"></reply>
    </v-card>
    <v-card max-width="1400px" class="mx-auto" v-else>
        <editreply  v-for="reply in replies" :key="reply.id" :reply="reply" :question="question"></editreply>
    </v-card>
  </div>
</template>

<script>
import reply from "./reply";
import editreply from './editReply'
import md from 'marked'
export default {
    data(){
        return{
        editing: false
        }
    },
    components: { reply,editreply },
    props: ["replies","question"],
    created(){
        this.listen()
    },
    methods: {
        listen(){
            EventBus.$on('editreply', () => {
                this.editing = true
            })
        
         EventBus.$on('cancelEditReply', () => {
                this.editing = false
            })
        }
    },
};
</script>

<style></style>
