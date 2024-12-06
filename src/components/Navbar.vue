<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Button from "./Button.vue";

let open = ref(false);

function MenuOpen() {
  open.value = !open.value;
}
</script>

<template>
  <div>
    <header class="bg-[#7b7c3e] py-4 fixed top-0 left-0 w-full z-40">
      <nav
        class="w-[85%] lg:w-[70%] mx-auto text-white flex justify-between items-center"
      >
        <div>
          <RouterLink to="/" class="text-lg lg:text-2xl font-bold">
            Singletary Realty
          </RouterLink>
        </div>

        <ul class="lg:flex gap-10 items-center transition-all hidden">
          <li><RouterLink class="hover:border-b-2" to="/">Home</RouterLink></li>
          <li>
            <RouterLink class="hover:border-b-2" to="/about"
              >About Us</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:border-b-2" to="/application"
              >Application</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:border-b-2" to="/agents"
              >Singletary Agents</RouterLink
            >
          </li>
        </ul>

        <div class="hidden lg:flex items-center transition-all duration-150">
          <Button />
        </div>

        <!-- ===========================Mobile Menu=========================== -->

        <ul
          :class="[open ? 'left-0' : 'left-[-250px]']"
          class="duration-700 ease-in z-10 absolute top-0 left-0 w-[250px] h-[100vh] bg-black text-white flex items-center justify-center flex-col lg:hidden"
        >
          <li class="mt-10" @click="MenuOpen()">
            <RouterLink class="hover:border-b-2" to="/">Home</RouterLink>
          </li>
          <li class="mt-10" @click="MenuOpen()">
            <RouterLink class="hover:border-b-2" to="/about"
              >About Us</RouterLink
            >
          </li>
          <li class="mt-10" @click="MenuOpen()">
            <RouterLink class="hover:border-b-2" to="/application"
              >Application</RouterLink
            >
          </li>
          <li class="mt-10" @click="MenuOpen()">
            <RouterLink class="hover:border-b-2" to="/agents"
              >Singletary Agents</RouterLink
            >
          </li>

          <div class="absolute bottom-4 left-0 w-full px-4">
            <RouterLink
              to="/application"
              class="w-full bg-white rounded-full lg:px-10 px-20 py-3 text-black"
            >
              Apply
            </RouterLink>
          </div>
        </ul>

        <!-- ===========================Hamburger Icon============= -->
        <div class="lg:hidden duration-150 ease-in" @click="MenuOpen()">
          <i :class="[open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars']"></i>
        </div>
      </nav>
    </header>
  </div>
</template>
