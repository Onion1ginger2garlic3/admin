import {defineStore} from "pinia"

export const useTestStore = defineStore('Test', {
    state(){
        return {
            student: []
        }
    },
    actions:{
        setStudentData(value){
            this.student = value
        }
    }
})
