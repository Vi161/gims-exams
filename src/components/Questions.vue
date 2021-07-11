<template>
    <div class="container">
        <router-link :to="{path: '/'}">На главную</router-link>
        <button v-if="selected_ticked" @click="selected_ticked = !selected_ticked" class="mx-4">Выбрать другой билет</button>
        <div class="d-flex flex-column pt-4">
            <h2 v-if="!selected_ticked">Выберите билет</h2>
            <h2 v-else>Билет</h2>
            <div class="d-flex flex-wrap align-items-center justify-content-center">
                <a v-for="(el, key) in tickets"
                   :key="key"
                   @click="clickTicket(el)"
                   class="m-2 text-decoration-none">
                    <el-card shadow="hover">
                        {{ el }}
                    </el-card>
                </a>
            </div>
            <ticket v-if="selected_ticked"></ticket>
        </div>
    </div>
</template>

<script>
import { Card } from 'element-ui'
import axios from 'axios'
import store from '../store'
import Ticket from './Ticket.vue'

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
        tickets() {
            let arr = [];
            if (!this.selected_ticked) {
                for (let i = 0; i < this.tickets_num; i++) {
                    arr.push(i+1);
                }
            } else arr = [this.selected_ticked];

            return arr;
        },
    },
    methods: {
        clickTicket(val) {
            if (!this.selected_ticked) {
                this.selected_ticked = val;
                this.loadTicket(1);
            }
        },
        loadTicket(val) {
            const type = this.$route.params.type;
            const theme = this.$route.params.name;
            console.log(this.$route.params.name);
            axios.get(`/public/assets/tickets/${type}/${theme}/${theme}_${val}.json`)
            .then(response => {
                console.log(response.data);
                store.commit('setSailingArea', response.data.questions);
            }).catch(err => {
                console.log('error!!!!', err);
            })
        }
    },
    beforeDestroy() {
        this.selected_ticked = null;
    },

}
</script>

<style scoped>

</style>
