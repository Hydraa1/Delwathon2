<script setup>
import { useForm} from 'vee-validate'
import { promotionSchema } from '../../../schemas'
import {reactive} from "vue"
const {handleSubmit, errors} = useForm({
    validationSchema:promotionSchema
})
const submit = handleSubmit(values =>{
    console.log(values,"joshau")
})

const studPromotionDetails = [
    {regNo:"DNPs-1001", name:"Chinaso Obina Nwaso", class:"Nursery 1", section:"Blue", percentage:"60.33%", promote_Section:"Green"},
    {regNo:"DNPs-1002", name:"Joseph Nwaso", class:"Nursery 2", section:"Blue", percentage:"60.33%", promote_Section:"Green"},
    {regNo:"DNPs-1003", name:"Stephen Obina Nwaso", class:"Nursery 2", section:"Blue", percentage:"60.33%", promote_Section:"Green"},
    {regNo:"DNPs-1004", name:"Alawo  Nwaso", class:"Nursery 2", section:"Blue", percentage:"60.33%", promote_Section:"Green"},
    {regNo:"DNPs-1005", name:"Chinaso Obina Amarachi", class:"Nursery 1", section:"Blue", percentage:"60.33%", promote_Section:"Green"}
]

const state = reactive({
    data: studPromotionDetails
})
</script>

<template>
    <div class="container md:container mx-auto font p-3 md:p-5">
        <h2 class="font-semibold text-sm uppercase mt-4 md:mt-0">Student Promotion</h2>
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button @click="submit" class="rounded-sm px-6 md:text-xs bg-[#003399] font-normal text-white">Filter</button>
                </div>
                <div class="p-2 py-4 border border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                     <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch *</label>
                        <select id="small" required v-model="branch" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Branch</option>
                        <option value="US">Delwathon Group of School</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        </select>
                        <!-- <span v-if="errors">{{ errors.branch }}</span> -->
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class *</label>
                        <select id="small" v-model="classs" :error="errors.classs" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Class</option>
                        <option value="jss1">Jss1</option>
                        <option value="jss2">Jss2</option>
                        
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section *</label>
                        <select id="small" required :error="errors.section" v-model="section" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Section</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">PassMark (%) *</label>
                        <select  :error="errors.passmark"  id="small" v-model="passmark" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Section</option>
                        <option value="10%">10%</option>
                        <option value="20%">20%</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

        <div class="shadow-sm mt-10 p-2 md:p-4">
            <div class="[font-size:12px]">STUDENT PROMOTION <b>DEWALTHON NURSERY & PRIMARY SCHOOL</b>  STUDENTS <b> NURSERY 1</b></div>
            <div class="border  border-t-2 border-[#003399] mt-1"></div>
            <div class="md:flex justify-center gap-1 mt-4">
                <div class="w-full">
                </div>
                <div class="w-full">
                    <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Promote To Section *</label>
                    <select id="small" required :error="errors.section" v-model="section" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Section</option>
                        <option value="2022-2023">2022-2023</option>
                        <option value="2021-2022">2021-2022</option>
                    </select>
                </div>
                <!--  -->
                <div class="w-full">
                    <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Promote To Class *</label>
                    <select id="small" required :error="errors.section" v-model="section" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Section</option>
                        <option value="Nursery 2">Nursery 2</option>
                        <option value="Nursery 3">Nursery 3</option>
                    </select>
                </div>
                <div class="w-full">
                </div>
            </div>
            <!-- tables -->
            
            <div class="relative overflow-x-auto sm:rounded-sm md:mt-5">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Reg No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Class
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Section
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Percentage
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Promote to Section
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                        v-for="(data, i) of state.data" :key="i">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ data.regNo }}
                            </th>
                            <td class="px-6 py-4">
                                {{ data.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.class }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.section }}
                            </td>
                            <td class="px-6 py-4">
                                {{ data.percentage }}
                            </td>
                            <td class="px-6 py-4">
                                <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option :value="data.promote_Section" selected>{{ data.promote_Section }}</option>
                                    <option value=""></option>
                                </select>
                            </td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>