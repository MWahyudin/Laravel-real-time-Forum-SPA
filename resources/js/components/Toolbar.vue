<template>
    <v-toolbar>
        <v-toolbar-title class="indigo--text">Indramayu Programmer Community</v-toolbar-title>

        <v-spacer></v-spacer>
        <div class="frm">
            <router-link to="/forum">
                <v-btn class="ma-2" outlined color="indigo">Forum</v-btn>
            </router-link>
            <router-link to="/pertanyaan">
                <v-btn class="ma-2" outlined color="indigo">Tanya pertanyaan</v-btn>
            </router-link>

            <router-link to="/kategori">
                <v-btn class="ma-2" outlined color="indigo">Kategori</v-btn>
            </router-link>
            <router-link to="/login">
                <v-btn class="ma-2" outlined color="indigo">Login</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>
</template>

</template>

<script>
    export default {}

</script>

<style>
a { 
    text-decoration: none;
}

</style>
