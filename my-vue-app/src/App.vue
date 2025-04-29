<script setup>
    import {popupMessage, popupType, isPopupVisible} from '@/utils/msg'
    import Popup from '@/components/ofenComponents/popup.vue'
    import { DialogMessage,DialogTitle,isDialogVisible,showDialog } from '@/utils/ShowDialog';
    import popupDialog from '@/components/ofenComponents/popupDialog.vue';

    provide('showDialog', showDialog);
</script>

<template>
    <!-- 弹窗组件 -->
    <Popup 
        v-model:visible="isPopupVisible"
        :message="popupMessage"
        :type="popupType"
    />
    <popupDialog
        v-model:visible="isDialogVisible"
        :message="DialogMessage"
        :title="DialogTitle"
    />
    
    <router-view/>
    
</template>


<style scoped>
#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>