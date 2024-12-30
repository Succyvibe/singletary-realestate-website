<template>
  <div
    class="min-h-[100vh] relative py-12 bg-[url('https://images.unsplash.com/photo-1650954316166-c3361fefcc87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="w-[85%] lg:w-[75%] mx-auto pt-16 lg:pt-28 pb-16 text-center text-white"
    >
      <div class="pt-20">
        <h2 class="text-base/7 font-semibold mt-3">Application</h2>
        <p class="mt-1 text-sm/">
          Use a permanent address where you can receive mail.
        </p>
        <p class="mt-5">
          N/B There’s a compulsory refundable application fee of $200 which
          covers for tour expenses and it’s completely refundable whether you
          secure the apartment or not. Do not believe any agent/realtor who
          states otherwise. We will not be held accountable for any additional
          charge by Agents/Landlords in the course of this transaction
        </p>
      </div>
      <form @submit.prevent="submitForm">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="firstName"
                  class="block text-sm/6 font-medium text-gray-900"
                  >First name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    v-model="firstName"
                    id="firstName"
                    autocomplete="given-name"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="lastName"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Last name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    v-model="lastName"
                    id="lastName"
                    autocomplete="given-name"
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="email"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Your Email</label
                >
                <div class="mt-2">
                  <input
                    type="email"
                    name="email"
                    v-model="email"
                    id="email"
                    autocomplete="given-name"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <!-- <div class="sm:col-span-3">
                <label
                  for="ssn"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Social Security Number (Optional):</label
                >
                <div class="mt-2 relative">
                  <input
                    type="text"
                    name="ssn"
                    id="ssn"
                    v-model="ssn"
                    aria-describedby="helper-text-explanation"
                    class="block w-full rounded-md bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="050–134"
                  />
                </div>
              </div> -->
              <div class="sm:col-span-3">
                <label
                  for="phoneInput"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Mobile Number:</label
                >
                <div class="mt-2 relative">
                  <div
                    class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 19 18"
                    >
                      <path
                        d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="phoneInput"
                    v-model="phoneInput"
                    id="phoneInput"
                    aria-describedby="helper-text-explanation"
                    class="block w-full rounded-md bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="1234567890"
                    required
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Country</label
                >
                <div class="mt-2 grid grid-cols-1">
                  <select
                    id="country"
                    name="country"
                    v-model="country"
                    autocomplete="country-name"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option slected value="">Country</option>
                    <option data-countryCode="DZ" value="213">
                      Algeria (+213)
                    </option>
                    <option data-countryCode="AD" value="376">
                      Andorra (+376)
                    </option>
                    <option data-countryCode="AO" value="244">
                      Angola (+244)
                    </option>
                    <option data-countryCode="AI" value="1264">
                      Anguilla (+1264)
                    </option>
                    <option data-countryCode="AG" value="1268">
                      Antigua &amp; Barbuda (+1268)
                    </option>
                    <option data-countryCode="AR" value="54">
                      Argentina (+54)
                    </option>
                    <option data-countryCode="AM" value="374">
                      Armenia (+374)
                    </option>
                    <option data-countryCode="AW" value="297">
                      Aruba (+297)
                    </option>
                    <option data-countryCode="AU" value="61">
                      Australia (+61)
                    </option>
                    <option data-countryCode="AT" value="43">
                      Austria (+43)
                    </option>
                    <option data-countryCode="AZ" value="994">
                      Azerbaijan (+994)
                    </option>
                    <option data-countryCode="BS" value="1242">
                      Bahamas (+1242)
                    </option>
                    <option data-countryCode="BH" value="973">
                      Bahrain (+973)
                    </option>
                    <option data-countryCode="BD" value="880">
                      Bangladesh (+880)
                    </option>
                    <option data-countryCode="BB" value="1246">
                      Barbados (+1246)
                    </option>
                    <option data-countryCode="BY" value="375">
                      Belarus (+375)
                    </option>
                    <option data-countryCode="BE" value="32">
                      Belgium (+32)
                    </option>
                    <option data-countryCode="BZ" value="501">
                      Belize (+501)
                    </option>
                    <option data-countryCode="BJ" value="229">
                      Benin (+229)
                    </option>
                    <option data-countryCode="BM" value="1441">
                      Bermuda (+1441)
                    </option>
                    <option data-countryCode="BT" value="975">
                      Bhutan (+975)
                    </option>
                    <option data-countryCode="BO" value="591">
                      Bolivia (+591)
                    </option>
                    <option data-countryCode="BA" value="387">
                      Bosnia Herzegovina (+387)
                    </option>
                    <option data-countryCode="BW" value="267">
                      Botswana (+267)
                    </option>
                    <option data-countryCode="BR" value="55">
                      Brazil (+55)
                    </option>
                    <option data-countryCode="BN" value="673">
                      Brunei (+673)
                    </option>
                    <option data-countryCode="BG" value="359">
                      Bulgaria (+359)
                    </option>
                    <option data-countryCode="BF" value="226">
                      Burkina Faso (+226)
                    </option>
                    <option data-countryCode="BI" value="257">
                      Burundi (+257)
                    </option>
                    <option data-countryCode="KH" value="855">
                      Cambodia (+855)
                    </option>
                    <option data-countryCode="CM" value="237">
                      Cameroon (+237)
                    </option>
                    <option data-countryCode="CA" value="1">Canada (+1)</option>
                    <option data-countryCode="CV" value="238">
                      Cape Verde Islands (+238)
                    </option>
                    <option data-countryCode="KY" value="1345">
                      Cayman Islands (+1345)
                    </option>
                    <option data-countryCode="CF" value="236">
                      Central African Republic (+236)
                    </option>
                    <option data-countryCode="CL" value="56">
                      Chile (+56)
                    </option>
                    <option data-countryCode="CN" value="86">
                      China (+86)
                    </option>
                    <option data-countryCode="CO" value="57">
                      Colombia (+57)
                    </option>
                    <option data-countryCode="KM" value="269">
                      Comoros (+269)
                    </option>
                    <option data-countryCode="CG" value="242">
                      Congo (+242)
                    </option>
                    <option data-countryCode="CK" value="682">
                      Cook Islands (+682)
                    </option>
                    <option data-countryCode="CR" value="506">
                      Costa Rica (+506)
                    </option>
                    <option data-countryCode="HR" value="385">
                      Croatia (+385)
                    </option>
                    <option data-countryCode="CU" value="53">Cuba (+53)</option>
                    <option data-countryCode="CY" value="90392">
                      Cyprus North (+90392)
                    </option>
                    <option data-countryCode="CY" value="357">
                      Cyprus South (+357)
                    </option>
                    <option data-countryCode="CZ" value="42">
                      Czech Republic (+42)
                    </option>
                    <option data-countryCode="DK" value="45">
                      Denmark (+45)
                    </option>
                    <option data-countryCode="DJ" value="253">
                      Djibouti (+253)
                    </option>
                    <option data-countryCode="DM" value="1809">
                      Dominica (+1809)
                    </option>
                    <option data-countryCode="DO" value="1809">
                      Dominican Republic (+1809)
                    </option>
                    <option data-countryCode="EC" value="593">
                      Ecuador (+593)
                    </option>
                    <option data-countryCode="EG" value="20">
                      Egypt (+20)
                    </option>
                    <option data-countryCode="SV" value="503">
                      El Salvador (+503)
                    </option>
                    <option data-countryCode="GQ" value="240">
                      Equatorial Guinea (+240)
                    </option>
                    <option data-countryCode="ER" value="291">
                      Eritrea (+291)
                    </option>
                    <option data-countryCode="EE" value="372">
                      Estonia (+372)
                    </option>
                    <option data-countryCode="ET" value="251">
                      Ethiopia (+251)
                    </option>
                    <option data-countryCode="FK" value="500">
                      Falkland Islands (+500)
                    </option>
                    <option data-countryCode="FO" value="298">
                      Faroe Islands (+298)
                    </option>
                    <option data-countryCode="FJ" value="679">
                      Fiji (+679)
                    </option>
                    <option data-countryCode="FI" value="358">
                      Finland (+358)
                    </option>
                    <option data-countryCode="FR" value="33">
                      France (+33)
                    </option>
                    <option data-countryCode="GF" value="594">
                      French Guiana (+594)
                    </option>
                    <option data-countryCode="PF" value="689">
                      French Polynesia (+689)
                    </option>
                    <option data-countryCode="GA" value="241">
                      Gabon (+241)
                    </option>
                    <option data-countryCode="GM" value="220">
                      Gambia (+220)
                    </option>
                    <option data-countryCode="GE" value="7880">
                      Georgia (+7880)
                    </option>
                    <option data-countryCode="DE" value="49">
                      Germany (+49)
                    </option>
                    <option data-countryCode="GH" value="233">
                      Ghana (+233)
                    </option>
                    <option data-countryCode="GI" value="350">
                      Gibraltar (+350)
                    </option>
                    <option data-countryCode="GR" value="30">
                      Greece (+30)
                    </option>
                    <option data-countryCode="GL" value="299">
                      Greenland (+299)
                    </option>
                    <option data-countryCode="GD" value="1473">
                      Grenada (+1473)
                    </option>
                    <option data-countryCode="GP" value="590">
                      Guadeloupe (+590)
                    </option>
                    <option data-countryCode="GU" value="671">
                      Guam (+671)
                    </option>
                    <option data-countryCode="GT" value="502">
                      Guatemala (+502)
                    </option>
                    <option data-countryCode="GN" value="224">
                      Guinea (+224)
                    </option>
                    <option data-countryCode="GW" value="245">
                      Guinea - Bissau (+245)
                    </option>
                    <option data-countryCode="GY" value="592">
                      Guyana (+592)
                    </option>
                    <option data-countryCode="HT" value="509">
                      Haiti (+509)
                    </option>
                    <option data-countryCode="HN" value="504">
                      Honduras (+504)
                    </option>
                    <option data-countryCode="HK" value="852">
                      Hong Kong (+852)
                    </option>
                    <option data-countryCode="HU" value="36">
                      Hungary (+36)
                    </option>
                    <option data-countryCode="IS" value="354">
                      Iceland (+354)
                    </option>
                    <option data-countryCode="IN" value="91">
                      India (+91)
                    </option>
                    <option data-countryCode="ID" value="62">
                      Indonesia (+62)
                    </option>
                    <option data-countryCode="IR" value="98">Iran (+98)</option>
                    <option data-countryCode="IQ" value="964">
                      Iraq (+964)
                    </option>
                    <option data-countryCode="IE" value="353">
                      Ireland (+353)
                    </option>
                    <option data-countryCode="IL" value="972">
                      Israel (+972)
                    </option>
                    <option data-countryCode="IT" value="39">
                      Italy (+39)
                    </option>
                    <option data-countryCode="JM" value="1876">
                      Jamaica (+1876)
                    </option>
                    <option data-countryCode="JP" value="81">
                      Japan (+81)
                    </option>
                    <option data-countryCode="JO" value="962">
                      Jordan (+962)
                    </option>
                    <option data-countryCode="KZ" value="7">
                      Kazakhstan (+7)
                    </option>
                    <option data-countryCode="KE" value="254">
                      Kenya (+254)
                    </option>
                    <option data-countryCode="KI" value="686">
                      Kiribati (+686)
                    </option>
                    <option data-countryCode="KP" value="850">
                      Korea North (+850)
                    </option>
                    <option data-countryCode="KR" value="82">
                      Korea South (+82)
                    </option>
                    <option data-countryCode="KW" value="965">
                      Kuwait (+965)
                    </option>
                    <option data-countryCode="KG" value="996">
                      Kyrgyzstan (+996)
                    </option>
                    <option data-countryCode="LA" value="856">
                      Laos (+856)
                    </option>
                    <option data-countryCode="LV" value="371">
                      Latvia (+371)
                    </option>
                    <option data-countryCode="LB" value="961">
                      Lebanon (+961)
                    </option>
                    <option data-countryCode="LS" value="266">
                      Lesotho (+266)
                    </option>
                    <option data-countryCode="LR" value="231">
                      Liberia (+231)
                    </option>
                    <option data-countryCode="LY" value="218">
                      Libya (+218)
                    </option>
                    <option data-countryCode="LI" value="417">
                      Liechtenstein (+417)
                    </option>
                    <option data-countryCode="LT" value="370">
                      Lithuania (+370)
                    </option>
                    <option data-countryCode="LU" value="352">
                      Luxembourg (+352)
                    </option>
                    <option data-countryCode="MO" value="853">
                      Macao (+853)
                    </option>
                    <option data-countryCode="MK" value="389">
                      Macedonia (+389)
                    </option>
                    <option data-countryCode="MG" value="261">
                      Madagascar (+261)
                    </option>
                    <option data-countryCode="MW" value="265">
                      Malawi (+265)
                    </option>
                    <option data-countryCode="MY" value="60">
                      Malaysia (+60)
                    </option>
                    <option data-countryCode="MV" value="960">
                      Maldives (+960)
                    </option>
                    <option data-countryCode="ML" value="223">
                      Mali (+223)
                    </option>
                    <option data-countryCode="MT" value="356">
                      Malta (+356)
                    </option>
                    <option data-countryCode="MH" value="692">
                      Marshall Islands (+692)
                    </option>
                    <option data-countryCode="MQ" value="596">
                      Martinique (+596)
                    </option>
                    <option data-countryCode="MR" value="222">
                      Mauritania (+222)
                    </option>
                    <option data-countryCode="YT" value="269">
                      Mayotte (+269)
                    </option>
                    <option data-countryCode="MX" value="52">
                      Mexico (+52)
                    </option>
                    <option data-countryCode="FM" value="691">
                      Micronesia (+691)
                    </option>
                    <option data-countryCode="MD" value="373">
                      Moldova (+373)
                    </option>
                    <option data-countryCode="MC" value="377">
                      Monaco (+377)
                    </option>
                    <option data-countryCode="MN" value="976">
                      Mongolia (+976)
                    </option>
                    <option data-countryCode="MS" value="1664">
                      Montserrat (+1664)
                    </option>
                    <option data-countryCode="MA" value="212">
                      Morocco (+212)
                    </option>
                    <option data-countryCode="MZ" value="258">
                      Mozambique (+258)
                    </option>
                    <option data-countryCode="MN" value="95">
                      Myanmar (+95)
                    </option>
                    <option data-countryCode="NA" value="264">
                      Namibia (+264)
                    </option>
                    <option data-countryCode="NR" value="674">
                      Nauru (+674)
                    </option>
                    <option data-countryCode="NP" value="977">
                      Nepal (+977)
                    </option>
                    <option data-countryCode="NL" value="31">
                      Netherlands (+31)
                    </option>
                    <option data-countryCode="NC" value="687">
                      New Caledonia (+687)
                    </option>
                    <option data-countryCode="NZ" value="64">
                      New Zealand (+64)
                    </option>
                    <option data-countryCode="NI" value="505">
                      Nicaragua (+505)
                    </option>
                    <option data-countryCode="NE" value="227">
                      Niger (+227)
                    </option>
                    <option data-countryCode="NG" value="234">
                      Nigeria (+234)
                    </option>
                    <option data-countryCode="NU" value="683">
                      Niue (+683)
                    </option>
                    <option data-countryCode="NF" value="672">
                      Norfolk Islands (+672)
                    </option>
                    <option data-countryCode="NP" value="670">
                      Northern Marianas (+670)
                    </option>
                    <option data-countryCode="NO" value="47">
                      Norway (+47)
                    </option>
                    <option data-countryCode="OM" value="968">
                      Oman (+968)
                    </option>
                    <option data-countryCode="PW" value="680">
                      Palau (+680)
                    </option>
                    <option data-countryCode="PA" value="507">
                      Panama (+507)
                    </option>
                    <option data-countryCode="PG" value="675">
                      Papua New Guinea (+675)
                    </option>
                    <option data-countryCode="PY" value="595">
                      Paraguay (+595)
                    </option>
                    <option data-countryCode="PE" value="51">Peru (+51)</option>
                    <option data-countryCode="PH" value="63">
                      Philippines (+63)
                    </option>
                    <option data-countryCode="PL" value="48">
                      Poland (+48)
                    </option>
                    <option data-countryCode="PT" value="351">
                      Portugal (+351)
                    </option>
                    <option data-countryCode="PR" value="1787">
                      Puerto Rico (+1787)
                    </option>
                    <option data-countryCode="QA" value="974">
                      Qatar (+974)
                    </option>
                    <option data-countryCode="RE" value="262">
                      Reunion (+262)
                    </option>
                    <option data-countryCode="RO" value="40">
                      Romania (+40)
                    </option>
                    <option data-countryCode="RU" value="7">Russia (+7)</option>
                    <option data-countryCode="RW" value="250">
                      Rwanda (+250)
                    </option>
                    <option data-countryCode="SM" value="378">
                      San Marino (+378)
                    </option>
                    <option data-countryCode="ST" value="239">
                      Sao Tome &amp; Principe (+239)
                    </option>
                    <option data-countryCode="SA" value="966">
                      Saudi Arabia (+966)
                    </option>
                    <option data-countryCode="SN" value="221">
                      Senegal (+221)
                    </option>
                    <option data-countryCode="CS" value="381">
                      Serbia (+381)
                    </option>
                    <option data-countryCode="SC" value="248">
                      Seychelles (+248)
                    </option>
                    <option data-countryCode="SL" value="232">
                      Sierra Leone (+232)
                    </option>
                    <option data-countryCode="SG" value="65">
                      Singapore (+65)
                    </option>
                    <option data-countryCode="SK" value="421">
                      Slovak Republic (+421)
                    </option>
                    <option data-countryCode="SI" value="386">
                      Slovenia (+386)
                    </option>
                    <option data-countryCode="SB" value="677">
                      Solomon Islands (+677)
                    </option>
                    <option data-countryCode="SO" value="252">
                      Somalia (+252)
                    </option>
                    <option data-countryCode="ZA" value="27">
                      South Africa (+27)
                    </option>
                    <option data-countryCode="ES" value="34">
                      Spain (+34)
                    </option>
                    <option data-countryCode="LK" value="94">
                      Sri Lanka (+94)
                    </option>
                    <option data-countryCode="SH" value="290">
                      St. Helena (+290)
                    </option>
                    <option data-countryCode="KN" value="1869">
                      St. Kitts (+1869)
                    </option>
                    <option data-countryCode="SC" value="1758">
                      St. Lucia (+1758)
                    </option>
                    <option data-countryCode="SD" value="249">
                      Sudan (+249)
                    </option>
                    <option data-countryCode="SR" value="597">
                      Suriname (+597)
                    </option>
                    <option data-countryCode="SZ" value="268">
                      Swaziland (+268)
                    </option>
                    <option data-countryCode="SE" value="46">
                      Sweden (+46)
                    </option>
                    <option data-countryCode="CH" value="41">
                      Switzerland (+41)
                    </option>
                    <option data-countryCode="SI" value="963">
                      Syria (+963)
                    </option>
                    <option data-countryCode="TW" value="886">
                      Taiwan (+886)
                    </option>
                    <option data-countryCode="TJ" value="7">
                      Tajikstan (+7)
                    </option>
                    <option data-countryCode="TH" value="66">
                      Thailand (+66)
                    </option>
                    <option data-countryCode="TG" value="228">
                      Togo (+228)
                    </option>
                    <option data-countryCode="TO" value="676">
                      Tonga (+676)
                    </option>
                    <option data-countryCode="TT" value="1868">
                      Trinidad &amp; Tobago (+1868)
                    </option>
                    <option data-countryCode="TN" value="216">
                      Tunisia (+216)
                    </option>
                    <option data-countryCode="TR" value="90">
                      Turkey (+90)
                    </option>
                    <option data-countryCode="TM" value="7">
                      Turkmenistan (+7)
                    </option>
                    <option data-countryCode="TM" value="993">
                      Turkmenistan (+993)
                    </option>
                    <option data-countryCode="TC" value="1649">
                      Turks &amp; Caicos Islands (+1649)
                    </option>
                    <option data-countryCode="TV" value="688">
                      Tuvalu (+688)
                    </option>
                    <option data-countryCode="UG" value="256">
                      Uganda (+256)
                    </option>
                    <!-- <option data-countryCode="GB" value="44">UK (+44)</option> -->
                    <option data-countryCode="UA" value="380">
                      Ukraine (+380)
                    </option>
                    <option data-countryCode="AE" value="971">
                      United Arab Emirates (+971)
                    </option>
                    <option data-countryCode="AE" value="971">
                      United States (+1)
                    </option>
                    <option data-countryCode="UY" value="598">
                      Uruguay (+598)
                    </option>
                    <!-- <option data-countryCode="US" value="1">USA (+1)</option> -->
                    <option data-countryCode="UZ" value="7">
                      Uzbekistan (+7)
                    </option>
                    <option data-countryCode="VU" value="678">
                      Vanuatu (+678)
                    </option>
                    <option data-countryCode="VA" value="379">
                      Vatican City (+379)
                    </option>
                    <option data-countryCode="VE" value="58">
                      Venezuela (+58)
                    </option>
                    <option data-countryCode="VN" value="84">
                      Vietnam (+84)
                    </option>
                    <option data-countryCode="VG" value="84">
                      Virgin Islands - British (+1284)
                    </option>
                    <option data-countryCode="VI" value="84">
                      Virgin Islands - US (+1340)
                    </option>
                    <option data-countryCode="WF" value="681">
                      Wallis &amp; Futuna (+681)
                    </option>
                    <option data-countryCode="YE" value="969">
                      Yemen (North)(+969)
                    </option>
                    <option data-countryCode="YE" value="967">
                      Yemen (South)(+967)
                    </option>
                    <option data-countryCode="ZM" value="260">
                      Zambia (+260)
                    </option>
                    <option data-countryCode="ZW" value="263">
                      Zimbabwe (+263)
                    </option>
                  </select>
                  <svg
                    class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="streetAddress"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Street address</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="streetAddress"
                    v-model="streetAddress"
                    id="streetAddress"
                    autocomplete="streetAddress"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="city"
                  class="block text-sm/6 font-medium text-gray-900"
                  >City</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    v-model="city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="agentName"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Agents Name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="agentName"
                    id="agentName"
                    v-model="agentName"
                    autocomplete=""
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="landlordName"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Former LandLord's Name (Optional)</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="landlordName"
                    id="landlordName"
                    v-model="landlordName"
                    autocomplete=""
                    required
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="emergencyContact"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Emergency Contact:</label
                >
                <div class="mt-2 relative">
                  <div
                    class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 19 18"
                    >
                      <path
                        d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="emergencyContact"
                    id="emergencyContact"
                    v-model="emergencyContact"
                    aria-describedby="helper-text-explanation"
                    class="block w-full rounded-md bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
              </div>

              <div class="sm:col-span-full">
                <label
                  for="others"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Names Of Other Persons To Occupy The Apartment ( state
                  relationship with the persons )</label
                >
                <div class="mt-2">
                  <textarea
                    type="text"
                    name="others"
                    id="others"
                    autocomplete=""
                    v-model="others"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div class="sm:col-span-full mt-4">
                <label
                  for="paymentMethod"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Payment Method</label
                >
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  v-model="paymentMethod"
                  autocomplete="paymentMethod"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="zelle">Zelle</option>
                  <option value="cashapp">Cashapp</option>
                  <option value="Apple Pay">Apple Pay</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Chime">Chime</option>
                </select>
              </div>
              <!-- Honeypot Spam Protection -->
              <input
                type="checkbox"
                name="botcheck"
                class="hidden"
                style="display: none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          @click="showAlert"
          class="bg-green-800 px-4 py-2 rounded-lg w-full"
        >
          Submit Application
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "6475cc8e-ac4e-48ee-982e-3fcd77dfb92f";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      phoneInput: "",
      country: "",
      streetAddress: "",
      city: "",
      region: "",
      zipCode: "",
      agentName: "",
      landlordName: "",
      others: "",
      emergencyContact: "",
      paymentMethod: "",
    };
  },

  // methods: {
  //   showAlert() {
  //     // Use sweetalert2
  //     this.$swal("Hello Vue world!!!");
  //   },
  // },
  methods: {
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          phoneInput: this.phoneInput,
          country: this.country,
          streetAddress: this.streetAddress,
          city: this.city,
          region: this.region,
          zipCode: this.zipCode,
          agentName: this.agentName,
          landlordName: this.landlordName,
          others: this.others,
          emergencyContact: this.emergencyContact,
          paymentMethod: this.paymentMethod,
        }),
      });
      const result = await response.json();
      if (result.success) {
        this.$swal("Submitted Successfully");
        (this.firstName = ""),
          (this.lastName = ""),
          (this.email = ""),
          (this.phoneInput = ""),
          (this.country = ""),
          (this.streetAddress = ""),
          (this.city = ""),
          (this.region = ""),
          (this.zipCode = ""),
          (this.agentName = ""),
          (this.landlordName = ""),
          (this.others = ""),
          (this.emergencyContact = ""),
          (this.paymentMethod = "");
      }
    },
  },
};
</script>

<style scoped>
label {
  color: white;
}
</style>
