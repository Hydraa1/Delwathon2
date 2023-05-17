<template>
    <div class="mainnav">
        <!-- nav -->        
        <nav class="md:px-14 w-full z-20 fixed inset-x-0 transition-all duration-500
        border-gray-200 dark:bg-gray-900 
        dark:border-gray-700 "
        :class="!top ? 'bg-[#ffffffd8] shadow backdrop-blur-md py-2' : 'py-0'">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="../assets/delthon_solution.png" class="w-40 mr-7 md:-ml-14" alt="delthon Logo" />
            </a>
            <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto " id="navbar-dropdown">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:-mr-10 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-ed-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ed-green md:p-0 md:w-auto 
                    dark:text-white md:dark:hover:text-ed-green dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Products 
                    <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar" class="z-10 hidden font-normal bg-green-200 divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-ed-dark dark:text-ed-dark md:text-base" aria-labelledby="dropdownLargeButton">
                            <li>
                            <router-link to="/admin" class="block text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                Eduthon</router-link>
                            </li>
                            <li>
                            <router-link to="/" class="block text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                Carthon</router-link>
                            </li>
                            <li>
                            <router-link to="/" class="block text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-left md:px-10">
                                Innthon</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="mt-1 md:mt-0">
                    <router-link to="/" class="block py-2 pl-3 pr-4 
                    text-ed-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ed-green md:p-0 dark:text-white md:dark:hover:text-ed-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Solution</router-link>
                </li>
                <li class="mt-5 ml-2 mb-2 md:mt-0 md:mb-0">
                    <router-link to="/signup"
					className="border-ed-green border py-2 px-5 outline-none text-xs bg-white text-ed-green font-semibold rounded shadow-md hover:text-white hover:bg-ed-green">
					Sign up
				    </router-link>
                </li>
                <li class="mt-5 ml-2 mb-4 md:mt-0 md:mb-0">
                    <router-link to="/login"
					className="py-2 px-6 outline-none text-xs border-ed-green border bg-ed-green text-white font-semibold rounded shadow-md hover:bg-white hover:text-ed-green">
					Sign In
				    </router-link>
                </li>
                
                </ul>
            </div>
            </div>
        </nav>
        <!--  -->
    </div>
</template>

<script lang="ts">
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';

export default {
    setup() {
        let top = ref(true);
        const handleScroll = () => {
            if (window.pageYOffset > 10) {
                if (top.value) top.value = false
            } else {
                if (!top.value) top.value = true
            }
        }
        onBeforeMount(() => {
            window.addEventListener('scroll', handleScroll)
        })

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll)
        })

        return{top}
    }
}
</script>
<style>
    
</style>