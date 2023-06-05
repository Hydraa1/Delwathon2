<script setup>
import { reactive } from "vue";
import VeeValInput from "../../../components/VeeValInput.vue"

const inputs = [
    
     {name: "firstname", label: "FirstName", type: "text", placeholder:"Firstname", required: true, w:'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'},
    {name: "lastname", label: "LastName", type: "text", placeholder:"Lastname", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]'}, 
	{
		name: "relationship", label: "Relationship", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12 [font-size:14px]', options: [
			{text: "Choose...", value: undefined},
			{text: "Father", value: '2'},
			{text: "Mother", value: '3'},
            {text: "Guardian", value: '3'},
		]
	},
]

const state = reactive({})
</script>

<template>
    <div class="container md:container mx-auto p-3 md:p-4">
         <div class="flex  justify-between items-center">
            <h2 class="font-medium text-sm uppercase mt-4 md:mt-0">Edit Profile</h2>
            <div class="[font-size:12px] mt-4 md:mt-0">Dashboard Employee Details</div>
        </div>
        <div class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti voluptatibus dolorum quia sed at quidem beatae. Molestiae, eius quae! Ducimus deserunt iste, culpa quis possimus rerum tenetur illo molestias?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius cupiditate excepturi, distinctio amet nisi nobis ipsum et quas soluta repudiandae sunt suscipit odit eveniet adipisci dignissimos in, aspernatur quaerat?
        </div>
    </div>
</template>