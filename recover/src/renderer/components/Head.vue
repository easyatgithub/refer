<template>
  <div>
    <el-row style="padding-right:10px">
      <el-col :span="23">
        <el-tabs
          style="height: 200px;"
          @tab-click="handleClick"
        >
          <el-tab-pane label="软件">
            <Page222 />
          </el-tab-pane>

          <el-tab-pane label="说明">
            <br />复习所见
            <br />千个案例总会覆盖的
            <br />读写文件
          </el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="1">
        <el-button
          @click="drawer = true"
          type="primary"
          style="margin-left: 16px;"
        >
          <i class="el-icon-share"></i>
        </el-button>
      </el-col>
    </el-row>

    <el-drawer
      title="关于"
      :visible.sync="drawer"
    >
      <div class="rightArea">
        <el-row :gutter="10">简单开发</el-row>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"

import Page222 from "@/components/Page222"
import "./css.css" /*引入公共样式*/

import globalData from "../globalData"
const { remote, ipcRenderer } = window.require("electron")

const fs = require("fs")
const sizeOf = require("image-size")

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss"
export default {
  data() {
    return {
      drawer: false,
      activeName: "first",
      input: "",
      activeClass: 0,
      list: [
        { src: "111", name: "111" },
        { src: "1112222", name: "222" },
        { src: "11122233333", name: "333" }
      ]
    }
  },
  components: {
    Page222
  },
  methods: {
    // tab 切换的的时候会从全局数据里面更新文件夹
    handleClick(tab, event) {
      console.log(tab, event)
      var all = JSON.parse(localStorage.getItem("all"))
      console.log("all")
      console.log(all)
      this.COMMON.data = all
    },
    async test(tab, event) {
      ipcRenderer.send("open-file-dialog")
    },
    choose(index) {
      console.log("choose()", index)
      this.activeClass = index
    },
    async test1() {}
  }
}

/////////////////////

ipcRenderer.on("selected-directory", async (event, path) => {
  const name = path[0].slice(path[0].lastIndexOf("/") + 1)
  var items = getFileList(name)
  var data = await db.find({ objName: "folder" })
  var forderValue = data[0].objValue
  var firstTime = Date.now()
})
</script>

 

<style lang="scss" scoped>
.function-row {
  margin: 14px 0;
  .el-input {
    width: 95%;
  }
  .el-select {
    width: 95%;
  }
}

.info-row {
  margin: 2px 0;
}

.el-button {
  width: 100%;
}

.el-alert {
  margin: 16px 0;
}

.el-row {
  margin: 10px;
}
</style>
