<template>
    <div class="bg-[#0033990D] my-10 rounded-3xl relative flex py-10 md:py-28 app-x items-center">
        <svg class="absolute hidden md:block h-full inset-y-0 left-0" viewBox="0 0 541 720" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M-79.0915 222.159C-79.0915 489.205 -177.316 557.268 -29.0914 700C236.776 803.429 706.981 465.369 480.019 246.982C304.273 77.8762 271.505 3.40732 97.5251 3.40732C-76.4553 3.40732 -79.0915 -44.8868 -79.0915 222.159Z"
                fill="#003399" />
        </svg>
        <div class="relative w-full md:w-[55%] hidden md:block">
            <img src="../assets/delwaton1 1image2.png"
                class="h-[30rem] -rotate-2 w-full object-cover rm-drag rounded-3xl" />
        </div>
        <div class="w-full text-center md:w-1/2 md:pl-16 text-[#1B1B1B] md:text-left md:ml-5">
            <div class="flex place-content-center  space-x-4 md:space-x-8 pb-14 text-[#181C17] md:place-content-start">
                <button class="border-b-4 border-ed-blue px-2 pb-1" @click="showbody = 1" :class="showbody == 1 ? 'border-b-4' : 'border-none'">Project & Tasks </button>
                <button class="border-ed-blue px-2 pb-1" @click="showbody = 2" :class="showbody == 2 ? 'border-b-4' : 'border-none'">Chat</button>
                <button class="border-ed-blue px-2 pb-1" @click="showbody = 3" :class="showbody == 3 ? 'border-b-4' : 'border-none'">Goals</button>
                <button class="border-ed-blue px-2 pb-1" @click="showbody = 4" :class="showbody == 4 ? 'border-b-4' : 'border-none'">Views</button>
            </div>
            <div v-if="showbody == 1">
                <h3 class="text-4xl md:text-5xl font-semibold max-w-md leading-tight">Simplify work and get more done.
                </h3>
                <p class="my-8">Plan, track, and manage any type of work with project management that flexes to your team's
                    needs.
                </p>
                <div class="my-10 mb-1 flex space-x-10">
                    <button
                        className="drop-shadow-2xl md:mx-0 py-2 px-14 mx-auto hover:bg-white hover:text-ed-blue border border-ed-blue outline-none text-sm bg-ed-blue text-white font-semibold rounded-md shadow-md">
                        Get Started
                    </button>
                </div>
            </div>

            <!-- 222222222  chat-->

            <div v-if="showbody == 2">
                <h3 class="text-4xl md:text-5xl font-semibold max-w-md leading-tight">Bring everyone together in Chat.
                </h3>
                <p class="my-8">Work smarter as a team with real-time chat. Tag individuals or groups, assign comments for action items, and link tasks to get more done together.
                </p>
                <div class="my-8 flex space-x-10">
                    <button
                        className="drop-shadow-2xl md:mx-0 py-2 px-14 mx-auto hover:bg-white hover:text-ed-blue border border-ed-blue outline-none text-sm bg-ed-blue text-white font-semibold rounded-md shadow-md">
                        Explore Chats
                    </button>
                </div>
            </div>

            <!-- 3333333 goals -->

            <div v-if="showbody == 3">
                <h3 class="text-4xl md:text-5xl font-semibold max-w-md leading-tight">Set goals and crush them faster.
                </h3>
                <p class="my-8">Stay on track to hit your goals with targets for task completions, numbers, monetary values and more. Track progress in real-time connecting tasks to goals and keep your objectives organized with Goal Folders.
                </p>
                <div class="my-8 flex space-x-10">
                    <button
                        className="drop-shadow-2xl md:mx-0 py-2 px-14 mx-auto hover:bg-white hover:text-ed-blue border border-ed-blue outline-none text-sm bg-ed-blue text-white font-semibold rounded-md shadow-md">
                        Explor Goals
                    </button>
                </div>
            </div>

            <!-- 4444444 views -->

            <div v-if="showbody == 4">
                <h3 class="text-4xl md:text-5xl font-semibold max-w-md leading-tight">See your work, your way.
                </h3>
                <p class="my-8">Tackle work from any angle with 20+ real-time views that adapt to your needs. Track tasks on List, update workflows on a Board, drag-and-drop due dates on a Calendar, and so much more.
                </p>
                <div class="my-8 flex space-x-10">
                    <button
                        className="drop-shadow-2xl md:mx-0 py-2 px-14 mx-auto hover:bg-white hover:text-ed-blue border border-ed-blue outline-none text-sm bg-ed-blue text-white font-semibold rounded-md shadow-md">
                        See Views
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    setup() {
        let showbody = ref(1)

       

        return{
            showbody
        }
    },
}
</script>