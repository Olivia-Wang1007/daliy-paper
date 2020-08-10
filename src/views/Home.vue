<template>
  <div class="home">
    <div class="login-box">
      <p id="title">Daily Paper</p>
      <div id="mediumbox">
        <Form
          ref="formInline"
          :model="formInline"
          :rules="ruleInline"
          inline:true
        >
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="formInline.password"
              placeholder="Password"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <br />
          <FormItem>
            <Button type="primary" @click="onLogin">登陆</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { postLogin } from "@/utils/api.js";
export default {
  name: "Home",
  data() {
    return {
      userInfo: [],
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    onLogin() {
    //           03920159
    //            e10adc3949ba59abbe56e057f20f883e
      let params = {
        userName: this.formInline.username,
        password: this.formInline.password,
      };
      if (this.formInline.username === "" || this.formInline.password === "") {
        alert("账号或密码不能为空");
      } else {
        postLogin(params).then((res)=>{
          alert("登录成功！")
          this.userInfo=res.data.user;
          console.log(res);

        });
      }
    },
  },
};
</script>
<style scoped>
#bigbox {
  width: 800px;
  height: 500px;
  border: 2px solid black;
  position: absolute;
  margin: auto;
  top: 550px;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
}
.home {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("../assets/img/login-bg.jpg");
  background-size: cover;
  background-position: center;
}
#title {
  height: 80px;
  width: 200px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  right: 300px;
  left: 300px;
  display: inline-block;
  margin: 0 50px;
  margin-top: 30px;
}
#mediumbox {
  height: 200px;
  width: 350px;
  border: 1px solid #2d8cf0;
  margin: 300px 400px;
  float: right;
  padding: 30px;
  border-radius: 4px;
}
.s1 {
  width: 80px;
  height: 20px;

  margin: 0 auto;
  display: inline-block;
}
.s2 {
  display: inline;
}
.srk {
  margin: 30px 30px 30px 30px;
}
#btn {
  margin-right: 50px;
}
.login-box {
  border: 1px solid hotpink;
  /* background-color: #fff; */
}
</style>
