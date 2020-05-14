<template>
    <v-container>

        <v-form @submit.prevent="create" v-model="valid" ref="form">



            <v-text-field label="Category Name" v-model="form.name" :rules="nameRules" :counter="10" required>
            </v-text-field>
            <v-btn @click="update()" outlined color="success" v-if="editSlug">
                Update
            </v-btn>
            <v-btn @click="cancel" class="" outlined color="red" v-if="editSlug">
                Cancel
            </v-btn>
            <v-btn @click="create" outlined color="indigo" v-else>
                Create
            </v-btn>

        </v-form>
        <v-spacer></v-spacer>
        <v-card>
            <v-toolbar color="indigo" dark dense class="mt-4">
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>
            <v-list dense rounded>
                <v-list-item color="primary" v-for="(category,index) in categories" :key="category.id">
                    <v-list-item-action>
                        <v-btn icon small @click="edit(index)">
                            <v-icon color="success">mdi-pen</v-icon>
                        </v-btn>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-model="form.name">
                            {{ category.name }}
                        </v-list-item-title>

                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn icon small @click="destroy(category.slug)">
                            <v-icon color="red">mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
    //  import validationErrors from '../errors.vue'
    import edit from './Edit'
    import {
        extend
    } from 'vee-validate';
    import {
        required
    } from 'vee-validate/dist/rules';

    // Add the required rule
    extend('required', {
        ...required,
        message: 'This field is required'
    });
    export default {
        components: {
            edit
        },
        data() {
            // validationErrors: ''
            return {
                valid: false,
                name: 'Default',
                nameRules: [
                    (v) => !!v || 'Category name is required',
                    (v) => v && v.length >= 4 || 'Name must be more than 4 characters',
                    (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
                ],
                form: {
                    name: null,
                    slug: null,
                },
                categories: [],
                editSlug: null
            }
        },
        created() {
            this.getCategories()
            EventBus.$on('reload', () => {
                this.getCategories()
            })
            if (!User.loggedIn()) {
                this.$router.push({
                    name: 'login'
                })
            }
        },
        methods: {
            cancel() {
                this.form.name = ''
                this.editSlug = null
            },
            edit(index, slug) {
                this.form.slug = this.categories[index].slug
                this.form.name = this.categories[index].name
                this.editSlug = true
            },
            update() {
                console.log(this.form.slug);

                axios.patch(`/api/category/${this.form.slug}`, this.form)
                    .then(() => Vue.swal({
                            icon: "success",
                            title: "Data updating successfully"
                        },
                        EventBus.$emit("reload"),
                    ))
            },
            create() {
                if (this.$refs.form.validate()) {
                    axios.post('/api/category/', this.form)
                        // this.$http.post('/submit', {name: this.name});
                        .then(() => Vue.swal({
                                icon: "success",
                                title: "Data saving successfully"
                            },
                            EventBus.$emit("reload"),
                        ))
                    //redirect after success
                    // this.$router.push('/forum'))


                }
            },
            destroy(slug) {
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
                        axios.delete(`/api/category/${slug}`)
                        EventBus.$emit("reload");
                        Vue.swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            },
            getCategories() {
                axios.get('/api/category')
                    .then(res => this.categories = res.data.data)
            }
        },

    }

</script>

<style>

</style>
