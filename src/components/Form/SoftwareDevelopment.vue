<template>
   <div>
      <p class="caption">Software Development Type<font color="red">*</font></p>
      <div class="row q-pa-sm">
         <div class="col-3">
            <q-radio v-model="job_order.service_requested_details.software_development_type" val="Program Modification"  label="Program Modification" />
         </div>
         <div class="col-4">
            <q-radio v-model="job_order.service_requested_details.software_development_type" val="Program/System Development" label="Program/System Development" />
         </div>
      </div>
      <br>
      <p class="caption" >Program Name <font color="red">*</font></p>
      <div class="q-px-xs">
         <q-input value="" v-model="job_order.service_requested_details.program_name"   @blur="$v.job_order.service_requested_details.program_name.$touch" @keyup.enter="submitform" :error="$v.job_order.service_requested_details.program_name.$error"  />
      </div>
      <br>
       <p class="caption">Remarks <font color="red">*</font></p>
      <q-field  helper="Specify the details of Job Order(Purpose of the Modification/Development)" >
         <q-input value="" v-model="job_order.service_requested_details.remarks" blur="$v.job_order.service_requested_details.remarks.$touch" @keyup.enter="submitform" :error="$v.job_order.service_requested_details.remarks.$error"  />
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
              service_requested_type: "Software Development",
                supervisor_noted_by: '',
                date_noted: ''
            },
            service_requested_details: {
              software_development_type: 'Program Modification',
              program_name: '',
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
            program_name: {required},
            remarks: {required}
          }
        }
      },
      methods : {
          submitform (){
            this.$v.job_order.service_requested_details.$touch()
            if (this.$v.job_order.service_requested_details.$error) {
              swal("Form Error"," Please check the required fields","warning")
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
                  this.job_order.job_order_no=String(+new Date().getFullYear()).substring(4,2)+"-1-"+"00".substring(0, "00".length - ((this.$dbCon.services.joborders.data.length +1 )+"").length)+ (this.$dbCon.services.joborders.data.length+1);

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
