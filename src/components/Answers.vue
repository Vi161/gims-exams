<template>
    <div class="d-flex">
        <div class="mx-1">
            <p
            v-for="(theme, theme_keys) in g">
                 <span
                     v-for="(val) in theme">
                     {{val.true_answer}}
                 </span>
            </p>
        </div>
        <div class="mx-1">
            <p
                v-for="(theme, theme_keys) in m">
                 <span
                     v-for="(val) in theme">
                     {{val.true_answer}}
                 </span>
            </p>
        </div>
        <div class="mx-1">
            <p
                v-for="(theme, theme_keys) in vvp">
                 <span
                     v-for="(val) in theme">
                     {{val.true_answer}}
                 </span>
            </p>
        </div>
        <div class="mx-1">
            <p
                v-for="(theme, theme_keys) in mt">
                 <span
                     v-for="(val) in theme">
                     {{val.true_answer}}
                 </span>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
    name: 'Answers',
    data: () => ({
        g: [],
        m: [],
        vvp: [],
        mt: []
    }),
    methods: {
        getTicket(type, theme, val, setTo) {
            axios
            .get(`/assets/tickets/${type}/${theme}/${theme}_${val}.json`)
            .then(response => {
                this[setTo].push(response.data.questions);
            })
            .catch(err => {
                console.log('error!!!!', err);
            })
        },
        loadTickets() {
            for (let i = 0; i < 15; i++) {
                this.getTicket('ships_types', 'g', i, 'g');
                this.getTicket('ships_types', 'm', i, 'm');
                this.getTicket('sailing_area', 'mt', i, 'mt');
                this.getTicket('sailing_area', 'vvp', i, 'vvp');
            }
        }
    },
    mounted() {
        this.loadTickets();
    }
}
</script>

<style scoped>
    p, span {
        font-size: 10px
    }
</style>
