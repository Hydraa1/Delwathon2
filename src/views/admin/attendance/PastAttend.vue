<template>
    <div class="font container mx-auto p-3 md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="text-[#003399] text-lg ml-3 capitalize">students monthly attendance</span>  
        </h3>
        
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button type="submit" class="rounded-md shadow-md py-2 px-6 bg-[#003399] font-medium text-white hover:bg-blue-800 focus:text-[#003399] focus:bg-white border focus:border-[#003399]">Filter</button>
                </div>
                <div class="p-2 py-4 border border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                     <div class="w-full mt-3 md:mt-0 mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select @change="getoptiontext" v-model="select1" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Branch</option>
                            <option value="PS">Delwathon Nursery & Primary School</option>
                            <option value="SS">Delwathon Secondary School</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-6 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select v-if="select1 == '' " v-model="select2" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Class</option>
                            <option  class="text-red-600" disabled>No results found</option>
                        </select>
                        <select @change="getoptiontext2" v-if="select1 == 'PS' " v-model="select2" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Class</option>
                            <option value="NU1">Nusery 1</option>
                            <option value="NU2">Nusery 2</option>
                            <option value="PR1">Primary 1</option>
                            <option value="PR2">Primary 2</option>
                            <option value="PR3">Primary 3</option>
                            <option value="PR4">Primary 4</option>
                            <option value="PR5">Primary 5</option>
                        </select>
                        <select @change="getoptiontext2" v-if="select1 == 'SS' " v-model="select2" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Class</option>
                            <option value="jss1">Jss1</option>
                            <option value="jss2">Jss2</option>
                            <option value="jss3">Jss3</option>
                            <option value="sss1">sss1</option>
                            <option value="sss2">sss2</option>
                            <option value="sss3">sss3</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full mb-3 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <select v-if="showsec == 0 " v-model="select3" id="small" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Section</option>
                            <option  class="text-red-600" disabled>No results found</option>
                        </select>
                        <select @change="getoptiontext4" id="small" v-if="showsec == 1 " v-model="select3" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="" selected>Select Section</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        </select>
                        <select @change="getoptiontext4" id="small" v-if="showsec == 2 " v-model="select3" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option value="" selected>Select Section</option>
                            <option value="GS">Gansallo</option>
                            <option value="KT">kuti</option>
                            <option value="JS">Johnson</option>
                            <option value="school">School</option>
                            </select>
                    </div>

                    <!--  -->
                    

                    

                </div>
            </div>
        </div>

        <!-- table -->
        <div>
            <!-- <fb-date-picker v-model="selectedDate"></fb-date-picker> -->
            <input type="date" name="" id="">
        </div>
        <div>
            <!-- <date-picker v-model="selectedDate" format="MM/YYYY" mode="month"></date-picker> -->
        </div>
        
            
    </div>
</template>
<script lang="ts">

import {  ref } from 'vue'

import { defineComponent } from 'vue';
// import { FbDatePicker } from 'flowbite';





export default defineComponent({
    components: {
        // FbDatePicker
    },
    data() {
        return {
            selectedDate: null,
        };
    },
 setup(){
    // const selectedDate = ref(null)
    const select1 = ref('')
    const select2 = ref('')
    const select3 = ref('')

    const selecttext = ref('');
    const selecttext2 = ref('');
    const selecttext4 = ref('');
    const showsec = ref(0)
    const session = ref('2021-2022 SESSION')

    const statusbtn1 = ref(null)
    const statusbtn2 = ref(null)
    

    function getoptiontext(event) {
      const selectedIndex = event.target.selectedIndex;
      selecttext.value = event.target.options[selectedIndex].text;
    }
    function getoptiontext2(event) {
      const selectedIndex = event.target.selectedIndex;
      selecttext2.value = event.target.options[selectedIndex].text;
      if(select2.value == 'NU1' || select2.value == 'NU2' || select2.value == 'PR1' || select2.value == 'PR2' || select2.value == 'PR3' || select2.value == 'PR4' || select2.value == 'PR5'){
        this.showsec = ref(1)
      }else if(select2.value == 'jss1' || select2.value == 'jss2' || select2.value == 'jss3' || select2.value == 'sss1' || select2.value == 'sss2' || select2.value == 'sss3'){
        this.showsec = ref(2)
      }else{
        this.showsec = ref(0)
      }
    }
    function getoptiontext4(event) {
      const selectedIndex = event.target.selectedIndex;
      selecttext4.value = event.target.options[selectedIndex].text;
    }
    

    
    

    return{
        select1,
        select2,
        select3,
        selecttext,
        selecttext2,
        selecttext4,
        getoptiontext,
        getoptiontext2,
        getoptiontext4,
        showsec,
        session,
        statusbtn1,
        statusbtn2,
        
    }
 }   
})
</script>
<style>
@import 'flowbite/css/flowbite.css';
@import 'vue-datepicker/dist/vue-datepicker.css';

</style>