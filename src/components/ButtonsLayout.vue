<template>
<v-container>
  <v-row justify="center">
    <v-col cols="12" sm="4" md="2" class="bg-blue">
            <v-btn @click="bookStore.formDialog = !bookStore.formDialog" text="Add book" block />
    </v-col>
  <v-dialog width="500" v-model="bookStore.formDialog">


  <template v-slot:default="{ isActive }">
    <v-card title="Add new book">
      <v-container>
        <!-- {{ bookForm }} -->
    <v-row>
      <v-col cols="12">
        <v-text-field label="Title" v-model="bookStore.bookForm.title" />
      </v-col>
       <v-col cols="12">
        <v-text-field label="Author" v-model="bookStore.bookForm.author"/> 
      </v-col>
      <v-col cols="12">
        <v-text-field type="number" label="Pages" v-model="bookStore.bookForm.pages"/>
      </v-col>
         <v-col cols="12">
        <v-checkbox label="is read" v-model="bookStore.bookForm.isRead"/>
      </v-col>
      <v-col cols="12">
        <v-btn text="submit" @click="bookStore.addBook(isActive)" block />
      </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
</v-dialog>
        <v-col cols="2"/>
        <v-col cols="12" sm="4" md="2" class="bg-bluex">
          
  <v-btn text="Remove all" block/>
    </v-col>
    </v-row>
  <!-- <div class="d-flex w-75 mx-auto"> 
  <v-spacer />
  </div> -->
  </v-container>
</template>

<script setup>
import {useBookStore} from '@/store/bookStore'
 
 const bookStore = useBookStore()

</script>