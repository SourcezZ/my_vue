<template>
  <!-- <router-view></router-view> -->
  <div>
    <el-input class="input"v-model="value" v-on:keyup.enter.native="addNew"></el-input>
    <el-button v-on:click="addNew">addNew</el-button>
    <el-button @click="delete1">delete</el-button>
    <el-button @click="text1">global</el-button>
    <el-button v-on:click="greet">click me!</el-button>
    <todo-item></todo-item>
    <h1 v-for="item in items">
      <ul>
        <li v-text="item.label" v-on:click='finish(item)' v-bind:class="{Finished:item.isFinished}" v-bind:title="FinishedMsg"></li>
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
        value: '',
        FinishedMsg:'待办事项',
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
        if (this.value=='') {
          alert("事项不能为空")
          return
        }
        this.items.push({ 
          label: this.value, 
          time:Date(),
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