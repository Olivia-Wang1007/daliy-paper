<template>
  <div>
    <div class="tab">
      <Button type="primary" @click="modal1 = true" id="newbtn">新建</Button>
      <div class="inputbox">
        <Input search enter-button="Search" placeholder="搜索..." />
      </div>
    </div>

    <!-- 弹窗区域 -->
    <Modal v-model="modal1" title="新建" @on-ok="ok" @on-cancel="cancel">
      <!-- 弹窗内表单区域 -->
      <div id="myform">
        <Form :model="formItem" :label-width="60">
          <FormItem label="角色">
            <Select v-model="formItem.select">
              <Option value="beijing">员工</Option>
              <Option value="shanghai">外协</Option>
            </Select>
          </FormItem>
          <FormItem label="姓名">
            <Input v-model="formItem.input" placeholder="请输入姓名..."></Input>
          </FormItem>
          <FormItem label="邮箱">
            <Input v-model="formItem.input" placeholder="请输入邮箱..."></Input>
          </FormItem>
          <FormItem label="工号">
            <Input v-model="formItem.input" placeholder="请输入工号..."></Input>
          </FormItem>
        </Form>
        <template>
          <Page :total="100" />
        </template>
      </div>
    </Modal>
    <!-- 表格区域 -->
    <Table stripe :columns="columns1" :data="userList" border>
      <template slot-scope="{ row, index }" slot="action">
        <!-- 人员设置 -->
        <Button
          type="info"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >禁用</Button
        >
        <Modal
          v-model="modal2"
          title="人员设置"
          @on-ok="ok"
          @on-cancel="cancel"
        >
          <div id="myform">
            <Form :model="formItem" :label-width="60">
              <FormItem label="姓名">
                <Input v-model="formItem.input"></Input>
              </FormItem>
            </Form>
          </div>
        </Modal>
        <!-- 修改 -->
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show1(index)"
          >修改</Button
        >
        <Modal
          v-model="modal3"
          title="修改/创建"
          @on-ok="ok"
          @on-cancel="cancel"
        >
          <div id="myform">
            <Form :model="formItem" :label-width="60">
              <FormItem label="姓名">
                <Input v-model="formItem.input"></Input>
              </FormItem>
            </Form>
          </div>
        </Modal>
        <!-- 删除 -->
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <!-- 页码区域 -->
    <Page :total="100" show-sizer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal3: false,
      modal2: false,
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: "",
      },
      modal1: false,
      columns1: [
        {
          title: "ID",
          key: "id",
        },
        {
          title: "用户名",
          key: "user_name",
        },
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "Action",
          slot: "action",
          className: "colwidth",
          align: "center",
        },
      ],
      userList: [],
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      this.$http.get(this.$api.getUsers.url).then((res) => {
        this.userList = res.users;
      });
    },
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    show() {
      this.modal2 = true;
      // this.$Modal.info({
      //   title: "User Info",
      //   content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`,
      // });
    },
    show1() {
      this.modal3 = true;
      // this.$Modal.info({
      //   title: "User Info",
      //   content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`,
      // });
    },
    remove(index) {
      this.userList.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.inputbox {
  margin-right: 80px;
}
#newbtn {
  margin-right: 1089px;
}
.tab {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.colwidth {
  width: 100px;
}
</style>
