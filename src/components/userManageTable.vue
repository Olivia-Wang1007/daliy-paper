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
              <Option value="zuzhang">组长</Option>
              <Option value="yuangong">员工</Option>
              <Option value="waixie">外协</Option>
            </Select>
          </FormItem>
          <FormItem label="姓名">
            <Input v-model="formItem.name" placeholder="请输入姓名..."></Input>
          </FormItem>
          <FormItem label="邮箱">
            <Input v-model="formItem.email" placeholder="请输入邮箱..."></Input>
          </FormItem>
          <FormItem
            label="工号"
            v-if="formItem.select == 'zuzhang' || formItem.select == 'yuangong'"
          >
            <Input
              v-model="formItem.number"
              placeholder="请输入工号..."
            ></Input>
          </FormItem>
        </Form>
      </div>
    </Modal>
    <!-- 表格区域 -->
    <div class="table">
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
    </div>

    <!-- 页码区域 -->
    <Page
      size="small"
      show-total
      show-elevator
      show-sizer
      :limit="limit"
      :total="total"
      :offset="offset"
      :totalPages="totalPages"
      @on-change="onPageChange"
      style="float:left;margin-top:20px;"
    />
  </div>
</template>
<script>
import { postNewUser, getUsers } from "@/apis/user-manage.js";
export default {
  data() {
    return {
      limit: 10,
      offset: 2,
      total: 0,
      totalPages: 0,
      modal3: false,
      modal2: false,
      formItem: {
        name: "",
        email: "",
        number: "",
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
          width: 260,
        },
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "邮箱",
          key: "email",
        },
        {
          title: "角色",
          key: "role",
        },
        {
          title: "状态",
          key: "status",
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
  mounted: function() {
    this.newUser();
  },
  methods: {
    newUser() {
      let params = {
        name: this.formItem.name,
        user_name: this.formItem.number,
        role: "4",
        email: this.formItem.email,
      };
      postNewUser(params).then((res) => {
        this.userList.push(res.data.user);
      });
    },
    getUserList() {
      let params = {
        limit: this.limit,
        offset: this.offset,
      };
      getUsers(params)
        .then((res) => {
          // console.log(res)
          this.userList = res.data.users;
          this.limit = res.data.meta.limit;
          this.offset = res.data.meta.offset;
          this.total = res.data.meta.totalPages;
          this.totalPages = Math.ceil(
            res.data.meta.totalPages / res.data.meta.limit
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onPageChange(offset1) {
      // console.log(offset1);
      this.offset = offset1;
      this.getUserList();
    },
    ok() {
      this.formItem.select = "";
      // this.$Message.info("Clicked ok");
    },
    cancel() {
      console.log(this.formItem.select);
      this.formItem.select = "";
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
.table {
  margin: 0 auto;
}
.inputbox {
  margin-right: 80px;
}
#newbtn {
  float: left;
}
.tab {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.colwidth {
  width: 100px;
}
</style>
