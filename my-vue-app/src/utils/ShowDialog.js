import { ref } from 'vue';

export const DialogMessage = ref('');
export const DialogTitle = ref('');
export const isDialogVisible = ref(false);

export const showDialog = (title, message) => {
    DialogTitle.value = title;
    DialogMessage.value = message;
    isDialogVisible.value = true;

    return new Promise((resolve, reject) => {
        const confirmHandler = () => {
          resolve(true); // 用户点击确认时解析 Promise
          cleanup();
        };
    
        const cancelHandler = () => {
          reject(false); // 用户点击取消时拒绝 Promise
          cleanup();
        };
    
        const cleanup = () => {
          isDialogVisible.value = false; // 隐藏弹窗
          document.removeEventListener('confirm', confirmHandler);
          document.removeEventListener('cancel', cancelHandler);
        };
    
        document.addEventListener('confirm', confirmHandler);
        document.addEventListener('cancel', cancelHandler);
      });
};