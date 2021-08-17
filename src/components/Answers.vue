<template>
    <div class="d-flex">
        <div class="mx-1">
            <p
            v-for="(theme, theme_keys) in g"
            :key="theme_keys">
                <span
                     v-for="(val, k) in theme"
                     :key="k">
                     {{symbolConvert(val.true_answer)}}
                 </span>
            </p>
        </div>
        <div class="mx-1">
            <p
                v-for="(theme, theme_keys) in m"
                :key="theme_keys">
                 <span
                     v-for="(val, k) in theme"
                     :key="k"
                 >
                     {{symbolConvert(val.true_answer)}}
                 </span>
            </p>
        </div>
        <div class="mx-1">
            <p
                v-for="(theme, theme_keys) in vvp"
                :key="theme_keys">
                 <span
                     v-for="(val, k) in theme"
                     :key="k">
                     {{symbolConvert(val.true_answer)}}
                 </span>
            </p>
        </div>
        <div class="mx-1">
            <p
                v-for="(theme, theme_keys) in mt"
                :key="theme_keys">
                <span
                     v-for="(val, k) in theme"
                     :key="k">
                     {{symbolConvert(val.true_answer)}}
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
        async getTicket(type, theme, val, setTo) {
            await axios
            .get(`/assets/tickets/${type}/${theme}/${theme}_${val}.json`)
            .then(response => {
                this[setTo].push(response.data.questions);
                console.log(val)
            })
            .catch(err => {
                console.log('error!!!!', err);
            })
        },
        async loadTickets() {
            for (let i = 1; i <= 15; i++) {
                await this.getTicket('ships_types', 'g', i, 'g');
                await this.getTicket('ships_types', 'm', i, 'm');
                await this.getTicket('sailing_area', 'mt', i, 'mt');
                await this.getTicket('sailing_area', 'vvp', i, 'vvp');
            }
        },
        symbolConvert(val) {
            let res = ' ';
            if (val == 1) {
                res = '▲'
            }
            if (val == 2) {
                res = '►'
            }
            if (val == 3) {
                res = '▼'
            }
            if (val == 4) {
                res = '◄'
            }
            return res;
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
