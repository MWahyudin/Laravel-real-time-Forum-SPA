<template>
 <v-container>
        <v-form @submit.prevent="edit">
            <v-text-field v-model="form.title" label="Title" type="text" required></v-text-field>
            <v-autocomplete v-model="form.category_id" :items="categories" item-text="name" item-value="id" dense
                label="Kategori"></v-autocomplete>
            <vue-simplemde v-model="form.body" ref="markdownEditor" />

            <v-btn type="submit" class="" outlined color="indigo" @click="edit">
                Edit pertanyaan
            </v-btn>
            <v-btn class="" outlined color="red" @click="cancel">
                Cancel
            </v-btn>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        props:['data'],
        data() {
            return {
                form: {
                    title: null,
                    categori_id: null,
                    body: null
                },
                categories: []
            }
        },
        created() {
            this.getCategories()
            
        },
        mounted() {
              this.form = this.data
        },
        methods: {
            edit() {
                axios.patch(`/api/question/${this.data.slug}`, this.form)
                    .then(EventBus.$emit('afterEdit'))
                    .catch(err => {
                        console.error(err);
                    })
            },
            getCategories() {
                const url = '/api/category'
                axios.get(url)
                    .then(res => this.categories = res.data.data)
                    .catch(err => {
                        console.error(err);
                    })
            },
            cancel(){
                 EventBus.$emit('cancelEditing')
            }
        }
    };

</script>

<style></style>
