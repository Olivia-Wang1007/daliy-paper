<template>
  <div>
    <div class="btn">
      <Button type="primary" @click="onCreate" class="createBtn">创建</Button>
    </div>

    <div>
      <!-- 表格 -->
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <!-- 人员设置 -->
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="show1(index)"
            >人员设置</Button
          >
          <!-- 修改创建弹窗 -->
          <Modal
            v-model="modal3"
            title="修改/创建"
            @on-ok="onCreateGroup"
            @on-cancel="cancel"
          >
            <div id="myform">
              <Form :model="formItem" :label-width="60" inline:true>
                <FormItem label="组名称">
                  <Input
                    v-model="formItem.input"
                    style="dispaly:inline-block"
                  ></Input>
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    @click="handleSubmit('formInline')"
                    style="margin-left:104px"
                    >添加</Button
                  >
                </FormItem>
              </Form>
              <label for="mylist" id="label">类型</label>
              <div id="mylist">
                <Radio v-model="single1">实体组</Radio>
                <br />
                <Radio v-model="single2">自建组</Radio>
              </div>
            </div>
          </Modal>

          <!-- 人员设置弹窗 -->
          <Button
            type="info"
            size="small"
            style="margin-right: 5px"
            @click="show(index)"
            >修改</Button
          >
          <Modal
            v-model="modal2"
            title="人员设置"
            @on-ok="ok"
            @on-cancel="cancel"
          >
            <div id="myform">
              <div class="header">
                <Form :model="formItem" :label-width="60">
                  <FormItem label="查找">
                    <Input v-model="formItem.input"></Input>
                  </FormItem>
                </Form>
                <Button type="primary">添加</Button>
              </div>

              <Table
                stripe
                border
                width="70px"
                :columns="columns1"
                :data="data1"
              ></Table>
            </div>
          </Modal>
          <!-- 删除 -->
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
import { getGroup, postNewGroup } from "@/apis/group-manage.js";
export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      single1: false,
      single2: false,
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
      columns12: [
        {
          title: "ID",
          key: "id",
        },
        {
          title: "组",
          slot: "name",
        },
        {
          title: "类型",
          key: "type",
        },
        {
          title: "创建者ID",
          key: "creater_user_id",
        },
        {
          title: "操作",
          slot: "action",
          className: "colwidth",
          align: "center",
        },
      ],
      data6: [],
      columns1: [
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "角色",
          key: "age",
        },
        {
          title: "操作",
          key: "age",
        },
      ],
      data1: [],
    };
  },
  created() {
    this.getGroupList();
  },
  methods: {
    handleSubmit(){},
    onCreate() {
      this.modal3 = true;
    },
    onCreateGroup() {
      let params = {
        creater_user_id: "5e12a2d0-1875-11e8-9264-f7a7d7b45f55",
        type: 1,
        name: "开发一组11",
      };
      postNewGroup(params).then((res) => {
        console.log(res.data);
        this.data6.push(res.data);
      });
    },
    getGroupList() {
      getGroup().then((res) => {
        this.data6 = res.data.groups;
      });
    },
    show() {
      this.modal3 = true;

      // this.$Modal.info({
      //   title: "User Info",
      //   content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`,
      // });
    },
    show1() {
      this.modal2 = true;
      // this.$Modal.info({
      //   title: "User Info",
      //   content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`,
      // });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.createBtn {
  float: left;
}
.btn {
  height: 30px;
  width: 100%;
  margin-bottom: 20px;
}
.btns {
  margin-right: 700px;
  margin-bottom: 20px;
}
#mylist {
  overflow-y: auto;
  margin-left: 57px;
  border: 1px solid #dcdee2;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  width: 88%;
}
#label {
  margin-left: 20px;
}
.colwidth {
  width: 100px;
}
</style>
