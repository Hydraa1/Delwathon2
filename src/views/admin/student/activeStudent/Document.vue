<script setup>
    const data =[
        {title:"profile picture", doc_type:"Image", filename:"dewathon234", file_ext:"jpg", date:"09 April 2023"},
        {title:"profile picture", doc_type:"Image", filename:"dewathon234", file_ext:"jpg", date:"09 April 2023"},
        {title:"profile picture", doc_type:"Image", filename:"dewathon234", file_ext:"jpg", date:"09 April 2023"},
        {title:"profile picture", doc_type:"Image", filename:"dewathon234", file_ext:"jpg", date:"09 April 2023"}
    ]
 </script>

<template>
    <div class="shadow-sm container-lg md:container md:p-2 md:py-2 md:px-3 mt-4">
             <div class=" text-sm text-green-600 font-medium"> 
                Documents
             </div>
             <div class="border border-t-1 w-full border-green-600"></div>
             <!-- group Buttons start here -->
             <div class="flex-wrap md:flex  justify-between mt-2">
                 <div class="inline-flex rounded-md shadow-sm mt-4" role="group">
                   
                 </div>
                 <!--  -->
                 <button class="outline-none text-sm text-[#00A859] border border-[#00A859] p-2 hover:bg-[#00A859] hover:text-white rounded-sm">
                    <i class='bx bxs-file-doc'></i> New document
                </button>
             </div>
             <!--table content start here  -->
             <div class="mt-5 mb-4 relative overflow-x-auto">
                 <table class="border-collapse   border table-auto border-slate-400 w-full p-6 ">
                     <thead class="" style="font-size:13px">
                         <tr class="p-2">
                             <th class="border px-6 py-4 border-slate-300 md:p-2">S/N</th>
                             <th class="border px-6 py-4 border-slate-300">Title</th>
                             <th class="border  px-6 py-4 border-slate-300">Doc Type</th>
                             <th class="border px-6 py-4 border-slate-300">Filename</th>
                             <th class="border px-6 py-4 border-slate-300">File Extention</th>
                             <th class="border px-6 py-4 border-slate-300">Upload date</th>
                             <th class="border px-6 py-4 border-slate-300">Action</th>
                         </tr>
                     </thead>
                     <tbody style="font-size:12px">
                         <tr v-for="(list, i) in data" :key="i">
                             <td class="border border-slate-300 p-3"> <div class="text-center">{{ i+1 }}</div></td>
                             <td class="border border-slate-300 p-3"><div class="text-center">{{ list.title }}</div></td>
                             <td class="border border-slate-300 p-3"><div class="text-center"> {{ list.doc_type }}</div></td>
                             <td class="border border-slate-300 p-2"><div class="text-center">{{ list.filename }}</div></td>
                             <td class="border border-slate-300 p-3"><div class="text-center">{{ list.file_ext }}</div></td>
                             <td class="border border-slate-300 p-3"><div class="text-center">{{ list.date }}</div></td>

                             <td class="border border-slate-300 ...">
                                 <div class="text-center space-x-1 flex justify-center">
                                     <button class="bg-green-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-edit"></i></button>
                                     <button class="bg-red-500 p-2 rounded-lg h-8 text-white"><i class="bx bx-trash"></i></button>
                                 </div>
                             </td>
                         </tr>
                        <!--  -->
                     </tbody>
                 </table>
                 <!--  -->
             </div>
         </div>
 </template>
 