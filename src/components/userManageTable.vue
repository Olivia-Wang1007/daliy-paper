<template>
  <div>
    <Button type="primary" @click="modal1 = true">新建</Button>
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
      </div>
    </Modal>
    <!-- 表格区域 -->
    <Table stripe :columns="columns1" :data="data1"></Table>
    <!-- 页码区域 -->
    <Page :total="100" show-sizer />
  </div>
</template>
<script>
export default {
  data() {
    return {
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
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
};
</script>
<style scoped></style>
