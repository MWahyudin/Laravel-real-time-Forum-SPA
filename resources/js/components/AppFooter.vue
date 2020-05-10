<template>
    <v-footer fixed="" dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
            <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="footertext white--text pt-0">
            Forum ini merupakan forum untuk komunitas programmer khusus kota Indramayu , diharapkan semua masyarakat Indramayu mempunyai 
            Kemampuan dalam bidang pemograman terutama kaum muda.
            Buka pintu ilmu pengetahuan dengan kunci pertanyaan. Yuk bikin forum yang nyaman dan bermanfaat bareng-bareng
            Jadikan komunitas ini terus berkambang sesuai perkembangan IT yang sangat pesat ini.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>IPC (Indramayu Programmer Community)</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }),
    }

</script>
<style scoped>
.footertext  {
    font-size: 1.2em;
}
</style>