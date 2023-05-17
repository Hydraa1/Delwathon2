<script setup>

import {reactive} from 'vue'
import { useForm} from 'vee-validate'
import VeeValInput from '../../../components/VeeValInput.vue';
import { multipleEnrollSchema } from '../../../schemas';
const intruction = [
    {text:"Download the first sample file."},
    {text:"Open the downloaded 'csv' file and carefully fill the details of the student."},
    {text:'The date you are trying to enter the "Birthday" and "Admission Date" column make sure the date format is Y-m-d (month/day/year).'},
    {text:'Do not import the duplicate "Roll Number" And "Register No".'},
    {text:'For student "Gender" use Male, Female value.'},
    {text:'If enable Automatically Generate login details, leave the "username" and "password" columns blank.'},
    {text:'The Category name comes from another table, so for the "Category", enter Category ID (can be found on the Category page).'},
    {text:' If a parent is existing / if you want to use the same parent information for multiple students only enter the "GuardianUsername" and leave other columns blank.'},    
]
//this is responsible for the section 
const intselection =[
    {
		name:"session", label: "Session", type: "select", required: true, w:'w-full md:max-w-lg', options: [
			{text: "Choose...", value: undefined},
			{text: "2023-1-4", value: 'a'},
			{text: "2023-1-4", value: 'b'},
			{text: "2023-1-4", value: 'c'},
			{text: "2023-1-4", value: 'd'},
		]
        
	},
    {
		name:"branch", label: "Branch", type: "select", required: true, w:'w-full md:max-w-lg', options: [
        {text: "Choose...", value: undefined},
			{text: "2023-1-4", value: 'a'},
			{text: "2023-1-4", value: 'b'},
			{text: "2023-1-4", value: 'c'},
			{text: "2023-1-4", value: 'd'},
		]
        
	},
    {
		name:"dept", label: "Department", type: "select", required: true, w:'w-full md:max-w-lg', options: [
        {text: "Choose...", value: undefined},
			{text: "2023-1-4", value: 'a'},
			{text: "2023-1-4", value: 'b'},
			{text: "2023-1-4", value: 'c'},
			{text: "2023-1-4", value: 'd'},
		]
        
	},
    {
		name: "class", label: "Class", type: "select", required: true, w:'w-full md:max-w-lg', options: [
        {text: "Choose...", value: undefined},
			{text: "2023-1-4", value: 'a'},
			{text: "2023-1-4", value: 'b'},
			{text: "2023-1-4", value: 'c'},
			{text: "2023-1-4", value: 'd'},
		]
        
	},
    {
		name: "section", label: "Section", type: "select", required: true, w:'w-full md:max-w-lg', options: [
        {text: "Choose...", value: undefined},
			{text: "2023-1-4", value: 'a'},
			{text: "2023-1-4", value: 'b'},
			{text: "2023-1-4", value: 'c'},
			{text: "2023-1-4", value: 'd'},
		]
        
	},
    {name: "csvfile", label: "Select csv file", type: "file", placeholder: "choose file", required: true, w: 'w-full sm:max-w-lg'},
    
]

const { handleSubmit, errors } = useForm({
        validationSchema:multipleEnrollSchema
})
const submit = handleSubmit( values => {
    // alert("joshua")
	console.log(values, "joshua");
})
// 
const state  = reactive({
    data:intruction
}) 
</script>

<template>
    <div class="container font md:container mx-auto font p-3 md:p-7">
        <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Multiple Enroll</h2>
        <div class="shadow-md p-3 md:p-3 mt-4">
            <div class="flex justify-between">
                <div class=" text-sm text-green-600 font-medium mt-2"> 
                    Multiple Import
                 </div>
                 <div class="text-sm text-green-600 font-medium"> 
                    <button class="outline-none text-sm text-[#00A859] border border-[#00A859] p-2 hover:bg-[#00A859] hover:text-white rounded-sm">
                    <i class='bx bxs-download'></i> Download Multiple
                    </button>
                 </div>
            </div>
             <div class="border border-t-1 w-full border-green-600 mt-2"></div>
            <!--  -->
            <div class="p-3  bg-gray-100 opacity-0.2 mt-2 rounded-md">
                <h2 class="font-bold text-sm  mt-4 md:mt-0 text-green-800">Instruction</h2>
                <div class="text-xs m-2 text-green-800">
                    <p class="" v-for="(data,i) of state.data" :key="i">
                        <i class='bx bx-chevron-right mt-1'></i> 
                        {{ data.text }}
                    </p>
                   
                </div>
            </div>
            <!-- inputs -->
            <div class="md:flex md:flex-wrap  justify-center mb-2 mt-8 md:p-0 p-4 lg:gap-1 gap-2">
                <div v-for="(input, i ) of intselection" v-bind:key="i" class="" :class="input.w">
				    <VeeValInput class="w-full [font-size:13px] text-xs block" :placeholder="input.placeholder" :error="errors[input.name]" :name="input.name"
					:type="input.type" :label="input.label" :required="input.required" :options="input.options" />
			    </div>
            </div>
            <div class="flex justify-center py-2">
			<button class=" bg-[#00A859] text-white py-2 px-4 rounded" @click="submit">Import Now</button>
		</div>
        </div>
    </div>
</template>