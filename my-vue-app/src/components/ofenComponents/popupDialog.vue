<template>
    <div v-if="visible" class="dialog-overlay">
      <div class="dialog-box">
        <div class="dialog-header">
          <h3>{{ title }}</h3>
        </div>
        <div class="dialog-body">
          <p>{{ message }}</p>
        </div>
        <div class="dialog-footer">
          <button @click="confirm" class="confirm-btn">确认</button>
          <button @click="cancel" class="cancel-btn">取消</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  title: {
    type: String,
    default: '提示',
  },
  message: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});
  // 定义 emits
  const emit = defineEmits(['update:visible', 'confirm', 'cancel']);
  
  // 确认按钮点击事件
  function confirm() {
    emit('confirm'); // 触发确认事件
    document.dispatchEvent(new Event('confirm')); // 触发全局事件
    emit('update:visible', false); // 关闭弹窗
  }
  
  // 取消按钮点击事件
  function cancel() {
    emit('cancel'); // 触发取消事件
    document.dispatchEvent(new Event('cancel')); // 触发全局事件
    emit('update:visible', false); // 关闭弹窗
  }
</script>

  
<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog-box {
  background: white;
  border-radius: 8px;
  width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dialog-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.dialog-body {
  margin: 20px 0;
  font-size: 16px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.confirm-btn {
  background-color: #81c683;
  color: white;
  border: none;
  padding: 6px 12px; /* 调小按钮的内边距 */
  font-size: 14px; /* 调小字体大小 */
  border-radius: 4px;
  cursor: pointer;
}

.confirm-btn:hover {
  background-color: #45a049;
}

.cancel-btn {
  background-color: #d77e77;
  color: white;
  border: none;
  padding: 6px 12px; /* 调小按钮的内边距 */
  font-size: 14px; /* 调小字体大小 */
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn:hover {
  background-color: #e53935;
}
</style>