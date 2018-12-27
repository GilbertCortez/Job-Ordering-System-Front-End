<template>
   <div>
      <p class="caption">Software Development Type<font color="red">*</font></p>
      <div class="row q-pa-sm">
         <div class="col-3">
            <q-radio v-model="service_requested_details.software_development_type" val="Program Modification"  label="Program Modification" />
         </div>
         <div class="col-4">
            <q-radio v-model="service_requested_details.software_development_type" val="Program/System Development" label="Program/System Development" />
         </div>
      </div>
      <br>
      <p class="caption" >Program Name <font color="red">*</font></p>
      <div class="q-px-xs">
         <q-input value="" v-model="service_requested_details.program_name"   @blur="$v.service_requested_details.program_name.$touch" @keyup.enter="submitform" :error="$v.service_requested_details.program_name.$error"  />
      </div>
      <br>
       <p class="caption">Remarks <font color="red">*</font></p>
      <q-field  helper="Specify the details of Job Order(Purpose of the Modification/Development)" >
         <q-input value="" v-model="service_requested_details.remarks" blur="$v.service_requested_details.remarks.$touch" @keyup.enter="submitform" :error="$v.service_requested_details.remarks.$error"  />
      </q-field>
      <br>
      <div align="right">
         <q-btn color="primary" icon="send" label="Submit" @click="submitform" />
      </div>
   </div>
</template>

<script>
  import Vue from 'vue'
  import VueSwal from 'vue-swal'
  Vue.use(VueSwal)
  import { required, email } from 'vuelidate/lib/validators'

    export default {
      data (){
        return{
            requester_details:{
              requester: '',
              section: '',
              division: '',
            },
            service_request_details:{
              date_filed: '',
              service_requested_type: 1
            },
            service_requested_details: {
              software_development_type: 'Program Modification',
              program_name: '',
              remarks: ''
            }
            
        }
      },
      validations: {
        service_requested_details: {
          program_name: {required},
          remarks: {required}
        }
      },
      methods : {
          submitform (){
            this.$v.service_requested_details.$touch()
            if (this.$v.service_requested_details.$error) {
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
                  swal("Submitted!","Please wait for the request approval","success");
                } 
              })
            }
           
          }

      },
      mounted () {
           
      }
    }
</script>
<style>
  .swal-overlay {
  background-color: #1E88E5;
}
</style>