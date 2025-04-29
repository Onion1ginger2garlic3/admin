import {ref} from 'vue'

export const DialogMessage = ref('');
export const DialogTitle = ref('')
export const isDialogVisible = ref(false);
export const showDialog = (title, message)=>{
    DialogTitle.value = title
    DialogMessage.value = message,
    isDialogVisible.value = true;
    return new Promise((resolve, reject) => {
        const confirmHandler = () => {
          resolve(true);
          cleanup();
        };
    
        const cancelHandler = () => {
          reject(false);
          cleanup();
        };
    
        const cleanup = () => {
          isDialogVisible.value = false;
          document.removeEventListener('confirm', confirmHandler);
          document.removeEventListener('cancel', cancelHandler);
        };
    
        document.addEventListener('confirm', confirmHandler);
        document.addEventListener('cancel', cancelHandler);
      });
};
