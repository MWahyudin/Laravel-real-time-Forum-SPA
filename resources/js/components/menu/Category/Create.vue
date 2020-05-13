<template>
    <v-container>
        
        <v-form @submit.prevent="create">
          
            <v-text-field v-model="form.name" label="Title" type="text" required></v-text-field>
            <v-btn type="submit" class="" outlined color="indigo">
                Create
            </v-btn>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: null,
                    successSave: false
                }
            }
        },
        created() {
            if (!User.loggedIn()) {
                this.$router.push({
                    name: 'login'
                })
            }
        },
        methods: {
            create() {
                axios.post('/api/category/',this.form)
                .then(() =>  Vue.swal({
                        icon: "success",
                        title: "Data saving successfully"
                    }),
                    //redirect after success
                     this.$router.push('/forum'))
                .catch(err => {
                    console.error(err); 
                })
            },
        },

    }

</script>

<style>

</style>
