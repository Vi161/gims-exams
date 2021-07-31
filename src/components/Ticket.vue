<template>
    <div class="container">
        <div v-for="(el, i) in $store.state.questions" :key="i" class="d-flex flex-column">
            <el-card class="card-questions">
                <div class="d-flex flex-row ">
                    <div class="p-1 col1 border-end d-flex align-items-center justify-content-center">{{ el.num }}</div>
                    <div class="p-1 col2 border-end d-flex align-items-center justify-content-center">{{ el.question }}</div>
                    <div class="p-1 col3 border-end d-flex align-items-center justify-content-center">
                        <img :src="`/assets/img/${$route.params.type}/${$route.params.name}/${$route.params.name}_${$route.query.ticket}-${el.num}.jpeg`"
                             onerror="this.onerror=null;this.src='/assets/img/question.jpeg';"/>
                    </div>
                    <div class="p-3 col4 d-flex flex-column  align-items-start justify-content-center">
                        <a href="javascript:void(0);" v-for="(ans, k) in el.answers"
                           :key="k"
                           @click="selectAns(el.num, ans.id, el.true_answer)"
                           :class="{
                               // 'text-success': ans.id == el.true_answer ,
                               'text-success': (answers[i].sel_ans === ans.id) && (answers[i].sel_ans === el.true_answer)
                               || (answers[i].sel_ans && ans.id === el.true_answer) ,
                               'text-danger': (answers[i].sel_ans === ans.id) && (answers[i].sel_ans !== el.true_answer),
                               'pe-none': answers[i].sel_ans,
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
            answers: 'answers',
        }),
    },
    methods: {
        async selectAns(ans_num, ans, true_ans) {
            await this.$store.commit('setAnswersValue',{ans_num: ans_num, true_ans: ans == true_ans, sel_ans: ans});
        },
    }
}
</script>

<style>
    .card-questions .el-card__body {
        padding: 0;
    }
    .col1 {
        width: 5%;
    }
    .col2 {
        width: 30%;
    }
    .col3 {
        width: auto;
    }
    .col3 img {
        height: 200px;
        width: 230px;
        object-fit: contain;
    }
    .col4 {
        width: 46%;
    }


</style>
