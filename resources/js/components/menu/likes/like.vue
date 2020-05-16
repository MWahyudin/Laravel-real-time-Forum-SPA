<template>
  <v-btn icon > 
  <div class="black--text caption mr-2">
                    {{ count }}
                </div>
                    <v-icon @click="like" :color="color">mdi-heart</v-icon>
                </v-btn>
</template>

<script>
export default {
    props:['content'],
    data(){
        return {
            liked: this.content.liked,
            count: this.content.like_count
        }
    },
    computed: {
        color() {
           return this.liked ? "red" : "red lighten-4"
        }
    },
    methods: {
        like(){
            if(User.loggedIn()){
                this.liked ? this.decr() : this.incr()
                this.liked = !this.liked
            } 

        },
        incr(){
            // this.count ++
            axios.post(`/api/reply/${this.content.id}/like`)
            .then(res => this.count ++)
        
        },
        decr(){
            // this.count --
               axios.delete(`/api/reply/${this.content.id}/like`)
            .then(res => this.count --)
        }
    }

}
</script>

<style>

</style>