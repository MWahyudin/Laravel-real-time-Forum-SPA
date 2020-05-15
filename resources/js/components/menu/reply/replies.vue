<template>
    <v-card max-width="1400px" class="mx-auto">
        <reply v-for="reply in replies" :key="reply.id" :reply="reply" :question="question"></reply>
    </v-card>
</template>

<script>
import reply from "./reply";
export default {
    components: { reply },
    props: ["replies","question"]
};
</script>

<style></style>
