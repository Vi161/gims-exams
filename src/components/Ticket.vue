<template>
    <div class="container">
        <div v-for="(el, i) in $store.state.questions" :key="i" class="d-flex flex-column">
            <el-card>
                <div class="d-flex flex-row ">
                    <div class="p-1 w-25 border d-flex align-items-center justify-content-center">{{ el.num }}</div>
                    <div class="p-1 w-25 border d-flex align-items-center justify-content-center">{{ el.question }}</div>
                    <div class="p-1 w-25 border d-flex align-items-center justify-content-center">{{ el.img }}</div>
                    <div class="p-1 d-flex flex-column w-25 border align-items-start justify-content-center">
                        <a href="javascript:void(0);" v-for="(ans, k) in el.answers"
                           :key="k"
                           @click="selectAns(el.num, ans.id, el.true_answer)"
                           :class="{
                               'text-success': (tickets[i].sel_ans === ans.id) && (tickets[i].sel_ans === el.true_answer)
                               || (tickets[i].sel_ans && ans.id === el.true_answer) ,
                               'text-danger': (tickets[i].sel_ans === ans.id) && (tickets[i].sel_ans !== el.true_answer),
                               'pe-none': tickets[i].sel_ans,
                           }"
                           class=" text-decoration-none text-start"><span>{{ans.id}}.  </span>{{ans.answer}}</a>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import { Card } from 'element-ui'
import axios from 'axios'
import store from '@/store'
import { mapState } from 'vuex'

export default {
    name: 'Ticket',
    components: {
        [Card.name]: Card,
    },
    computed: {
        ...mapState({
            tickets: 'tickets',
        }),
    },
    methods: {
        async selectAns(ans_num, ans, true_ans) {
            await this.$store.commit('setTicketsValue',{ans_num: ans_num, true_ans: ans == true_ans, sel_ans: ans});
            console.log(this.tickets[0]);
        },
    }
}
</script>

<style scoped>

</style>
