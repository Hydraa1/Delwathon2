<script setup>
import { reactive, onMounted } from 'vue';
import {useRouter} from 'vue-router'
import { initFlowbite } from 'flowbite'   
const state = reactive({
    modal:true,
    defaultModal:"defaultModal",
    data:""
})
const router = useRouter();
const routToStudentProfile = () =>{
    router.push('/admin/student/student-profile')
}
const showQuickProfile = (data) =>{
    state.modal = false     
    state.defaultModal = "defaultModal"
    state.data = data
}
onMounted(() => {
    initFlowbite();
})

</script>

<template>
    <div class="font container p-2 mx-auto md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="bg-[#003399] py-2 px-3 rounded-l-md text-white"> <i class="bx bx-user"></i></span> 
            <span class="text-[#003399] ml-3">Students Table</span>  
        </h3>
        
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button class="rounded-sm px-6 md:text-xs bg-[#003399] font-normal text-white">Filter</button>
                </div>
                <div class="p-2 py-4 border border-l-0 border-r-0 border-[#003399] mt-5 md:flex justify-center gap-2">
                     <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Branch *</label>
                        <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Branch</option>
                        <option value="US">Delwathon Group of School</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Class *</label>
                        <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Class</option>
                        <option value="jss1">Jss1</option>
                        <option value="jss2">Jss2</option>
                        <option value="jss3">Jss3</option>
                        <option value="DE">Germany</option>
                        </select>
                    </div>
                    <!--  -->
                    <div class="w-full">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Section *</label>
                        <select id="small" class="block w-full  px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Section</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

        <div class="shadow-md p-2 py-2 px-3 mt-4">
            <!-- group Buttons start here -->
            <div class="md:flex   justify-between mt-2">
                <div class="inline-flex rounded-md shadow-sm mt-4 text-sm" role="group" >
                    <button style="font-size:12px" type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 rounded-l-md">
                     Copy
                    </button>
    
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 ">
                    excel
                    </button>
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 ">
                        Column Visibility
                    </button>
    
                    <button style="font-size:12px"  type="button" class="inline-flex text-white bg-[#00A859] items-center px-4 py-2 text-sm font-normal border-t border-b border-gray-200 hover:bg-green-400 hover:text-white focus:z-10 focus:ring-green-700 focus:text-green-700 rounded-r-md">
                        PDF
                    </button>
                </div>
                <!--  -->
                <div class="rounded-md border-2 dark:border-[#A4A2A2] w-full md:w-[20rem] flex space-x-2 px-2 items-center mt-4">
                    <i class='bx bx-search text-sm mt-1'></i>
                    <input class="bg-transparent p-1 outline-none" placeholder="Search..." />
                </div>
               
            </div>
            <!--  -->
            <div class="mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border border-slate-300 md:p-2 ">S/N</th>
                            <th class="border border-slate-300 py-4 px-6">Branch Name</th>
                            <th class="border border-slate-300 py-4 px-6">Image</th>
                            <th class="border border-slate-300 py-4 px-6">Email</th>
                            <th class="border border-slate-300 py-4 px-6">Mobile No</th>
                            <th class="border border-slate-300 py-4 px-6">Address</th>
                            <th class="border border-slate-300 py-4 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody class="" style="font-size:12px">
                        <tr>
                            <td class="border border-slate-300 p-3"> <div class="text-center">12</div></td>
                            <td class="border border-slate-300 py-3 px-3"><div class="text-center">Delwathon limited</div></td>
                            <td class="border border-slate-300 p-3"> 
                                <div class="text-center"> <img src="../../../../assets/erin-lindford.jpeg" class="block mx-auto h-10 rounded-full" alt="">  </div>
                            </td>
                            <td class="border border-slate-300 py-3 px-3"><div class="text-center"> del@gamil.com</div></td>
                            <td class="border border-slate-300 py-3 px-3"><div class="text-center">09071841884</div></td>
                            <td class="border border-slate-300 py-3 px-3"><div class="text-center">Adlarawale</div></td>
                            <td class="border border-slate-300 py-3 px-3">
                                <div class="text-center space-x-1 flex justify-center">
                                    <button :data-modal-target="state.defaultModal" :data-modal-toggle="state.defaultModal" @click="showQuickProfile({data:'joshua'})" class="bg-green-500 p-2 rounded-lg h-8 text-white"><i class='bx bxs-dashboard'></i></button>
                                    <button @click="routToStudentProfile" class="bg-green-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-edit"></i></button>
                                    <button class="bg-red-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                      
                    </tbody>
                </table>
                <!--  -->
                <!--  Quick student profile modal-->
                <div :id="state.defaultModal" tabindex="-1" :aria-hidden="state.modal" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-lg max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                    Profile Quick View
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" :data-modal-hide="state.defaultModal">
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-6 space-y-5">
                                <div class="justify-start flex space-x-3">
                                    <img style=" border-width:5px" src="../../../../assets/erin-lindford.jpeg" class=" h-36 block rounded-full boder border-[#00A859]" alt="">
                                    <div class="mt-6 py-2 px-3">
                                        <h3 class="uppercase text-[#00A859]">Olawale,</h3>
                                        <h4 class="capitalize"> modupeola</h4>
                                        <p class="text-sm">Student/Nursing 1 - Blue</p>

                                    </div>
                                </div>
                                <div class="p-2">
                                    <div class="flex  justify-between space-x-1">
                                        <div class="text-sm font-medium">
                                           <strong>Registration Number:</strong>  <span>EERR6678</span>
                                        </div>
                                        <div class="text-sm font-medium">
                                           <strong>Department:</strong>  <span>EERR6678</span>
                                        </div>
                                    </div>
                                    <div class="flex  justify-between space-x-1 mt-2">
                                        <div class="text-sm font-medium">
                                           <strong>Admission Date:</strong>  <span>EERR6678</span>
                                        </div>
                                        <div class="text-sm font-medium">
                                           <strong>DateOFBirth:</strong>  <span>EERR6678</span>
                                        </div>
                                    </div>
                                    <!--  -->
                                    <div class="flex  justify-between  items-start space-x-1 mt-2">
                                        <div class="text-sm font-medium">
                                           <strong>Blood Group:</strong>  <span>A+</span>
                                        </div>
                                        <div class="text-sm font-medium">
                                           <strong>Genotype</strong>  <span>AA</span>
                                        </div>
                                    </div>
                                    <!--  -->
                                    <div class="font-medium text-sm mt-2">
                                        Email: olawale{{state.data.data}}@gmail.com
                                    </div>
                                    <div class="font-medium text-sm mt-2">
                                        Address: olawaleModupeola@gmail.com
                                    </div>
                                    <div class="font-medium text-sm mt-2">
                                        LGA: olawaleModupeola@gmail.com
                                    </div>
                                   
                                </div>
                            </div>
                            <!-- Modal footer -->
                            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button :data-modal-hide="state.defaultModal" type="button" class="text-white bg-[#00A859] hover:bg-[#00A859] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#00A859] dark:hover:bg-[rgb(64,180,126)] dark:focus:ring-blue-800"> <i class="fa fa-eye"></i> View Profile</button>
                                <button :data-modal-hide="state.defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal ends here -->
            </div>
        </div>
    </div>
</template>

