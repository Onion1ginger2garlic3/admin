<script setup>
import { provide } from 'vue';
import popupDialog from '@/components/ofenComponents/popupDialog.vue';
import { DialogMessage, DialogTitle, isDialogVisible, showDialog } from '@/utils/ShowDialog';
import popup from '@/components/ofenComponents/popup.vue';
import { popupMessage, popupType, isPopupVisible} from '@/utils/msg';

// 提供 showDialog 方法
provide('showDialog', showDialog);
</script>

<template>
  <popup
    v-model:visible="isPopupVisible"
    :message="popupMessage"
    :type="popupType"
  />
  <!-- 全局弹窗组件 -->
  <popupDialog
    v-model:visible="isDialogVisible"
    :message="DialogMessage"
    :title="DialogTitle"
  />
  <router-view />
</template>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>