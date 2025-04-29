import { ref } from 'vue';

export const popupMessage = ref('');
export const popupType = ref('success');
export const isPopupVisible = ref(false);

export const Msg = (message, type = 'success') => {
  popupMessage.value = message;
  popupType.value = type;
  isPopupVisible.value = true;
};