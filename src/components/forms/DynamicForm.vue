<!-- <template>
    <el-form :model="form" label-withd="120px">
        <div v-for="item in datas">
            <el-form-item label="Activity name">

            </el-form-item>
        </div>
    </el-form>
</template> -->

<template>
    <div v-if="isLoading">
        <p>Loading...</p>
    </div>
    <div v-else>
        <dynamic-form :form="form" />
    </div>
</template>

<script setup>
import { TextField, EmailField, NumberField } from '@asigloo/vue-dynamic-forms'
import { computed, toRefs, ref, onMounted, onBeforeMount  } from 'vue'
import ConvertToForm from '@/utils/ConvertJsonToForm.ts'
import axios from 'axios';

const data = ref([])
const isLoading = ref(true)
const form = computed(() => ({
    id: 'my-awesome-form',
    fields: {

    }
}));

onBeforeMount(async () => {

     getData()

})

const getData = async () => {

    var res = await axios.get('/fake_data/data.json')

    if (res) {
        data.value = res.data
    }

    data.value.forEach(e => {
        form.value.fields[e.FormLabel] = ConvertToForm(e.FormType, e)
    })

    isLoading.value = false
}

</script>