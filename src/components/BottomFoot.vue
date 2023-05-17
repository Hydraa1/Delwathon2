<script setup>
import InsgramIcon from '../components/icons/InstagramIcon.vue'
import FacebookIcon from '../components/icons/FacebookIcon.vue'
import LinkedinIcon from '../components/icons/LinkedinIcon.vue'
import TwitterIcon from '../components/icons/TwitterIcon.vue'
const companyLinks = [
	{text: "About", link: ""},
	{text: "Jobs", link: ""},
	{text: "List your property", link: ""},
	{text: "Partnership", link: ""},
	{text: "Newsroom", link: ""},
	{text: "Partnership", link: ""},
]

const policyLinks = [
	{text: "Privacy policies", link: ""},
	{text: "Term of use", link: ""},
	{text: "Accessibility", link: ""},
	{text: "Copyright", link: ""},
]

const helpLinks = [
	{text: "Support", link: ""},
	{text: "Use a coupon", link: ""},
]
</script>
<template>
	<div class="app-x relative overflow-hidden mt-20">
		<svg class="absolute min-h-full top-5 inset-x-0" viewBox="0 0 1440 699" fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M523.467 1390.34C1101.41 1577.78 1215.88 1379.76 1626.78 1165.43C2033.58 673.901 1875.86 0.781007 974.163 0.681965C-173.69 0.555865 -186.492 13.3752 -306.217 382.533C-425.943 751.69 -54.4808 1202.9 523.467 1390.34Z"
				fill="url(#paint0_linear_112_126)" />
			<defs>
				<linearGradient id="paint0_linear_112_126" x1="-203.704" y1="242.666" x2="1876.89" y2="917.446"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#00A859" />
					<stop offset="1" stop-color="#003399" />
				</linearGradient>
			</defs>
		</svg>

		<div
			class="p-8 flex flex-wrap [box-shadow:.1rem_-.1rem_.5rem_#ccc] mt-5 bg-white rounded-2xl items-center relative overflow-hidden">
			<img src="../assets/logofilled.png" class="absolute hidden lg:block h-full -left-10" />
			<div class="relative mx-auto">
				<h3 class="text-4xl text-[#1B1B1B] font-semibold">One app to replace them all.</h3>
				<p class="text-[#4F4F4F]">All of your work in one place: Tasks, Docs, Chats, Goals & more</p>
			</div>
			<button
				className="py-2 my-2 ml-auto px-6 outline-none text-sm bg-ed-green text-white font-semibold rounded-md shadow-md">
				Free Forever
			</button>
		</div>

		<div class="flex flex-wrap gap-10 justify-between border-b border-white relative text-white py-20 lg:pr-10">
			<div class="w-full md:w-fit">
				<img src="../assets/delthon_solution_white.png" class="h-10" />
			</div>
			<div>
				<h3 class="text-2xl mb-3">Company</h3>
				<ul class="flex flex-col space-y-3">
					<li class="text-sm md:text-base" v-for="link of companyLinks" v-bind:key="link.text">{{ link.text }}
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-2xl mb-3">Policies</h3>
				<ul class="flex flex-col space-y-3">
					<li class="text-sm md:text-base" v-for="link of policyLinks" v-bind:key="link.text">{{ link.text }}</li>
				</ul>
			</div>
			<div>
				<h3 class="text-2xl mb-3">Help</h3>
				<ul class="flex flex-col space-y-3">
					<li class="text-sm md:text-base" v-for="link of helpLinks" v-bind:key="link.text">{{ link.text }}</li>
				</ul>
			</div>
		</div>

		<div class="flex gap-5 pt-5 pb-16 relative flex-wrap text-white justify-between">
			<p>&copy; 2023,Delwathon IT Solutions, All rights reserved. </p>
			<div class="flex gap-x-3 items-center">
				<FacebookIcon />
				<InsgramIcon />
				<LinkedinIcon />
				<TwitterIcon />
			</div>
		</div>

	</div>
</template>