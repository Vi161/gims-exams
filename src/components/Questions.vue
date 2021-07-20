<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <router-link :to="{path: '/'}">На главную</router-link>
<!--            <h3>Раздел: {{this.$route.params}}</h3>-->
        </div>
        <button v-if="selected_ticked" @click="selected_ticked = !selected_ticked" class="mx-4">Выбрать другой билет</button>

        <div class="d-flex flex-column pt-4">
            <template v-if="!selected_ticked">
                <h2>Выберите билет</h2>
                <div class="d-flex flex-wrap align-items-center justify-content-center">
                    <a v-for="(el, key) in tickets"
                       :key="key"
                       @click="clickTicket(el)"
                       class="m-2 text-decoration-none">
                        <el-card shadow="hover">
                            {{ el.num }}
                        </el-card>
                    </a>
                </div>
            </template>
            <template v-else>
                <h2 >Билет {{selected_ticked}}</h2>
                <div class="d-flex flex-wrap align-items-center justify-content-center mb-2">
                    <div v-for="(el, key) in answers"
                         :key="key"
                         @click="clickTicket(el)"
                         :class="{
                           'bg-danger': el.true_ans === false,
                           'bg-success': el.true_ans,
                         }"
                         class="text-decoration-none border p-3">
                        {{el.num}}
                    </div>
                </div>
            </template>
            <ticket v-if="selected_ticked"></ticket>
        </div>
    </div>
</template>

<script>
import { Card } from 'element-ui'
import axios from 'axios'
import store from '../store'
import Ticket from './Ticket.vue'
import { mapState } from 'vuex'

export default {
    name: 'Questions',
    components: {
        Ticket,
        [Card.name]: Card,
    },
    data: () => ({
        tickets_num: 15,
        selected_ticked: null,
        questions: [],
    }),
    computed: {
        ...mapState({
            tickets: 'tickets',
            answers: 'answers',
        }),
    },
    methods: {
        clickTicket(val) {
            if (!this.selected_ticked) {
                this.selected_ticked = val.num;
                this.loadTicket(val.num);
                this.$router.push({ query: { ticket: val.num } });
            }
        },
        loadTicket(val) {
            const type = this.$route.params.type;
            const theme = this.$route.params.name;

            axios
                .get(`/assets/tickets/${type}/${theme}/${theme}_${val}.json`)
                .then(response => {
                    console.log('kakak', response.data);
                    store.commit('setSailingArea', response.data.questions);
                 })
                .catch(err => {
                    console.log('error!!!!', err);
                })
        }
    },
    mounted() {
        this.$store.commit('setTickets');
        this.$store.commit('setAnswers');
        if (this.$route.query.ticket) {
            this.selected_ticked = this.$route.query.ticket;
            this.loadTicket(this.$route.query.ticket)
        }
    },
    beforeDestroy() {
        this.selected_ticked = null;
    },

}
</script>

<style scoped>

</style>
