<template>
   <div>
      <q-modal  v-model="opened"  no-backdrop-dismiss no-esc-dismiss >
         <div>
            <q-toolbar slot="header" >
               <q-btn
                  flat
                  round
                  dense
                  @click="closeModal"
                  icon="keyboard_arrow_left"

                  />
               <q-toolbar-title>
                  Schedule Delivery Date
               </q-toolbar-title>
            </q-toolbar>
         </div>
         <div class="q-pa-md row">
               <div class="col-12">
                <q-datetime-picker :value="model" type="date" v-bind:min="new Date()" @change=" val => { model = val; processDate() }" />
               </div>
               <div class="col-12" align="right">
                  <br>
                  <q-btn color="grey" label="Skip" @click="skip" /> &nbsp;
                  <q-btn color="primary" label="Submit" @click="submit" />
               </div>
         </div>
      </q-modal>
   </div>
</template>
<script>
    import prettifyDate from '../../functions/prettifyDateTime.js'
    import getDateTime from '../../functions/getDateTime.js'
    import { LocalStorage } from 'quasar'
	export default {
      props: ['opened','jo_no'],
		data (){
			return {
            processedDate: prettifyDate.prettifyDate(new Date()),
            model: new Date()
			}
		},
      methods: {
         closeModal() {
            this.$parent.modal_rr= false
            this.$parent.closeModal()
            this.opened=false
         },
          processDate(){
            this.processedDate = prettifyDate.prettifyDate(this.model);
         },
         skip(){
            swal({
                    title: "No Scheduled Delivery Date?",
                    text: "Once confirmed, Job Order will be updated as not yet scheduled.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((toSubmit) => {
                    if (toSubmit) {
            this.$dbCon.services.joborders.find({ 
                  query :{
                     "_id" : this.jo_no
                  }
               }).then( data =>{
                  var updated_job_order= data.data[0]
                  console.log(updated_job_order)
                  updated_job_order.request_assessment_details.delivery_date='Not Yet Scheduled'
                  updated_job_order.request_receiving_details.received_by= JSON.parse(LocalStorage.get.item("logged_in_user")).id_no
                  updated_job_order.request_receiving_details.date_received= getDateTime()
                  updated_job_order.service_status="For MIS Acknowledgement"
                   this.$dbCon.services.joborders.update(this.jo_no, updated_job_order).then(result => {
                                  console.log(result)
                              })
                   this.closeModal()
                   swal("Updated!", "Job Order Details Updated!", "success")
               });
                } }); 
         },
         submit(){
            swal({
                    title: "Schedule Delivery Date?",
                    text: "Once confirmed, chosen delivery date will be saved.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((toSubmit) => {
                    if (toSubmit) {
            this.$dbCon.services.joborders.find({ 
                  query :{
                     "_id" : this.jo_no
                  }
               }).then( data =>{
                  var updated_job_order= data.data[0]
                  console.log(updated_job_order)
                  updated_job_order.request_assessment_details.delivery_date=this.processedDate
                  updated_job_order.request_receiving_details.received_by= JSON.parse(LocalStorage.get.item("logged_in_user")).id_no
                  updated_job_order.request_receiving_details.date_received= getDateTime()
                  updated_job_order.service_status="For MIS Acknowledgement"
                   this.$dbCon.services.joborders.update(this.jo_no, updated_job_order).then(result => {
                                  console.log(result)
                              })
                   this.closeModal()
                   swal("Scheduled!", "Delivery date saved!", "success")
               });
                } }); 
         
         }
      }
	}
</script>
   