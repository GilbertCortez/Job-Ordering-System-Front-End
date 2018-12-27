<template>
   <div>
      <p class="caption">Website Modification Type<font color="red">*</font></p>
      <div class="row q-pa-sm">
         <div class="col-3">
            <q-radio v-model="service_requested_details.website_modification_type" val="Intranet Update"  label="Intranet Update" />
         </div>
         <div class="col-3">
            <q-radio v-model="service_requested_details.website_modification_type" val="Social Media Update" label="Social Media Update" />
         </div>
         <div class="col-3">
            <q-radio v-model="service_requested_details.website_modification_type" val="Website Update" label="Website Update" />
         </div>
          <div class="col-3">
            <q-radio v-model="service_requested_details.website_modification_type" val="Others" label="Others" />
         </div>
      </div>
      <br>
       <p class="caption">Remarks</p>
      <q-field  helper="Specify the details of Job Order" >
         <q-input value="" v-model="service_requested_details.remarks" blur="$v.service_requested_details.remarks.$touch" @keyup.enter="submitform" :error="$v.service_requested_details.remarks.$error" />
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
              service_requested_type: 2
            },
            service_requested_details: {
              website_modification_type: 'Intranet Update',
              remarks: ''
            }
            
        }
      },
      validations: {
        service_requested_details: {
          remarks: {required}
        }
      },
      methods : {
          submitform (){
            this.$v.service_requested_details.$touch()
            if (this.$v.service_requested_details.$error) {
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