<template>
    <showquestion :data=question>

    </showquestion>
</template>

<script>
import showquestion from './AppShowQuestion'
export default {
components:{
    showquestion
},
data(){
    return {
        question:{

        }
    }
},
created(){
    axios.get(`/api/question/${this.$route.params.slug}`)
    .then(res => this.question = res.data.data)
    .catch(err => {
        console.error(err); 
    })
}
}
</script>

<style>

</style>