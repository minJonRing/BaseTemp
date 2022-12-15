<template>
  <div class="dashboard-container">
    <el-button type="primary" @click="handleClick">显示错误信息</el-button>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item.name" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      currentRole: "adminDashboard",
      //
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
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
    //
    onLoad() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }

      this.handleAjax().then(({ list, total }) => {
        this.loading = false;
        this.list.push(...list);
        //
        if (this.list.length >= total) {
          this.finished = true;
        }
      });
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    handleAjax() {
      return new Promise((r) => {
        const list = [];
        for (let i = 0; i < 4; i++) {
          list.push({ index: this.list.length + 1, name: "adsad" });
        }
        setTimeout(() => {
          r({ list, total: 4 });
        }, 600);
      });
    },
  },
};
</script>
