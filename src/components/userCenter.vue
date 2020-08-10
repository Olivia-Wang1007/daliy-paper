<template>
  <div class="box">
    <div>
      <Form
        ref="formCustom"
        :model="formCustom"
        :rules="ruleCustom"
        :label-width="80"
      >
        <FormItem label="ID：">
          <div class="txt">aa-03920159</div>
        </FormItem>
        <FormItem label="用户名:">
          <div class="txt">03920159</div>
        </FormItem>
        <FormItem label="姓名:">
          <div class="txt">陈熹伟</div>
        </FormItem>
        <FormItem label="角色:">
          <div class="txt">组长</div>
        </FormItem>
      </Form>
    </div>
    <div v-if="changeCode == 'no'">
      <Form
        ref="formCustom"
        :model="formCustom"
        :rules="ruleCustom"
        :label-width="80"
      >
        <FormItem label="密码">
          <Button type="primary" @click="onChangeCode" class="ptab" id="btn1"
            >修改</Button
          >
        </FormItem>
      </Form>
    </div>

    <div class="form" v-else>
      <Form
        ref="formCustom"
        :model="formCustom"
        :rules="ruleCustom"
        :label-width="80"
      >
        <FormItem label="旧密码：" prop="age">
          <Input type="password" v-model="formCustom.age" number></Input>
        </FormItem>
        <FormItem label="新密码:" prop="passwd">
          <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="确认密码:" prop="passwdCheck">
          <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>

        <FormItem>
          <Button @click="handleReset('formCustom')" style="margin-right: 13px"
            >取消</Button
          >
          <Button type="primary" @click="handleSubmit('formCustom')"
            >确认</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import { postLogin } from "@/utils/api.js";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Age cannot be empty"));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please enter a numeric value"));
        } else {
          if (value < 18) {
            callback(new Error("Must be over 18 years of age"));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    return {
      userInfo: [],
      changeCode: "no",
      formCustom: {
        passwd: "",
        passwdCheck: "",
        age: "",
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        age: [{ validator: validateAge, trigger: "blur" }],
      },
    };
  },
  created() {
    this.onLogin();
  },
  methods: {
    onLogin() {
      postLogin().then((res) => {
        this.userInfo = res.user;
        // console.log(this.userInfo);
      });
      this.increment()
    },
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
    onChangeCode() {
      this.changeCode = "yes";
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
      this.changeCode = "no";
    },
  },
};
</script>
<style scoped>
#btn1 {
  margin-left: 80px;
}
.txt {
  float: left;
}
.form {
  float: left;
}
.box {
  height: 500px;
  width: 250px;
}
.ptab {
  /* float: left; */
  /* margin-bottom: 20px; */
  margin-left: 10px;
}
</style>
