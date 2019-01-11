<template>
   <div>
      <p class="caption">Technical Support Type<font color="red">*</font></p>
      <div class="row q-pa-sm">
         <div class="col-3">
            <q-radio v-model="job_order.service_requested_details.technical_support_type" val="Check up"  label="Check up" />
         </div>
         <div class="col-4">
            <q-radio v-model="job_order.service_requested_details.technical_support_type" val="Software Installation" label="Software Installation" />
         </div>
         <div class="col-2">
            <q-radio v-model="job_order.service_requested_details.technical_support_type" val="Repair" label="Repair" />
         </div>
         <div class="col-3">
            <q-radio v-model="job_order.service_requested_details.technical_support_type" val="Virus Detection" label="Virus Detection" />
         </div>
      </div>
      <br>
      <p class="caption">Type of unit <font color="red">*</font></p>
      <div class="row q-pa-sm">
         <div class="col-3">
            <q-radio v-model="job_order.service_requested_details.unit_type" val="Desktop"  label="Desktop" />
         </div>
         <div class="col-4">
            <q-radio v-model="job_order.service_requested_details.unit_type" val="Laptop" label="Laptop" />
         </div>
         <div class="col-2">
            <q-radio v-model="job_order.service_requested_details.unit_type" val="Printer" label="Printer" />
         </div>
         <div class="col-3">
            <q-radio v-model="job_order.service_requested_details.unit_type" val="Others" label="Others" />
         </div>
      </div>
      <br>
      <p class="caption" >Unit Property No. <font color="red">*</font></p>
      <div class="q-px-xs">
         <q-input value="" v-model="job_order.service_requested_details.property_no"   @blur="$v.job_order.service_requested_details.property_no.$touch" @keyup.enter="submitform" :error="$v.job_order.service_requested_details.property_no.$error"  />
      </div>
      <br>
      <p class="caption">Remarks:</p>
      <q-field  helper="Specify the details of Job Order" >
         <q-input value="" v-model="job_order.service_requested_details.remarks"  />
      </q-field>
      <br>
      <div align="right">
         <q-btn color="primary" icon="send" label="Submit" @click="submitform" />
      </div>
   </div>
</template>

<script>
    import {  LocalStorage } from 'quasar'
  import getDateTime from '../../functions/getDateTime.js'
  import Vue from 'vue'
  import VueSwal from 'vue-swal'
  Vue.use(VueSwal)
  import { required, email } from 'vuelidate/lib/validators'

    export default {
      data (){
        return{
          job_order: {
            job_order_no: '',
            requester_details:{
              requester: '',
              section: '',
              division: '',
            },
            service_request_details:{
              date_filed: getDateTime(),
              service_requested_type: 'Technical Support',
                supervisor_noted_by: '',
                date_noted: ''
            },
            service_requested_details: {
              technical_support_type: 'Check up',
              unit_type: 'Desktop',
              property_no: '',
              remarks: ''
            }, 
            request_receiving_details:{
                 date_received: '',
                 received_by: '',
                 mis_noted_by: ''
              },
            request_assessment_details:{
                assessed_by: '',
                date_assessed: '',
                findings: '',
                type_of_problem: '',
                others: '',
                delivery_date: '',
                date_noted: ''
              },
              action_taken_details: {
                date_finished: '',
                action_taken_by: '',
                worker_hours_utilized: '',
              },
            service_status: "For Supervisor's Acknowledgement",
            not_operational_remarks: '',
            service_remarks: ''
          }
        }
      },
      validations: {
        job_order: {
          service_requested_details: {
            property_no: {required}
          }
        }
      },
      methods : {
          submitform (){
            this.$v.job_order.service_requested_details.$touch()
            if (this.$v.job_order.service_requested_details.$error) {
              swal("Form Error"," Please check the required field","warning")
              return
            }
            else{
              swal({
                title: "Are you sure?",
                text: "Once submitted, you will able to modify your request in 'Job Orders' Section!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((toSubmit) => {
                if (toSubmit) {
                  this.job_order.job_order_no=String(+new Date().getFullYear()).substring(4,2)+"-0-"+"00".substring(0, "00".length - ((this.$dbCon.services.joborders.data.length +1 )+"").length)+ (this.$dbCon.services.joborders.data.length+1);

                  this.$dbCon.services.joborders.create(this.job_order).then(result => {
                  swal("Submitted! JO#"+this.job_order.job_order_no,"Please wait for the request approval","success").then(result =>{
                      window.location.href= "/#/Requester/JobOrder";
                  });

              })
                

                 
                } 
              })
            }
           
          }

      },
      mounted () {
  

             var logged_in_user= JSON.parse(LocalStorage.get.item("logged_in_user"))
           this.job_order.requester_details.requester=logged_in_user.id_no
        
      }
    }
</script>
