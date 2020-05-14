<template>
<v-card>

        <v-form @submit.prevent="create">

            <v-text-field v-model="form.name" name="title" label="Title" type="text" required></v-text-field>
            <v-btn type="submit" class="" outlined color="indigo">
                Create
            </v-btn>

        </v-form>
</v-card>
</template>

<script>
export default {
    props:['data']

}
</script>

<style>

</style>