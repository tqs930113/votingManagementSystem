<template>
  <div class="base-form">
    <nav>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-document"></i>表单</el-breadcrumb-item>
            <el-breadcrumb-item>基本表单</el-breadcrumb-item>
        </el-breadcrumb>
    </nav>
    <div class="form">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px"  class="demo-ruleForm" >
        <el-form-item label="活动名称" prop="name"  >
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region" >
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required >
            <el-col :span="11">
            <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery" checked></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="附件上传" prop="fileList3">
            <el-upload
            class="upload-demo"
            action="/assets"
            :autoUpload="false"
            :on-change="handleChange"
            :before-upload	="checkFile"
            :on-success="successUpload"
            :file-list="fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fileConf: {
          size: 500,
          type: ['jpg', 'png', 'jpeg']
        },
        fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: ['美食/餐厅线上活动'],
          resource: '线上品牌商赞助',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      successUpload (response, file, fileList) {
        console.log(response)
      },
      checkFile (file) {
        var fileSize = Math.floor(file.size / 1204)
        var tempArr = file.type.split('/')
        var fileType = tempArr[tempArr.length - 1]
        console.log(fileType)
        if (fileSize > this.fileConf.size) {
          alert('超过上传文件的限制大小！')
          return false
        }
        if (this.fileConf.type.indexOf(fileType) < 0) {
          alert('文件类型不符合要求')
          return false
        }
      },
      handleChange (file, fileList) {
        // console.log(file)
        // console.log(fileList)
      },
      submitForm (formName) {
        var self = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(self.fileList3)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
<style>
.base-form{
  padding:30px;
}
.base-form nav{
  padding: 20px 0 ;
}
.base-form nav i{
  padding-right: 5px;
  font-weight: bold;
}
.base-form .el-form-item__content{
    text-align:left;
}
</style>
