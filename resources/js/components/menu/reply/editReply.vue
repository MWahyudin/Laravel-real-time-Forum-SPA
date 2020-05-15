<template>
 <v-form @submit.prevent="edit">
             <vue-simplemde v-model="form.body" ref="markdownEditor" class="mt-4" />

            <v-btn type="submit" class="" outlined color="indigo" @click="edit">
                Edit Reply ok
            </v-btn>
            <v-btn class="" outlined color="red" @click="cancel">
                Cancel
            </v-btn>

        </v-form>
</template>

<script>
export default {
    props: ['reply','question'],
  data() {
    return{
      form :{
        body: null,
      }
    }
  },
  created(){

  },
  mounted() {
    this.form = this.reply
  },
  methods :{
    edit(){
      alert('edited')
      
    },
    cancel(){
EventBus.$emit('cancelEditReply')

    }
  },

  
}
</script>

<style>

</style>