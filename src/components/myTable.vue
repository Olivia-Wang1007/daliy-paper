<template>
  <Tabs type="card">
    <TabPane label="个人中心">
      <userCenter></userCenter>
    </TabPane>
    <TabPane label="用户管理">
      <userManageTable></userManageTable>
    </TabPane>
    <TabPane label="组管理"><groupTable></groupTable></TabPane>
    <TabPane label="任务管理"> <taskManageTable></taskManageTable></TabPane>
    <TabPane label="工时录入"> <workTime></workTime></TabPane>
  </Tabs>
</template>
<script>
import userCenter from "@/components/userCenter.vue";
import userManageTable from "@/components/userManageTable.vue";
import groupTable from "@/components/groupTable.vue";
import taskManageTable from "@/components/taskManageTable.vue";
import workTime from "@/components/workTime.vue";
export default {
  components: {
    userCenter,
    userManageTable,
    groupTable,
    taskManageTable,
    workTime
  },
};
</script>
