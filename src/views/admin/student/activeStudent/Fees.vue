<script setup>
import Swal from "sweetalert2"

const removeFee = ()=>{
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
</script>

<template>
   <div class="shadow-sm container-lg md:container md:p-2 md:py-2 md:px-3 mt-4">
            <div class=" text-sm text-green-600 font-medium"> 
               All Time Fees
            </div>
            <div class="border border-t-1 w-full border-green-600"></div>
            <!-- group Buttons start here -->
            <div class="md:flex justify-between mt-2">
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
            <!--  -->
            <div class="mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse   border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                            <th class="border px-6 py-4 border-slate-300 md:p-2">S/N</th>
                            <th class="border px-6 py-4 border-slate-300">Transaction Id</th>
                            <th class="border  px-6 py-4 border-slate-300">Session</th>
                            <th class="border px-6 py-4 border-slate-300">Date</th>
                            <th class="border px-6 py-4 border-slate-300">Type</th>
                            <th class="border px-6 py-4 border-slate-300">Description</th>
                            <th class="border px-6 py-4 border-slate-300">Amount</th>
                            <th class="border px-6 py-4 border-slate-300">Status</th>
                            <th class="border px-6 py-4 border-slate-300">Action</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px">
                        <tr>
                            <td class="border border-slate-300 p-3"> <div class="text-center">12</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">#Tud123</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center"> 2022-2023</div></td>
                            <td class="border border-slate-300 p-2"><div class="text-center">08 April djdj2023</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">Income</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">Tuition fee</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">#12000</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">Partpayment</div></td>
                            <td class="border border-slate-300 ...">
                                <div class="text-center space-x-1 flex justify-center">
                                    <button class="bg-green-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-edit"></i></button>
                                    <button class="bg-red-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                       <!--  -->
                       <tr>
                            <td class="border border-slate-300 p-3"> <div class="text-center">12</div></td>
                            <td class="border border-slate-300 "><div class="text-center">#Tud123</div></td>
                            <td class="border border-slate-300 "><div class="text-center"> 2022-2023</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">08 April 2023</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">Income</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">Tuition fee</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">#12000</div></td>
                            <td class="border border-slate-300 p-3"><div class="text-center">Partpayment</div></td>
                            <td class="border border-slate-300 p-3">
                                <div class="text-center space-x-1 flex justify-center">
                                    <button class="bg-green-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-edit"></i></button>
                                    <button @click="removeFee" class="bg-red-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                       
                    
                    </tbody>
                </table>
                <!--  -->
            </div>
        </div>
</template>

