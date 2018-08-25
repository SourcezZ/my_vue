<template>
  <!-- <router-view></router-view> -->
  <div>
    <el-input class="input"v-model="value" v-on:keyup.enter.native="addNew"></el-input>
    <el-button @click="delete1">delete</el-button>
    <el-button @click="this.text1">global</el-button>
    <h1 v-for="item in items">
      <ul>
        <li v-text="item.label" v-on:click='finish(item)' v-bind:class="{Finished:item.isFinished}"></li>
      </ul>
    </h1>
  </div>
</template>

<script>
  import Store from './store'
  export default {
    data() {
      return {
        items: Store.fetch(),
        value: ''
      }
    },
    watch:{
        items:{
          handler:function(items){
            Store.save(items)
          },
          deep:true
        }
      },
    methods: {
      addNew: function () {
        this.items.push({ 
          label: this.value, 
          isFinished: false 
          })
          this.value=''
      },
      delete1: function () {
        this.items.pop()
      },
      finish: function (item) {
        item.isFinished = !item.isFinished
      },
    }
  }
</script>

<style>
  .Finished {
    text-decoration: underline
  }
  .input{
    width: 200px
  }
</style>