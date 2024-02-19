<template>
<div :class="['d-flex',`justify-${justify}`]">{{ bookStore.books }}</div>
  <v-card
    v-for="(book, index) in bookStore.books"
    class="mb-4 mx-auto"
    width="50%"
  >
    <template v-slot:title>
     {{ book.title }}
    </template>

    <v-card-text>
      Author:
      {{ book.author }}

<v-chip>
  Pages: 
  {{ book.pages }}
</v-chip>

<v-chip>
  {{ book.isRead ? 'read' : 'not read'}}
</v-chip>

<v-btn text="delete" @click="bookStore.books.splice(index, 1)"/>

    </v-card-text>

  </v-card>

</template> 

<script setup>
import { defineProps } from 'vue'
import {useBookStore} from '@/store/bookStore'

defineProps({
  justify: {
    type: String,
    default: 'start'}
  })

 const bookStore = useBookStore()

</script>
