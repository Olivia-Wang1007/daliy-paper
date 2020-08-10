<template>
  <div class="layout">
    <Layout id="lo">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <h3 id="til">Daily Paper</h3>
          <div class="layout-nav">
            <Dropdown id="dropd">
              <a href="javascript:void(0)" class="username">
                <Icon type="md-person" />username

                <Icon type="ios-arrow-down"> </Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>个人中心 </DropdownItem>
                <DropdownItem>退出 </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Menu>
      </Header>
      <Content :style="{ padding: '20px 50px' }">
        <div style="min-height: 200px;">
          <myTable></myTable>
        </div>
      </Content>
    </Layout>
  </div>
</template>
<script>
import myTable from "@/components/myTable.vue";
export default {
  components: {
    myTable,
  },
};
</script>
<style scoped>
#til {
  color: white;
  float: left;
}
#dropd {
  color: white;
  float: right;
}
.username {
  color: white;
  font-size: 17px;
}
.layout {
  margin-top: 0px;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
#content {
  height: 400px;
  width: 100%;
}
</style>
