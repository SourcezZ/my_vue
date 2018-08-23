<template>
<!-- <router-view></router-view> -->
<div>
  <input v-model="item" v-on:keyup.enter="addNew">
  <button @click="delete1">delete</button>
    <h1 v-for="item in items">
      <ul>
        <li v-text="item.label" v-on:click='finish' v-bind:class="{Finished:item.isFinished}"></li>
      </ul>
    </h1>
</div>
</template> 

<script>
export default{
  data(){
    return{
      items:[],
      item:'',
    }
  },
  methods:{
    addNew : function(){
      this.items.push({label:this.item,isFinished:false})
    },
    delete1 : function(){
      this.items.pop()
    },
    finish : function(){
      
    }
  }
}
</script>

  <style>
    .Finished{
      font-size: 90px
    }
  </style>