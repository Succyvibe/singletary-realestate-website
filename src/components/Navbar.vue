<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Button from "./Button.vue";
import logoo from "@/assets/logoo.png";

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2016/11/29/06/22/buildings-1867772_960_720.jpg",
    alt: "Image 1",
  },

  {
    src: "https://petapixel.com/assets/uploads/2022/12/image13-1-800x536.jpg",
    alt: "Image 2",
  },
  {
    src: "https://petapixel.com/assets/uploads/2022/12/image11-1-800x534.jpg",
    alt: "Image 3",
  },

  {
    src: "https://petapixel.com/assets/uploads/2022/12/what-is-unsplash-800x420.jpg",
    alt: "Image 1",
  },
];

let open = ref(false);

function MenuOpen() {
  open.value = !open.value;
}

let showWhiteBackground = ref(false);
document.addEventListener("scroll", function () {
  let bodyTopPosition = document.body.getBoundingClientRect().top;

  if (bodyTopPosition < -150) {
    showWhiteBackground.value = true;
  } else {
    showWhiteBackground.value = false;
  }
});
</script>

<template>
  <div>
    <header
      class="py-4 fixed top-0 left-0 w-full z-40 transition-colors duration-500 bg-white shadow"
      :class="{ 'bg-transparent shadow-none': !showWhiteBackground }"
    >
      <nav class="w-[85%] lg:w-[70%] mx-auto flex justify-between items-center">
        <div>
          <RouterLink
            to="/"
            class="text-lg italic lg:text-2xl font-bold"
            :class="{ 'text-white': !showWhiteBackground }"
          >
            <img
              src="/src/assets/logoo.png"
              alt=""
              width="50"
              height="50"
              class="rounded-full"
            />
          </RouterLink>
        </div>

        <ul
          class="lg:flex gap-10 items-center transition-all hidden"
          :class="{ 'sm:text-white': !showWhiteBackground }"
        >
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
              >Skyline Agents</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:border-b-2" to="/Blogs">Blogs</RouterLink>
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
              >Skyline Agents</RouterLink
            >
          </li>
          <li class="mt-10" @click="MenuOpen()">
            <RouterLink class="hover:border-b-2" to="/contact"
              >Contact</RouterLink
            >
          </li>
          <li class="mt-10" @click="MenuOpen()">
            <RouterLink class="hover:border-b-2" to="/blogs">Blogs</RouterLink>
          </li>
          <li class="mt-10" @click="MenuOpen()">
            <RouterLink class="hover:border-b-2" to="/blog">blog</RouterLink>
          </li>

          <div class="absolute bottom-4 left-0 w-full px-4">
            <RouterLink
              to="/application"
              class="w-full bg-white rounded-full lg:px-10 px-20 py-3 text-black"
            >
              Contact
            </RouterLink>
          </div>
        </ul>

        <!-- ===========================Hamburger Icon============= -->
        <div
          class="lg:hidden duration-150 ease-in"
          @click="MenuOpen()"
          :class="{ 'text-white': !showWhiteBackground }"
        >
          <i :class="[open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars']"></i>
        </div>
      </nav>
    </header>
  </div>
</template>
