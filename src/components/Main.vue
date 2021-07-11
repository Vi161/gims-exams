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
                v-for="item in sailing_area"
                :key="item.value"
                :label="item.label"
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
                label: 'Билеты ВП'
            },
            {
                value: 'mp',
                label: 'Билеты МП-до 20 миль'
            },
            {
                value: 'mt',
                label: 'Билеты МТ-море территориальное'
            }
        ],
        ships_types: [
            {
                value: 'g',
                label: 'Билеты Г'
            },
            {
                value: 'm',
                label: 'Билеты М'
            },
            {
                value: 'p',
                label: 'Билеты П'
            },
        ],
        area_value: null,
        ships_value: null
    }),
    mounted() {
    },
    watch: {
        area_value(val) {
            console.log(val);
            this.$router.push({ name: 'Questions', params: { type: 'sailing_area', name: val } });

        }
    }

}
</script>

<style coped>
    .custom-select {
        max-width: 200px;
    }
</style>
