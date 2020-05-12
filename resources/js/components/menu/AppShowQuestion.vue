<template>
    <v-card class="mt-8 mx-auto" max-width="1400">
        <v-card-text>
            <div>{{ data.user }}</div>
            <p class="display-1 text--primary">
                {{ data.title }}
            </p>
            <p>{{ data.created_at}}</p>
            <div class="text--primary">
             {{data.body}}
            </div>
        </v-card-text>
      <v-spacer></v-spacer>
       
                <v-row  justify="end">
                    <v-icon class="mb-2">mdi-timer</v-icon>
                    <span class="subheading mr-8 mb-2">5 komentar</span>
                </v-row>
    </v-card>
</template>
<script>
    export default {
        props: ['data']

    }

</script>

<style>

</style>
