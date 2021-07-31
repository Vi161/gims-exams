<template>
    <div class="container d-flex flex-column justify-content-center align-items-center ">
        <h2 class="mb-4">Выберите раздел:</h2>
        <el-select
            class="custom-select mb-4"
            v-model="area_value"
            filterable
            allow-create
            default-first-option
            placeholder="Район плавания">
            <el-option
                v-for="item in sailing_area"
                :key="item.value"
                :label="item.label"
                :disabled="item.disabled"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select
            class="custom-select"
            v-model="ships_value"
            filterable
            allow-create
            default-first-option
            placeholder="Типы судов">
            <el-option
                v-for="item in ships_types"
                :key="item.value"
                :label="item.label"
                :disabled="item.disabled"
                :value="item.value">
            </el-option>
        </el-select>
        <router-view></router-view>
    </div>
</template>

<script>
import { Select, Option } from 'element-ui';
import store from '../store'
import axios from 'axios'
import convert from '../convert/convert';

export default {
    name: 'Main',
    components: {
        [Select.name]: Select,
        [Option.name]: Option,
    },
    data: () => ({
        type: null,
        sailing_area: [
            {
                value: 'vvp',
                label: 'Билеты ВВП'
            },
            {
                value: 'vp',
                label: 'Билеты ВП',
                disabled: true
            },
            {
                value: 'mp',
                label: 'Билеты МП-до 20 миль',
                disabled: true
            },
            {
                value: 'mt',
                label: 'Билеты МТ-море территориальное'
            }
        ],
        ships_types: [
            {
                value: 'g',
                label: 'Билеты Г',
            },
            {
                value: 'm',
                label: 'Билеты М'
            },
            {
                value: 'p',
                label: 'Билеты П',
                disabled: true
            },
        ],
        area_value: null,
        ships_value: null
    }),
    mounted() {
        //конвертирование ответов в нужный json
        //convert();
    },
    watch: {
        area_value(val) {
            this.$store.commit('setTheme', this.sailing_area.find(el=>el.value == val).label);
            this.$router.push({ name: 'Questions', params: { type: 'sailing_area', name: val, label: this.sailing_area.find(el=>el.value == val).label } });
        },
        ships_value(val) {
            console.log(this.ships_types.find(el=>el.value == val), val);
            this.$store.commit('setTheme', this.ships_types.find(el=>el.value == val).label);
            this.$router.push({ name: 'Questions', params: { type: 'ships_types', name: val, label: this.ships_types.find(el=>el.value == val).label } });
        }
    }

}
</script>

<style coped>
    .custom-select {
        max-width: 200px;
    }
</style>
