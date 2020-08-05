<template>
  <div>
    <Button type="primary" @click="modal3 = true">创建项目</Button>

    <div>
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="operation">
          <!-- 人员设置 -->
          <Button
            type="info"
            size="small"
            style="margin-right: 5px"
            @click="show(index)"
            >人员设置</Button
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
          <!-- 任务设置 -->
          <Button
            type="info"
            size="small"
            style="margin-right: 5px"
            @click="show(index)"
            >任务设置</Button
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
          <!-- 更新进度 -->
          <Button
            type="info"
            size="small"
            style="margin-right: 5px"
            @click="show(index)"
            >更新进度</Button
          >
          <Modal
            v-model="modal2"
            title="更新进度"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
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
          title: "名称",
          slot: "name",
        },
        {
          title: "类型",
          key: "type",
        },
        {
          title: "操作",
          slot: "operation",
          className: "colwidth",
          align: "center",
        },
      ],
      data6: [

      ],
    };
  },
    created() {
    this.getTaskList();
  },
  methods: {
        getTaskList() {
      this.$http.get(this.$api.getTaskList.url).then((res) => {
        this.data6 = res.groups;
      });
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
.btns {
  margin-right: 700px;
  margin-bottom: 20px;
}
.colwidth {
  width: 450px;
}
</style>
