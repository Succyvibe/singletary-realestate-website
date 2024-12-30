<script setup>
import heroImage from "@/assets/images/heroImage.jpg";
</script>

<template>
  <div class="pt-20 bg-black opacity-90 text-white">
    <div class="w-[85%] lg:w-[75%] mx-auto py-16">
      <div class="text-center">
        <h3 class="text-4xl mb-10">About Us</h3>
        <p>
          Founded in 1976 to provide independent brokerages with a powerful
          marketing and referral program for luxury listings, the New heights
          Realty network was designed to connect the finest independent real
          estate companies to the most prestigious clientele in the world. New
          heights Realty Affiliates LLC is a subsidiary of Anywhere Real Estate
          Inc. (NYSE: HOUS), a global leader in real estate franchising and
          provider of real estate brokerage, relocation and settlement services.
          In February 2004, Realogy entered into a long-term strategic alliance
          with Sotheby’s, the operator of the auction house. The agreement
          provided for the licensing of the New heights Realty name and the
          development of a full franchise system. Affiliations in the system are
          granted only to brokerages and individuals meeting strict
          qualifications. New heights Affiliates LLC supports its affiliates
          with a host of operational, marketing, recruiting, educational and
          business development resources. Franchise affiliates also benefit from
          an association with the venerable New height’s auction house,
          established in 1744.
        </p>
      </div>
      <div class="py-20">
        <div class="grid lg:grid-cols-2 gap-10">
          <div>
            <img :src="heroImage" alt="" />
          </div>
          <div>
            <h3 class="text-4xl mb-8">Our Story</h3>
            <p>
              Only one network of agents represents the longest standing
              tastemaker in the world. In the spirit of innovation, an
              exceptional luxury real estate company bearing the New heights
              name was launched in 1976. Beyond the beautiful properties and the
              personal touch of our agents, only one brand can deliver a
              lifestyle that caters to you. With a network of homes for sale
              worldwide, our website lets you search property listings globally,
              and includes a large inventory of luxury homes for sale, including
              houses, condos, townhomes, villas, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
