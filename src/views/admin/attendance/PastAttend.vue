<template>
    <div class="font container mx-auto p-3 md:container md:p-7">
        <h3 class="font-medium mt-4">
            <span class="text-[#003399] text-lg ml-3 capitalize">students monthly attendance</span>  
        </h3>
        
        <div class="mt-4">
            <div class="shadow-md  p-5">
                <div class="flex justify-between">
                    <h4 class="text-gray-700 font-medium p-2">Filter Student</h4>
                    <button type="submit" @click="showfills" class="rounded-md shadow-md py-2 px-6 bg-[#003399] font-medium text-white hover:bg-blue-800 focus:text-[#003399] focus:bg-white border focus:border-[#003399]">Filter</button>
                </div>
                <span v-if="showerror == 1" class="text-[12px] font-bold text-red-500 tracking-wide pl-2">Please fill all input field***</span>
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
                        <select @change="getoptiontext4" id="small" v-if="showsec== 1 " v-model="select3" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
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
                    <div class="w-full mb-3 md:mb-0">
                        <label for="small" class="block mb-2 text-sm font-nomal text-gray-900 dark:text-white">Month <span class="text-red-600 font font-extrabold text-1xl">*</span></label>
                        <input type="month" name="" @input="formatMonth" @change="getmonth" v-model="monthselect" id="month-input" class="block w-full  px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>

                </div>
            </div>
        </div>

        <!-- table -->

        <div v-if="showbody == 1" class="shadow-md p-2 py-2 px-3 mt-8 ">
            <h5 class="mt-3 font font-extralight text-black-300 text-md"><i class="fa-solid fa-magnifying-glass text-sm text-gray-400"></i> Attendance for <span class="font font-bold text-black text-1xl"> {{ selecttext }}</span> students <span class="font font-bold text-black text-1xl">{{ selecttext2}}-</span><span class="font font-bold text-black text-1xl">{{ selecttext4}}</span> for the month of <span class="font font-bold text-black text-1xl">{{ formattedMonth }}</span></h5>
            <hr class="border-b-[3px] border-[#003399] my-4">
            <!-- buttons -->

            

            <!--  -->
            <div class=" mt-5 mb-4 relative overflow-x-auto">
                <table class="border-collapse border table-auto border-slate-400 w-full p-6 ">
                    <thead class="" style="font-size:13px">
                        <tr class="p-2">
                        
                            <th class="border border-slate-300 py-2 px-2">Students/Days</th>
                            <th v-for="i in count" :key="i" class="border border-slate-300 py-2 px-2">
                                {{ i }}
                            </th>
                            
                            <th class="border border-slate-300 py-2 px-2 flex place-content-center">
                                <div class="border-2 border-gray-300 mr-1 rounded-xl bg-green-500 px-2 py-2"></div>
                                <div class="border-2 border-gray-300 mr-1 rounded-xl bg-red-500 px-2 py-2"></div>
                                <div class="border-2 border-gray-300 rounded-xl bg-yellow-500 px-2 py-2"></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody style="font-size:12px;">
                        <tr>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center font-medium">Chinonso Obinna Nwosu</div></td>
                            <td v-for="i in count" :key="i" class="border border-slate-300 px-1 py-3 text-center">
                                {{ i }}
                            </td>
                            <td class="border border-slate-300 px-1 py-3"><div class="text-center text-black font-medium text-[15px]">
                                {{ 0 }} | {{ 1 }} | {{ 0 }}
                            </div></td>
                        </tr>
                        <!--  -->
                        <tr>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center font-medium">Chinonso Obinna Nwosu</div></td>
                            <td v-for="i in count" :key="i" class="border border-slate-300 px-1 py-3 text-center">
                                {{ i }}
                            </td>
                            <td class="border border-slate-300 px-1 py-3"><div class="text-center text-black font-medium text-[15px]">
                                {{ 0 }} | {{ 1 }} | {{ 0 }}
                            </div></td>
                        </tr>
                        <!--  -->
                        <tr>
                            <td class="border border-slate-300 px-2 py-3"> <div class="text-center font-medium">Chinonso Obinna Nwosu</div></td>
                            <td v-for="i in count" :key="i" class="border border-slate-300 px-1 py-3 text-center">
                                {{ i }}
                            </td>
                            <td class="border border-slate-300 px-1 py-3"><div class="text-center text-black font-medium text-[15px]">
                                {{ 0 }} | {{ 1 }} | {{ 0 }}
                            </div></td>
                        </tr>
                    </tbody>
                </table>
                <!--  -->
                
            </div>
        </div>
    </div>
</template>
<script>


import { ref } from 'vue'

export default {
    setup(){

    const count = ref(null)
    
    const select1 = ref('')
    const select2 = ref('')
    const select3 = ref('')

    const selecttext = ref('');
    const selecttext2 = ref('');
    const selecttext4 = ref('');
    const showsec = ref(0)
    
    const monthselect = ref('')
    
    const formattedMonth = ref('');
    const showbody = ref(null)
    const showerror = ref(null)

    function formatMonth() {
        const [year, month] = monthselect.value.split('-');
      const date = new Date(Number(year), Number(month) - 1);
      const monthName = date.toLocaleString('default', { month: 'long' });
      formattedMonth.value = `${monthName} ${year}`;
      const lastDay = new Date(year, month, 0).getDate();
      count.value = lastDay;
    };

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
        this.showsec =ref(0)
      }
    }
    function getoptiontext4(event) {
      const selectedIndex = event.target.selectedIndex;
      selecttext4.value = event.target.options[selectedIndex].text;
      console.log(monthselect.value)
    }

    function showfills(){
    if(select1.value == '' && select2.value == '' && select3.value == ''){
        showbody.value = null
        showerror.value = 1
    }else{
        showbody.value = 1
        showerror.value = null
    }
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
        monthselect,
        count,
        formatMonth,
        formattedMonth,
        showbody,
        showerror,
        showfills
        
    }
    }
}

</script>
