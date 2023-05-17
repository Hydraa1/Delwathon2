<script setup>
import {ref, onMounted, reactive} from "vue"
import BranchModal from '../../components/modals/BranchModal.vue' //child component
import SideOverInput from '../../components/modals/SideOverInput.vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { initFlowbite } from 'flowbite'   
import Swal from 'sweetalert2'


const testing = ref({
    money: 5000,
})
const state = reactive({data:false})

const branchModal = () =>{
}

//slide over methods:
const showSlideOver = ()=>{
   state.data = true
}
// delete branch method
const removeBranch = ()=>{
  Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#00A859',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
  preConfirm:()=>{
    console.log("yes")
    // alert("yes")
  }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
       title: 'Deleted!',
       text: 'Your file has been deleted.',
       icon: 'success',
       confirmButtonColor:'#00A859'
    })
    }
  })
}
onMounted(() => {
    initFlowbite();
})    

</script>

<template>
    <div class="font container-lg md:container p-3 md:p-7 mx-auto">
        <h2 class="font-semibold text-sm uppercase mt-4 md:mt-0">Manage Branches</h2>

          <div class="shadow-md md:p-2 py-2 px-3 mt-4">
            <div class=""> 
                <button  data-modal-target="medium-modal" data-modal-toggle="medium-modal" @click="branchModal" style="font-size:13px" class="px-3 border border-[#00A859] hover:bg-[#00A859] hover:text-white py-2 rounded-sm text-green-700"> <i class="bx bx-home"></i> Add new Branches</button>
            </div>
            <!-- group Buttons start here -->
            <div class="flex-wrap  md:flex justify-between mt-2">
                <div class="inline-flex rounded-md shadow-sm mt-4" role="group">
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
                    <input class="bg-transparent p-1 outline-none text-sm" placeholder="Search..." />
                </div>
               
            </div>
            <!--  tables start here-->
            <div class="mt-5 md:mt-6 mb-4  relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border border-slate-300 md:p-2">S/N</th>
                            <th class="border border-slate-300 px-6 py-3 md:p-2">Branch Name</th>
                            <th class="border border-slate-300 px-6 py-4 md:p-2">Email</th>
                            <th class="border border-slate-300 px-6 py-4 md:p-2">Mobile No</th>
                            <th class="border border-slate-300 px-6 py-4 md:p-2">Address</th>
                            <th class="border border-slate-300 px-6 py-4 md:p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px">
                        <tr>
                            <td class="border border-slate-300 p-2"> <div class="text-center">12</div></td>
                            <td class="border border-slate-300 p-2"><div class="text-center">Delwathon limited</div></td>
                            <td class="border border-slate-300 p-2"><div class="text-center"> del@gamil.com</div></td>
                            <td class="border border-slate-300 p-2"><div class="text-center">09071841884</div></td>
                            <td class="border border-slate-300 p-2"><div class="text-center">Adlarawale</div></td>
                            <td class="border border-slate-300 p-2">
                                <div class="text-center space-x-1">
                                    <button class="bg-green-500 p-2 rounded-lg h-9 text-white"><i class="bx bx-edit"></i></button>
                                    <button class="bg-red-500 p-2 rounded-lg h-9 text-white"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                       
                        <tr>
                            <td class="border border-slate-300 p-3"> <div class="text-center">12</div></td>
                            <td class="border border-slate-300 ..."><div class="text-center">Delwathon limited</div></td>
                            <td class="border border-slate-300 ..."><div class="text-center"> del@gamil.com</div></td>
                            <td class="border border-slate-300 ..."><div class="text-center">09071841884</div></td>
                            <td class="border border-slate-300 ..."><div class="text-center">Adlarawale</div></td>
                            <td class="border border-slate-300 ...">
                                <div class="text-center space-x-1">
                                    <button @click="showSlideOver" class="bg-green-500 p-1 py-2 px-2 rounded-md shadow-sm shadow-gray-500 text-white">
                                      <i class="bx bx-edit"></i>
                                    </button>
                                    <button @click="removeBranch" class="bg-red-500 p-1 py-2 px-2 rounded-md shadow-sm shadow-gray-500 text-white">
                                      <i class="bx bx-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--  -->
            </div>
            <!-- table ends here -->
        </div>
        <!-- Modal component for addition of branch -->
        <BranchModal :testing="testing"></BranchModal>

        <!-- side over here -->
       <TransitionRoot :show="state.data">
        <Dialog as="div" class="relative z-10 dark:bg-gray-700" @close="open= false">
          <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>
          <!--  -->
          <div class="fixed inset-0 overflow-hidden ">
            <div class="absolute inset-0 overflow-hidden">
              <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                  <DialogPanel class="pointer-events-auto relative w-screen max-w-md dark:bg-gray-700">
                    <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                      <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button type="button" class="rounded-full h-6 w-6 bg-green-600 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="state.data = false">
                          <span class="sr-only">Close panel</span>
                          <span class="fa fa-close "></span>
                          <!-- <XMarkIcon class="h-6 w-6" aria-hidden="true" /> -->
                        </button>
                      </div>
                    </TransitionChild>
                    <div class="font flex h-full flex-col overflow-y-scroll dark:bg-gray-700  bg-white py-6 shadow-xl">
                      <div class="px-4 sm:px-6">
                        <DialogTitle class="text-base font-medium leading-6 text-gray-900 dark:text-white">Update</DialogTitle>
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                         <!-- The inputs is iniside sideoverInput -->
                        <SideOverInput/> 
                        <!--  -->
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      <!-- side over -->
    </div>
</template>

