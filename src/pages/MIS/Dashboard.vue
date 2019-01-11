<template>
   <div class="layout-padding">
      <q-btn color="primary" @click="modalRecordRenderedJob" label="Modal Record Rendered Job" />
         <ModalRecordRenderedJob :opened.sync="modal_rrj"  />
   </div>
</template>
<script>
  
   import ModalRecordRenderedJob from 'components/Form/RecordRenderedJob.vue'
   export default{
      components: {
         ModalRecordRenderedJob
      },
      data (){
         return{
            
            modal_rrj: false
         }
      },
      methods: {
         modalRecordRenderedJob(){
            this.modal_rrj=true
         }
        
      },
      mounted (){
         
      }
   }
</script>