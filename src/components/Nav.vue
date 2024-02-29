<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();

</script>

<template>
    <nav class=" dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="items-center justify-between w-full flex md:w-auto md:order-1" id="navbar-search">
                <ul
                    class="flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link to="/">
                            <a href="#"
                                class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500"
                                :class="{ 'text-blue-700': route.path=='/', 'text-black': route.path!=='/' }">
                                테두리-
                            </a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/noBorder">
                            <a href="#"
                                class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500"
                                :class="{ 'text-blue-700': route.path=='/noBorder', 'text-black': route.path!=='/noBorder' }">
                                테두리 없음
                            </a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
