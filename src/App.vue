<template>
<v-app>
 <the-navbar />
    <v-main scrollable class="bg-bluex">
      <div class="d-flex flex-column h-100 bg-grex mt-6">
      <buttons-layout />
      <books-form justify="end"/>
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
import BooksForm from '@/components/BooksForm.vue'

  // import {reactive} from 'vue'
  // const people = reactive(['lucre', 'santi'])
  // function addItem() {
  //   people.push('vir')
  //   console.log(people);
  // }

</script>
