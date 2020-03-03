<template>
  <div class="page">
    <textarea
      class="content"
      v-model="content"
    ></textarea>

    <BR />
    <iframe
      class="main"
      :src="url"
    ></iframe>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"

import eTool from "../../utils/eTool.js"

import "./css.css" /*引入公共样式*/

const { remote, ipcRenderer } = window.require("electron")
ipcRenderer.on("broadcasting", function(event, arg) {
  console.log(this)
  console.log(arg)
  // event.sender.send("broadcasting", arg);  //  死循环
})

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss"

export default {
  name: "Page222",
  data() {
    return {
      url: "http://127.0.0.1:1234/",
      content: `
      <style>
   .main{
     display:flex;
   }
   .item{
      background-color:red; 
    }
   .flex{
     flex:1;
      background-color:yellow; 
    }
   
  
</style>
<h1>
  欢迎使用flex 布局
</h1>
<div class="main">
 <div class="item">1</div>
 <div class="item flex">2</div>
  
</div>
`,
      line: "",
      lineWords: [],
      transferWord: "",
      input: "first"
    }
  },
  mounted() {},
  methods: {
    save() {
      eTool.writeServer(this.content)
      var url = "http://127.0.0.1:1234/"
      let main = (document.querySelector(".main").src = url)
    },
    async transfer(item) {
      console.log(item)
    },
    async test(tab, event) {},

    handleClick(tab, event) {
      console.log(tab, event)
    }
  },
  watch: {
    content() {
      this.save()
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 700px;
  display: flex;
}
.content {
  width: 40%;
}
.main {
  width: 50%;
}
</style>
