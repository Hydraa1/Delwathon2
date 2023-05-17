<script setup>
import {useForm} from 'vee-validate';
import VeeValInput from '../../../components/VeeValInput.vue';
import AcademicsIcon from '../../../components/icons/AcademicsIcon.vue'
import StudentsIcon from '../../../components/icons/StudentsIcon.vue'
import CredentialsIcon from '../../../components/icons/CredentialsIcon.vue'
import ImageIcon from '../../../components/icons/ImageIcon.vue'
import GuardiansIcon from '../../../components/icons/GuardiansIcon.vue'
import {enrollStudentSchema} from '../../../schemas'
import {nigeriaStatesList} from '../../../services'

const academicInputs = [
	{
		name: "academicSession", label: "Academic Session", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-3/12', options: [
			{text: "Choose...", value: undefined},
			{text: "Choose...", value: '2'},
			{text: "Choose...", value: '3'},
		]
	},
	{name: "registerNo", label: "Register No", type: "text", placeholder: "DEL/1001/2023", required: true, w: 'w-full sm:w-1/2 lg:w-3/12'},
	{name: "rollNo", label: "Roll No", type: "text", placeholder: "DEL/1001/2023", required: true, w: 'w-full sm:w-1/2 lg:w-3/12'},
	{name: "enrollDate", label: "Enroll Date", type: "date", required: true, w: 'w-full sm:w-1/2 lg:w-3/12'},
	{
		name: "department", label: "Department", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12', options: [
			{text: "Choose...", value: undefined},
			{text: "Choose...", value: '2'},
			{text: "Choose...", value: '3'},
		]
	},
	{
		name: "class", label: "Class", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12', options: [
			{text: "Choose...", value: undefined},
			{text: "Choose...", value: '2'},
			{text: "Choose...", value: '3'},
		]
	},
	{
		name: "selection", label: "Selection", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-4/12', options: [
			{text: "Choose...", value: undefined},
			{text: "Choose...", value: '2'},
			{text: "Choose...", value: '3'},
		]
	},
]

const studentInputsA = [
	{name: "firstname", label: "First Name", type: "text", placeholder: "First name", required: true, w: 'w-full sm:w-1/2'},
	{name: "lastname", label: "Last Name", type: "text", placeholder: "Last name", required: true, w: 'w-full sm:w-1/2'},
	{name: "othername", label: "Other Name", type: "text", placeholder: "Other name", required: true, w: 'w-full sm:w-1/2'},
	{
		name: "gender", label: "Gender", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{text: "Choose...", value: undefined},
			{text: "Male", value: '2'},
			{text: "Female", value: '3'},
		]
	},
	{name: "dob", label: "Date Of Birth", type: "date", required: true, w: 'w-full sm:w-1/2'},
	{
		name: "gender", label: "Gender", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{text: "Choose...", value: undefined},
			{text: "Male", value: '2'},
			{text: "Female", value: '3'},
		]
	},
	{
		name: "genotype", label: "Genotype", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{text: "Choose...", value: undefined},
			{text: "Choose...", value: '2'},
			{text: "Choose...", value: '3'},
		]
	},
	{
		name: "bloodGroup", label: "Blood Group", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{text: "A+", value: '1'},
			{text: "Choose...", value: '2'},
			{text: "Choose...", value: '3'},
		]
	},
]

const studentInputsB = [
	{name: "email", label: "Email", type: "text", placeholder: "example@delwathon.com", required: true, w: 'w-full sm:w-1/2'},
	{name: "phone", label: "Mobile No", type: "text", placeholder: "+234", required: true, w: 'w-full sm:w-1/2'},
	{name: "motherTongue", label: "Mother Tongue", type: "text", placeholder: "Language", required: true, w: 'w-full sm:w-1/2 '},
	{
		name: "state", label: "State", type: "select", required: true, w: 'w-full sm:w-1/2', options: [
			{value: undefined, text: "Select State"},
			...nigeriaStatesList.map(each => ({...each, value: each, text: each}))
		]
	},
	{name: "localGovernment", label: "Local Government", placeholder: "Local Goverment", type: "text", required: true, w: 'w-full sm:w-1/2'},
	{name: "city", label: "City", type: "text", placeholder: "e.g Ibadan", required: true, w: 'w-full sm:w-1/2'},
	{name: "studentAddress", label: "Student Address", placeholder: "Address", type: "textarea", required: true, w: 'w-full'},
]

const guardianInputs = [
	{name: "guardianFirstname", label: "First Name", type: "text", placeholder: "First name", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianLastname", label: "Last Name", type: "text", placeholder: "Last name", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianOthername", label: "Other Name", type: "text", placeholder: "Other name", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{
		name: "guardianRelationship", label: "Relationship", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{text: "Choose...", value: undefined},
			{text: "Father", value: '2'},
			{text: "Mother", value: '3'},
		]
	},
	{name: "guardianOccupation", label: "Occupation", type: "text", placeholder: "e.g Banker", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianPhone", label: "Mobile No", type: "text", placeholder: "+234", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianEmail", label: "Email", type: "text", placeholder: "example@delwathon.com", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{
		name: "guardianGender", label: "Gender", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{text: "Choose...", value: undefined},
			{text: "Male", value: '2'},
			{text: "Female", value: '3'},
		]
	},
	{
		name: "guardianReligion", label: "Religion", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{text: "Choose...", value: undefined},
			{text: "Christian", value: '2'},
			{text: "Muslim", value: '3'},
		]
	},
	{
		name: "guardianState", label: "State", type: "select", required: true, w: 'w-full sm:w-1/2 lg:w-1/3', options: [
			{value: undefined, text: "Select State"},
			...nigeriaStatesList.map(each => ({...each, value: each, text: each}))
		]
	},
	{name: "guardianLocalGovernment", label: "Local Government", placeholder: "Local Goverment", type: "text", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianCity", label: "City", type: "text", placeholder: "e.g Ibadan", required: true, w: 'w-full sm:w-1/2 lg:w-1/3'},
	{name: "guardianAddress", label: "Parmanent Address", placeholder: "Detailed Address", type: "textarea", required: true, w: 'w-full'},
]


const branches = [
	{text: "Choose...", value: undefined},
	{text: "Branch 1", value: '1'},
	{text: "Branch 2", value: '2'},
	{text: "Branch 2", value: '3'},
]


const {handleSubmit, errors} = useForm({
	validationSchema: enrollStudentSchema,
});

const submit = handleSubmit(values => {
	console.log(values);
})
</script>
<template>
	<div class="px-5 md:px-10 py-5 text-sm">
		<h3 class="text-ed-blue dark:text-white font-semibold text-sm">Enroll New Student</h3>
		<div class="ed-shadow rounded-xl mt-5 mb-2 flex justify-center items-center py-10 px-5">
			<VeeValInput class="w-full max-w-md" :error="errors.branch" name="branch" type="select" label="Branch" required
				:options="branches" />
		</div>


		<div class="flex items-center">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<AcademicsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Academic Details</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
			<div v-for="(input ) of academicInputs" v-bind:key="input.name" class="p-2" :class="input.w">
				<VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]" :name="input.name"
					:type="input.type" :label="input.label" :required="input.required" :options="input.options" />
			</div>
		</div>


		<div class="flex items-center">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<StudentsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Student Details</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 p-5">
			<div class=" flex flex-wrap lg:flex-nowrap ">
				<div class="p-2">
					<div class="ed-border w-56 min-w-[14rem] h-56 flex justify-center items-center rounded">
						<ImageIcon />
					</div>
					<VeeValInput class="w-56 min-w-[14rem] mt-5" :error="errors['picture']" name="picture" type="file"
						:required="true" />
				</div>
				<div class="w-full flex flex-wrap">
					<div v-for="(input ) of studentInputsA" v-bind:key="input.name" class="px-2 py-0.5" :class="input.w">
						<VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]"
							:name="input.name" :type="input.type" :label="input.label" :required="input.required"
							:options="input.options" />
					</div>
				</div>
			</div>
			<div class="w-full flex flex-wrap">
				<div v-for="(input ) of studentInputsB" v-bind:key="input.name" class="px-2 py-0.5" :class="input.w">
					<VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]"
						:name="input.name" :type="input.type" :label="input.label" :required="input.required"
						:options="input.options" />
				</div>
			</div>
		</div>


		<div class="flex items-center mt-5">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<CredentialsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Student Login Credentials</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
			<div class="p-2 w-full lg:w-[40%]">
				<VeeValInput class="w-full" placeholder="emaple@gmail.com" :error="errors['guardianEmail']"
					name="guardianEmail" type="email" label="Email" :required="true" />
			</div>
			<div class="p-2 w-full lg:w-[30%]">
				<VeeValInput class="w-full" :error="errors['guardianPassword']" name="guardianPassword" type="password"
					label="Password" :required="true" />
			</div>
			<div class="p-2 w-full lg:w-[30%]">
				<VeeValInput class="w-full" :error="errors['guardianConfirmPassword']" name="guardianConfirmPassword"
					type="password" label="Confirm Password" :required="true" />
			</div>
		</div>


		<div class="flex items-center my-5">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<GuardiansIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Guardian Details</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
			<div v-for="(input ) of guardianInputs" v-bind:key="input.name" class="p-2" :class="input.w">
				<VeeValInput class="w-full" :placeholder="input.placeholder" :error="errors[input.name]" :name="input.name"
					:type="input.type" :label="input.label" :required="input.required" :options="input.options" />
			</div>
		</div>


		<div class="flex items-center mt-5">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<CredentialsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Guardian Login Credentials</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
			<div class="p-2 w-full lg:w-[40%]">
				<VeeValInput class="w-full" placeholder="emaple@gmail.com" :error="errors['email']" name="email"
					type="email" label="Email" :required="true" />
			</div>
			<div class="p-2 w-full lg:w-[30%]">
				<VeeValInput class="w-full" :error="errors['password']" name="password" type="password" label="Password"
					:required="true" />
			</div>
			<div class="p-2 w-full lg:w-[30%]">
				<VeeValInput class="w-full" :error="errors['confirmPassword']" name="confirmPassword" type="password"
					label="Confirm Password" :required="true" />
			</div>
		</div>


		<div class="flex items-center my-5">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<GuardiansIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Guardian Profile Picture</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 flex gap-3 flex-wrap p-7 justify-center items-center">
			<div class="ed-border border-gray-300 w-48 min-w-[12rem] h-48 flex justify-center items-center rounded">
				<ImageIcon />
			</div>
			<VeeValInput class="w-56 min-w-[14rem] mt-5" :error="errors['guardianPicture']" name="guardianPicture"
				type="file" :required="true" />
		</div>


		<div class="flex items-center mt-5">
			<div class="bg-ed-blue h-10 w-10 text-white rounded-l-md flex justify-center items-center">
				<AcademicsIcon />
			</div>
			<h3 class="text-ed-blue dark:text-white font-semibold ml-3">Previous School Details</h3>
		</div>
		<div class="ed-shadow rounded-xl my-2 flex flex-wrap p-5">
			<div class="p-2 w-full lg:w-1/2">
				<VeeValInput class="w-full" placeholder="Delwathon College" :error="errors['schoolname']" name="schoolname"
					label="School Name" :required="true" />
			</div>
			<div class="p-2 w-full lg:w-1/2">
				<VeeValInput class="w-full" :error="errors['qualification']" name="qualification" label="Qualification"
					:required="true" />
			</div>
			<div class="p-2 w-full">
				<VeeValInput class="w-full" :error="errors['remark']" name="remark" type="textarea" label="Remark"
					:required="true" />
			</div>
		</div>


		<div class="flex justify-center py-2">
			<button class="bg-ed-blue text-white py-2 px-4 rounded" @click="submit">Enroll Now</button>
		</div>
		<div class="flex flex-wrap justify-between pt-10 gap-5">
			<p>2023 &copy; School Name</p>
			<p>Designed and Developed by Delwathon IT Solution</p>
		</div>
	</div>
</template>