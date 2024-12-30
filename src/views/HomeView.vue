<script setup>
import heroImage from "../assets/images/heroImage.jpg";
import houseImage from "../assets/images/house4sale.jpg";
import ideas from "../assets/images/ideas.jpg";

const image =
  "https://cdn.pixabay.com/photo/2016/11/29/06/22/buildings-1867772_960_720.jpg";
</script>

<template>
  <div>
    <div
      class="h-[100vh] relative py-12 bg-[url('https://cdn.pixabay.com/photo/2016/11/29/06/22/buildings-1867772_960_720.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div class="absolute top-0 left-0 w-full h-full z-10 bg-black/50"></div>
      <main class="h-full absolute top-0 left-0 w-full z-20">
        <div
          class="h-full w-[85%] lg:w-[70%] mx-auto flex-col justify-center lg:justify-start lg:flex-row flex items-center gap-12"
        >
          <div>
            <div class="flex flex-col gap-4 text-white pt-20">
              <h3 class="italic text-xl relative">
                Welcome to Skyline Homes Group
                <!-- <span class="absolute -top-2 right-0"
                  ><i class="fa-regular fa-registered text-white font-bold"></i
                ></span> -->
              </h3>
              <h2 class="text-lg lg:text-4xl">Let's find your dream home</h2>
              <h1 class="text-2xl lg:text-6xl font-bold">
                Manage Your Property
              </h1>
              <p class="text-sm lg:text-lg">
                We have Brokered more than 120+ apartments and houses
                Rental/Purchases in New york, New Jersey , <br />
                Brooklyn and other states in the United States
              </p>
            </div>

            <div>
              <div class="pt-4 flex items-center">
                <a
                  href=""
                  class="bg-green-600 text-white px-6 py-2 rounded-3xl mr-2 hover:bg-green-700 transition ease-linear"
                >
                  Send An Email
                </a>
              </div>
            </div>
          </div>

          <!-- <div class="lg:w-[50%]">
            <img
              :src="heroImage"
              alt=""
              class="w-full h-full object-cover opacity-20"
            />
          </div> -->
        </div>
      </main>
    </div>
    <div
      class="w-[350px] h-[260px] rounded-md bg-white fixed bottom-28 right-10 z-50 hidden"
    >
      <div class="bg-green-600">
        <div class="p-3 flex items-center gap-3">
          <div>
            <i class="fa-brands fa-whatsapp text-white text-3xl"></i>
          </div>
          <div>
            <h4 class="text-white font-semibold text-lg">
              Start A Conversation
            </h4>
            <p class="text-xs text-white">
              Hi! Click one of our member below to chat on
              <span class="text-sm font-bold">Whatsapp</span>
            </p>
          </div>
        </div>
      </div>

      <div class="p-3">
        <div class="py-2">
          <p class="text-xs text-[#333]">
            The team typically replies in a few minutes
          </p>
        </div>
        <div class="border-l-2 border-green-500 bg-slate-100 px-2 py-3">
          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-full">
                <img
                  src="/src/assets/images/mehul_patel.jpeg"
                  alt=""
                  class="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <p class="text-sm font-bold">Donnell Kedrick</p>
                <p class="text-xs">Customer experience Officer</p>
              </div>
            </div>
            <div>
              <i class="fa-brands fa-whatsapp text-green-500 text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-10 lg:py-16">
      <div class="w-[85%] lg:w-[70%] mx-auto">
        <div class="text-center">
          <p class="text-xl lg:text-2xl">Three steps. Three minutes.</p>
          <h1 class="text-2xl lg:text-5xl font-bold my-4">
            Everything should be this easy.
          </h1>
        </div>
        <div class="py-12">
          <div class="grid lg:grid-cols-3 gap-6">
            <div
              class="border rounded-2xl p-6 shadow-xl hover:shadow-md duration-500"
            >
              <!-- icon -->
              <RouterLink>
                <i class="fa-regular fa-message text-green-400 text-4xl"></i
              ></RouterLink>
              <h3 class="text-xl lg:text-3xl font-bold my-5">
                Chat with an agent
              </h3>
              <p class="text-md">
                Chat with one of our consultant/agents about your real estate
                decisions
              </p>
            </div>
            <div
              class="border rounded-2xl p-6 shadow-xl hover:shadow-md duration-500"
            >
              <!-- icon -->
              <RouterLink to="/apply">
                <i
                  class="fa-solid fa-chalkboard-user text-orange-400 text-4xl"
                ></i
              ></RouterLink>
              <h3 class="text-xl lg:text-3xl font-bold my-5">
                Make your real estate choice
              </h3>
              <p class="text-md">
                Get help in making your Real Estate choices with datas and real
                time informations to guide your decisions
              </p>
            </div>
            <div
              class="border rounded-2xl p-6 shadow-xl hover:shadow-md duration-500"
            >
              <!-- icon -->
              <RouterLink>
                <i class="fa-solid fa-file-pen text-orange-400 text-4xl"></i
              ></RouterLink>
              <h3 class="text-xl lg:text-3xl font-bold my-5">
                Fill Application
              </h3>
              <p class="text-md">
                Fill application with your Real Estate interest and schedule a
                date to physically review your choice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="y-10 lg:py-16">
      <div class="w-[85%] lg:w-[70%] mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-2xl lg:text-5xl mb-4">Our Excellent Services</h1>
          <p class="text-sm lg:text-lg">
            Check out our best service you can possibly get in building your
            company and don’t forget <br />
            to ask via our email or our customer service if you are interested
            in using our services
          </p>
        </div>
        <div class="flex flex-col w-full">
          <div
            class="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 text-center lg:text-start"
          >
            <div class="mb-8 lg:mb-0">
              <div class="border-[6px] h-[240px] border-white overflow-hidden">
                <img
                  class="w-full h-full bg-cover hover:scale-125 transition duration-[0.7s] ease-in-out"
                  src="https://newheightrealestates.com/wp-content/uploads/2024/08/Mask-Group-2-1024x799.png"
                  alt=""
                />
              </div>
              <h3 class="text-2xl lg:text-[48px] font-[500] mb-2 lg:my-5">
                Industrial
              </h3>
              <p class="text-[rgba(0,0,0,0.5)] mt-4">
                Industrial development is our main line of business. We do
                Factory Construction, Warehouse and others
              </p>
            </div>
            <div class="mb-8 lg:mb-0">
              <div class="border-[6px] h-[240px] border-white overflow-hidden">
                <img
                  class="w-full h-full bg-cover hover:scale-125 transition duration-[0.7s] ease-in-out"
                  src="https://d1xt9s86fx9r45.cloudfront.net/assets/hl-production/assets/v4/areas/city-photos/desktop/new-york-ny-2fc81fe227a80ad810e50b2d6a188a26624001f1f921e07b6a41cc4dd9ac1b52.webp"
                  alt=""
                />
              </div>
              <h3 class="text-2xl lg:text-[48px] font-[500] mb-2 lg:my-5">
                Commercial
              </h3>
              <p class="text-[#00000080] mt-4">
                Our experience building in the Commercial field includes
                Showrooms, Supermalls and Office Buildings
              </p>
            </div>
            <div class="mb-8 lg:mb-0">
              <div class="border-[6px] h-[240px] border-white overflow-hidden">
                <img
                  class="w-full h-full bg-cover hover:scale-125 transition duration-[0.7s] ease-in-out"
                  src="https://newheightrealestates.com/wp-content/uploads/2024/08/Mask-Group-3-1024x799.png"
                  alt=""
                />
              </div>
              <h3 class="text-2xl lg:text-[48px] font-[500] mb-2 lg:my-5">
                Residential
              </h3>
              <p class="text-[#00000080] mt-4">
                Residential development is the beginning that has shaped us to
                this day. Our development includes Houses & Apartments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative py-16 bg-[url('https://dims.web.production.kw-prod.brightspot.cloud/dims4/default/29c8ade/2147483647/strip/true/crop/3840x1440+0+0/resize/1920x720!/format/webp/quality/90/?url=https%3A%2F%2Fstatic.kw.com%2F30%2F88%2Fd3db27054c069620137103a19975%2Fagentswalking.JPG')] bg-cover bg-center bg-no-repeat h-[600px]"
    >
      <div class="absolute top-0 left-0 w-full h-full z-10 bg-black/50"></div>
      <div class="w-full h-full absolute top-0 left-0 z-20">
        <div class="w-[85%] lg:w-[70%] mx-auto h-full">
          <div
            class="flex flex-col items-center justify-center gap-x-4 text-white h-full"
          >
            <div class="lg:w-[70%] text-center">
              <h1 class="text-2xl lg:text-5xl mb-4">Our real estate Prowess</h1>
              <p class="">
                Beyond the beautiful properties and the personal touch of our
                agents, only one brand can deliver a lifestyle that caters to
                you. With a network of homes for sale worldwide, our website
                lets you search property listings globally, and includes a large
                inventory of luxury homes for sale, including houses, condos,
                townhomes, villas, and more.
              </p>
            </div>
            <div class="mt-4 w-full flex justify-center">
              <RouterLink
                to="/application"
                class="bg-white rounded-full px-10 py-3 text-black text-center"
              >
                Become a Skyline Agent
              </RouterLink>
            </div>
            <!-- <div>
            <div class="rounded-2xl">
              <img :src="ideas" alt="" class="w-full rounded-2xl" />
            </div>
          </div> -->
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 lg:py-16 bg-gray-200">
      <div class="w-[85%] lg:w-[85%] mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-2xl lg:text-5xl mb-4">Together We Do More</h2>
          <p class="text-sm lg:text-lg">
            Skyline Homes Group is there to help at every big step in the buying
            journey.
          </p>
        </div>

        <div class="w-full">
          <div
            class="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between lg:p-4"
          >
            <div class="w-full lg:w-[50%] lg:border-r-2 border-red-600">
              <div class="w-full">
                <div class="w-full flex flex-col items-center justify-center">
                  <div class="lg:w-[30%] rounded-full">
                    <img
                      src="https://dims.web.production.kw-prod.brightspot.cloud/dims4/default/913d27a/2147483647/strip/true/crop/192x192+0+0/resize/200x200!/quality/90/?url=https%3A%2F%2Fstatic.kw.com%2F3f%2Fa2%2F4ccc90d64180a78d40ad9cadbd7b%2Fhomeloans.png"
                      alt=""
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="pt-8 text-center lg:px-2">
                    <p class="text-gray-500 font-bold">SKYLINE</p>
                    <h3 class="text-red-700 font-bold text-2xl">Home Loans</h3>
                    <p class="mt-8 text-sm lg:text-md">
                      Helping buyers stand out in competitive housing markets by
                      providing faster loan approval and stronger purchase
                      offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-[50%] lg:border-r-2">
              <div class="w-full">
                <div class="w-full flex flex-col items-center justify-center">
                  <div class="lg:w-[30%] rounded-full">
                    <img
                      src="https://dims.web.production.kw-prod.brightspot.cloud/dims4/default/24ba53c/2147483647/strip/true/crop/192x192+0+0/resize/200x200!/quality/90/?url=https%3A%2F%2Fstatic.kw.com%2F3a%2F6e%2F9e962106458997a418de8845ed8c%2Fcovered.png"
                      alt=""
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="pt-8 text-center lg:px-2">
                    <p class="text-gray-500 font-bold">SKYLINE</p>
                    <h3 class="text-blue-300 font-bold text-2xl">Covered</h3>
                    <p class="mt-8 text-sm lg:text-md">
                      We work with several leading insurance companies to secure
                      affordable coverage that meets your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative py-16 bg-[url('https://dims.web.production.kw-prod.brightspot.cloud/dims4/default/95b13f3/2147483647/strip/true/crop/2246x1600+797+0/resize/640x456!/format/webp/quality/90/?url=https%3A%2F%2Fstatic.kw.com%2F5f%2F73%2F1f1133004e46be154b3b1c42bab2%2Fcoffeeladyleft.jpg')] bg-cover bg-center bg-no-repeat h-[500px]"
    >
      <div class="absolute top-0 left-0 w-full h-full z-10 bg-black/50"></div>
      <div class="w-full h-full absolute top-0 left-0 z-20">
        <div class="w-[85%] lg:w-[70%] mx-auto h-full">
          <div
            class="flex flex-col items-center justify-center gap-x-4 text-white h-full"
          >
            <div class="lg:w-[70%] text-right">
              <h1 class="text-2xl lg:text-5xl mb-4">
                Curious about what’s trending in your neighborhood?
              </h1>
              <p class="">
                Download our recommended app for real estate insights, on
                demand.
              </p>
            </div>
            <div class="mt-4 w-full flex justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.smarteragent.android.kw&pcampaignid=web_share"
                target="_blank"
                class="bg-white rounded-full px-10 py-3 text-black text-center"
              >
                Download the App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
