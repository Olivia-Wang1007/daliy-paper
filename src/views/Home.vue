<template>
  <div class="home">
    <p id="title">Daily Paper</p>
    <div id="mediumbox">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
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
          <router-link to="/HomePage/HomePage"
            ><Button type="primary" @click="handleSubmit('formInline')"
              >登陆</Button
            ></router-link
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
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
  position: relative;
}
#title {
  height: 80px;
  width: 200px;
  font-size: 30px;
  font-weight: bold;
  color: black;
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
  margin: 0 auto;
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
</style>
