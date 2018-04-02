<template>
  <div class="hello">
    <div class="holder">

      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill">
        
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in skills" :key='index'>
            {{ data.skill }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
            </li>
        </transition-group>
      </ul>

      <p>These are the skills that you possess.</p>
    </div>
  </div>
</template>

<script src="./Skills.js"></script>
<style src="./Skills.css" scoped></style>
