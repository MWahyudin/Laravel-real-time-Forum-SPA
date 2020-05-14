<template>
    <v-card class="mx-auto mt-6 ml-4" max-width="300" tile>
        <v-list dense rounded>
            <v-subheader>List Category</v-subheader>
            <v-list-item-group color="primary">
                <v-list-item v-for="categori in categories" :key="categori.slug">
                    <v-list-item-content>
                        <v-list-item-title v-text="categori.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                categories: []
            }
        },
        created() {
            axios.get('/api/category/')
                .then(res => this.categories = res.data.data)
                .catch(err => {
                    console.error(err);
                })
        },
    }

</script>

<style>

</style>
