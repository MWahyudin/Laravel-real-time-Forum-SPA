<template>
    <v-card class="overflow-hidden">
        <v-app-bar :collapse="!collapseOnScroll" :collapse-on-scroll="collapseOnScroll" absolute color="white" dark
            scroll-target="#scrolling-techniques-6">

  <v-btn class="ma-2" outlined fab color="indigo">
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
            <v-toolbar-title class="indigo--text">Indramayu Programmer Community</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn class="ma-2" outlined color="indigo">Forum</v-btn>
            <v-btn class="ma-2" outlined color="indigo">Tanya pertanyaan</v-btn>
            <v-btn class="ma-2" outlined color="indigo">Kategori</v-btn>
            <v-btn class="ma-2" outlined color="indigo">Login</v-btn>
            


            <v-spacer></v-spacer>
            <v-checkbox v-model="collapseOnScroll" color="white" hide-details></v-checkbox>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-6" class="overflow-y-auto" max-height="950">
            <v-container style="height: 1300px;"></v-container>
        </v-sheet>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            collapseOnScroll: true,
        }),
    }

</script>

<style>
</style>
