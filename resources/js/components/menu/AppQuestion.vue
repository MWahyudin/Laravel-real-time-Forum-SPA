<template>
    <v-card color="#26c6da" class="ml-12 mt-6 mb-6" dark max-width="900">
        <v-card-title>
            <v-icon large left>
                mdi-comment-text
            </v-icon>
            <router-link :to="data.path">
                <span class="white--text title font-weight-light">{{ data.title }}</span>
            </router-link>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
            {{ data.body }}
        </v-card-text>

        <v-card-actions>
            <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                    <v-img class="elevation-6" src="http://127.0.0.1:8000/img/user.png">
                    </v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ data.user }}</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                    <v-icon class="mr-1">mdi-timer</v-icon>
                    <span class="subheading mr-2">{{ data.created_at }}</span>
                </v-row>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>
<script>
    export default {
        props: ['data'],
        created() {
            if (!User.loggedIn()) {
                this.$router.push({
                    name: 'beranda'
                })
            }
        },
    }

</script>

<style>
    a {
        text-decoration: none;
    }

    a:hover {
        color: black;
        text-decoration: none;
    }

</style>
