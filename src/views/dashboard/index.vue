<template>
  <div class="dashboard-container">
    <el-button type="primary" @click="handleClick">显示错误信息</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      currentRole: "adminDashboard",
    };
  },
  computed: {
    ...mapGetters(["roles"]),
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "editorDashboard";
    }
  },
  methods: {
    handleClick() {
      console.log(a);
    },
  },
};
</script>
