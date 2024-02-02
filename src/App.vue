<template>
<v-app>
 <the-navbar />
    <v-main scrollable>
      <div class="d-flex flex-col h-100">
            <div class="d-flex h-100 bg-blue"></div>
      <buttons-layout />
      </div>
      <!-- <HelloWorld /> -->
    <!-- <h1 v-for="(item, index) in people"> {{ `${item} ${index}` }}</h1> -->
    <!-- <v-btn @click="addItem">add item</v-btn> -->
<the-footer />
    </v-main>
  </v-app>
</template>

<script setup>

import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import ButtonsLayout from '@/components/ButtonsLayout.vue'

  // import {reactive} from 'vue'
  // const people = reactive(['lucre', 'santi'])
  // function addItem() {
  //   people.push('vir')
  //   console.log(people);
  // }

</script>
