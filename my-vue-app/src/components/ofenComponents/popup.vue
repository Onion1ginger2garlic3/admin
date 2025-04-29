<template>
  <div
      v-if="visible"
      :class="['popup', type === 'success' ? 'popup-success' : 'popup-error']"
  >
  {{ message }}
</div>
</template>

<script setup>
  import {watch} from 'vue'
  const props = defineProps({
      message: {
          type: String,
          required: true
      },
      type: {
          type: String,
          default: "success"
      },
      visible: {
          type: Boolean,
          required: true
      }
  });

  const emit = defineEmits(["update:visible"]);
  watch(
      () => props.visible, // 正确引用 visible
      (newVal) => {
          if (newVal) {
          setTimeout(() => {
              emit("update:visible", false); // 自动关闭弹窗
          }, 1500);
          }
      }
  );


</script>

<style scoped>
/* 弹窗通用样式 */
.popup {
position: fixed;
top: 20%;
left: 50%;
transform: translate(-50%, -50%);
padding: 20px 40px;
border-radius: 8px;
font-size: 16px;
text-align: center;
z-index: 1000;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
color: white;
display: flex;
align-items: center;
gap: 10px;
}

/* 成功弹窗样式 */
.popup-success {
background-color: #4caf50; /* 绿色背景 */
}

/* 失败弹窗样式 */
.popup-error {
background-color: #f44336; /* 红色背景 */
}
</style>