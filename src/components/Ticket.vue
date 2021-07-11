<template>
    <div class="container">
        <div v-for="(el, i) in $store.state.questions" :key="i" class="d-flex flex-column">
            <el-card>
                <div class="d-flex flex-row ">
                    <div class="p-1 w-25 border d-flex align-items-center justify-content-center">{{ el.num }}</div>
                    <div class="p-1 w-25 border d-flex align-items-center justify-content-center">{{ el.question }}</div>
                    <div class="p-1 w-25 border d-flex align-items-center justify-content-center">{{ el.img }}</div>
                    <div class="p-1 d-flex flex-column w-25 border align-items-start justify-content-center">
                        <a href="avascript:void(0);" v-for="(ans, k) in el.answers"
                           :key="k"
                           @click="selectAns(ans.id, el.true_answer)"
                           class="text-decoration-none text-start"><span>{{ans.id}}.  </span>{{ans.answer}}</a>
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

export default {
    name: 'Ticket',
    components: {
        [Card.name]: Card,
    },
    methods: {
        selectAns(ans, true_ns) {
            console.log(ans, true_ns);
        }
    }
}
</script>

<style scoped>

</style>
