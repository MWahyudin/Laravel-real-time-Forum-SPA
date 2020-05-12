<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field v-model="form.title" label="Title" type="text" required></v-text-field>
           
                <v-autocomplete v-model="form.categori_id" :items="categories" 
                item-text="name"
                item-value="id"
                 dense label="Kategori"></v-autocomplete>
                   <vue-simplemde v-model="form.body" ref="markdownEditor" />
          

            <v-btn type="submit" class="" outlined color="indigo">
                Buat pertanyaan
            </v-btn>

        </v-form>
    </v-container>
</template>

<script>
// const jwt_token = localStorage.getItem('token')
// console.log(jwt_token);

    export default {
      
        data() {
            return {
                form: {
                    title: null,
                    categori_id: null,
                    body: null

                },
                categories:[

                ],
                errors:{

                }
            }
        },
        created() {
          axios.get('api/category')
          .then(res => this.categories = res.data.data)
          .catch(err => {
            console.error(err); 
          })
              if (!User.loggedIn()) {
                this.$router.push({
                    name: 'login'
                })
            }
        },
        methods: {
            create() {
                axios.post('/api/question',this.form)
                .then(res => {
                  console.log(res)
                })
                .catch(res => {
                    console.log(res.message);
                    
                })
                // .catch(error => (this.errors = error.response.data.error))
            }

        }
    }

</script>

<style>

</style>
