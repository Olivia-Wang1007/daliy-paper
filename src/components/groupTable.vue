<template>
  <div>
    <Button type="primary" @click="modal3 = true">新建</Button>

    <div>
      <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <!-- 人员设置 -->
          <Button
            type="info"
            size="small"
            style="margin-right: 5px"
            @click="show(index)"
            >修改</Button
          >
          <Modal
            v-model="modal2"
            title="修改/创建"
            @on-ok="ok"
            @on-cancel="cancel"
          >
            <div id="myform">
              <Form :model="formItem" :label-width="60" inline="true">
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
                <List header="Header" footer="Footer" border size="small">
                  <ListItem>This is a piece of text.</ListItem>
                  <ListItem>This is a piece of text.</ListItem>
                  <ListItem>This is a piece of text.</ListItem>
                </List>
              </div>
            </div>
          </Modal>
          <!-- 修改 -->
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="show1(index)"
            >人员设置</Button
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
          title: "Name",
          slot: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
        },
      ],
      columns1: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          date: "2016-10-01",
        },
      ],
    };
  },
  methods: {
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
#mylist {
  height: 100px;
  overflow-y: auto;
  margin-left: 57px;
}
#label {
  margin-left: 20px;
}
</style>
