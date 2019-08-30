<template>
  <div class="about">
    <el-row type="flex">
      <el-col :span="24" style="margin-left:12px">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.about {
  width: 60%;
  margin: 0 auto;
}
.bg-purple {
  background: #d3dce6;
  height: 600px;
}
.bg-purple-light {
  height: 50px;
  background: #e5e9f2;
}
.bg-purple-dark {
  margin-top: 18px;
  height: 530px;
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

