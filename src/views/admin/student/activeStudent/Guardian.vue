<script setup>
import {reactive} from "vue"

const state = reactive({
         data:{
            name:"OLuwadmailare",
            mobile:"090786564534", 
            email:"olu@delwathon", 
            address:"fillin No 34 allride", 
            relationship:"Parent",
            nationality:"Nigerian",
            LGA:"North",
            state:"lagos"
        }
    })
</script>

<template>
    <div class="container mx-auto md:container">
      
        
        <div class="flex justify-center  ">
                <h4 class="font-medium text-[#00A859]">Personal Information</h4>
        </div>
        <div class=" grid grid-cols-1 md:grid-cols-2 justify-center  place-content-center mx-auto max-w-2xl shadow-md p-5  gap-3">
            <!--  -->
           <div class="">
                <h3 class="font-medium">FullName: <span class=" font-normal">Olarinjoshuausuu babalola</span></h3>
           </div>
           <div class="">
                <h3 class="font-medium">Mobile: <span class="font-normal">Olarin babalola</span></h3>
           </div>
           <!--  -->
           
           <!--  -->
           <div class="mt-2">
                <h3>Relationship: <span>Olarin babalola</span></h3>
           </div>
           <div class="mt-2">
                <h3  class="font-medium">Nationality: <span class="font-normal">Olarin babalola</span></h3>
           </div>
           <div class="mt-2">
                <h3  class="font-medium">Email: <span class="font-normal">{{ state.data.email }}</span></h3>
           </div>
           <div class="mt-2">
            <h3  class="font-medium">Address: <span class="font-normal">{{ state.data.address }}</span></h3>
           </div>
           <div class="mt-2">
                <h3 class="font-medium">LGA: <span class="font-normal">{{ state.data.LGA }}</span></h3>
           </div>
           <div class="mt-2">
                <h3 class="font-medium">State: <span class="font-normal">{{ state.data.state }}</span></h3>
           </div>
           <!--  -->
          
        </div>
    </div>
</template>