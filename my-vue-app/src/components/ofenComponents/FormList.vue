<template>
  <div>
    <!-- 遮罩层 -->
    <div v-show="isShowForm" class="overlay" @click="close"></div>

    <!-- 抽屉容器 -->
    <div
      class="drawer"
      :style="{ width: size, transform: isShowForm ? 'translateX(0)' : 'translateX(100%)' }"
      :destroy-on-close="destroyOnClose"
    >
      <!-- 标题 -->
      <div class="drawer-header">
        <h3>{{ title }}</h3>
      </div>

      <!-- 内容插槽 -->
      <div class="drawer-body">
        <slot></slot>
      </div>

      <div class="actions">
        <button class="btn-primary" @click="submit">{{ confirmText }}</button>
        <button class="btn-cancel" @click="close">取消</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
  const props = defineProps({
    title: String,
    size:{
      type: String,
      default: "45%"
    },
    destroyOnClose:{
      type: Boolean,
      default: false
    },
    confirmText:{
      type: String,
      default: "提交"
    }
  })
// 控制抽屉显示状态
const isShowForm = ref(false);

// 打开抽屉
const open = () => {
  isShowForm.value = true;
};

// 关闭抽屉
const close = () => {
  isShowForm.value = false;
};

//提交
const emit = defineEmits(['submit'])
const submit = ()=>{
  emit('submit')
}
// 定义暴露的方法
defineExpose({
  open,
  close,
});
</script>

<style scoped>
/* 遮罩层样式 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 999;
}

/* 抽屉容器样式 */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease; /* 滑动动画 */
  overflow: hidden; /* 防止内容溢出 */
  display: flex; /* 使用 flex 布局 */
  flex-direction: column; /* 垂直布局 */
}

/* 抽屉标题样式 */
.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  flex-shrink: 0; /* 防止标题区域被压缩 */
}

.drawer-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

/* 抽屉内容样式 */
.drawer-body {
  flex: 1; /* 填满剩余空间 */
  padding: 20px;
  margin: 20px;
  overflow-y: auto; /* 如果内容超出，允许滚动 */
}
.actions{
  margin-bottom: 30px;
}

</style>