<script setup>
import { initFlowbite } from "flowbite"
import {onMounted} from "vue"
import Section from "./Section.vue"
import Classes from "./Classes.vue"
import Department from "./Department.vue"

onMounted(() => {
    initFlowbite()
})
</script>

<template>
    <div class="container-lg font md:container mx-auto p-2 md:p-4">
        <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Class and Section</h2>
        <!-- The three tabs -->
        <div class="mt-2 md:mt-6">
            <div class="mb-4 border-b shadow-sm md:shadow-sm  border-gray-200 dark:border-gray-700 ">
                <ul class="flex space-x-7 justify-start relative overflow-x-auto md:gap-5 gap-1 text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="mr-2 " role="presentation">
                        <button class="inline-block p-4 px-7 border-b-2 active:bg-[#00A859]  focus:bg-[#00A859] focus:text-white" id="section-tab" data-tabs-target="#section" type="button" role="tab" aria-controls="section" aria-selected="false">
                            <i class='bx bx-chevrons-down font-medium'></i> Section
                        </button>
                    </li>       
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 px-7 focus:px-7  border-b-2 focus:bg-[#00A859] focus:text-white  border-transparenthover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="class-tab" data-tabs-target="#class" type="button" role="tab" aria-controls="class" aria-selected="false">
                            <i class='bx bx-chevrons-down font-medium'></i> Class
                        </button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 border-b-2 border-transparent focus:bg-[#00A859] focus:text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dept-tab" data-tabs-target="#dept" type="button" role="tab" aria-controls="dept" aria-selected="false">
                            <i class='bx bx-chevrons-down font-medium'></i>
                            Department
                        </button>
                    </li>
                  
                </ul>
            </div>
        </div>
        <div class="p-3"> 
                <button  class="px-3 border border-[#00A859] [font-size:13px] hover:bg-[#00A859] hover:text-white py-2 rounded-sm text-green-700"> <i class="bx bx-home"></i> Add new Branches</button>
        </div>
        <!--  -->
        <div id="myTabContent">
            <div class="hidden p-1 md:p-4 rounded-lg  dark:bg-dark" id="section" role="tabpanel" aria-labelledby="section-tap">
              <Section/>
            </div>
            <div class="hidden p-1 md:p-4 rounded-lg  dark:bg-dark" id="class" role="tabpanel" aria-labelledby="class-tap">
                <Classes/>
            </div>
            <div class="hidden p-1 md:p-4 rounded-lg  dark:bg-dark" id="dept" role="tabpanel" aria-labelledby="dept-tap">
                <Department/>
            </div>
        </div>
    </div>
</template>