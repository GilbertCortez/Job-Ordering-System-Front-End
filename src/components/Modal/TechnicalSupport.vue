<template>
   <div>
      <q-modal  v-model="opened" maximized  no-backdrop-dismiss no-esc-dismiss >
         <div>
            <q-toolbar slot="header" >
               <q-btn
                  flat
                  round
                  dense
                  @click="closeModal"
                  icon="keyboard_arrow_left"
                  />
               <q-toolbar-title >
                  Job Order Details
               </q-toolbar-title>
            </q-toolbar>
         </div>
         <div class="q-pa-md row">
            <div class="col-8">
               <div class="row">
                  <div class="col-5">
                     <span class="q-caption">Job Order No</span>
                     <q-input class="q-body-1" readonly  v-model="job_order.job_order_no" />
                  </div>
                  <div class="col-1" ></div>
                  <div class="col-6">
                     <span class="q-caption">Service Type</span>
                     <q-input class="q-body-1"  readonly v-model="job_order.service_request_details.service_requested_type"  />
                  </div>
               </div>
               <div class="col-12" >
                  <div class="col-6">
                     <span class="q-caption">Type of Unit</span>
                     <div class="row q-pa-sm q-body-1">
                        <q-radio v-model="job_order.service_requested_details.unit_type" class="col-6"  val="Desktop"  label="Desktop"  />
                        <q-radio  v-model="job_order.service_requested_details.unit_type" class="col-6" val="Laptop" label="Laptop" />
                        <q-radio  v-model="job_order.service_requested_details.unit_type" class="col-6"  val="Printer" label="Printer" />
                        <q-radio  v-model="job_order.service_requested_details.unit_type"  class="col-6" val="Others" label="Others" />
                     </div>
                  </div>
                  <div class="col-6">
                     <span class="q-caption">Unit Property No</span>
                     <q-input class="q-body-1"  v-model="job_order.service_requested_details.property_no" readonly value="FAD-HR/DOLLY"  />
                  </div>
               </div>
               <div class="col-12">
                  <br>
                  <div class="col-6">
                     <span class="q-caption">Technical Support Type</span>
                     <div class="row q-pa-sm q-body-1">
                        <q-radio v-model="job_order.service_requested_details.technical_support_type" class="col-6"  val="Check up"  label="Check up" readonly />
                        <q-radio v-model="job_order.service_requested_details.technical_support_type" class="col-6" val="Software Installation" label="Software Installation" readonly />
                        <q-radio v-model="job_order.service_requested_details.technical_support_type" class="col-6"  val="Repair" label="Repair" readonly/>
                        <q-radio v-model="job_order.service_requested_details.technical_support_type"  class="col-6" val="Virus Detection" label="Virus Detection" readonly />
                     </div>
                  </div>
                  <div class="col-6">
                     <span class="q-caption">Remarks</span>
                     <q-input class="q-body-1" v-model="job_order.service_requested_details.remarks" readonly color="primary" type="textarea" rows="2" value="Hindi ko magamit ng maayos ang monitor. Wala akong makita." />
                  </div>
               </div>
               <div class="col-6" ></div>
               <br>
               <div class=" row col-6" style="float:right">
                  <div  v-bind:style="{'display': supervisors_note_button}">
                     <q-btn icon="note_add" label="Take note of this" @click="supervisors_note" color="black" outline />
                  </div>
                  &nbsp;
                  <div v-bind:style="{'display':mis_staff_review_button } ">
                     <q-btn icon="bookmark" label="Mark as reviewed" @click="mis_review" color="black" outline />
                  </div>
                   &nbsp;
                  <div>
                     <q-btn icon="edit" label="Edit Job Order Details" color="blue" outline />
                  </div>
               </div>
            </div>
            <div class="col-4 q-pa-lg">
               <q-scroll-area style="width: 100%; height: 500px;border:3px solid lightblue;border-radius: 5px;">
                  <center>
                     <div class="q-display-1">
                        <q-icon name="history"/>
                        History
                     </div>
                     <table class="q-body-1">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Event</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr id="history1">
                            <td >{{JSON.parse(jod).service_request_details.date_filed}}</td>
                            <td >Job Order Filed</td>
                            <td >Waiting for Supervisor's Acknowledgement.</td>
                          </tr>
                          <tr id="history2">
                            <td>{{JSON.parse(jod).service_request_details.date_noted}}</td>
                            <td>Acknowledged By Supervisor</td>
                            <td>Acknowledged by {{JSON.parse(jod).service_request_details.supervisor_noted_by}}.<br>
                                                    Job Request is up for review</td>
                          </tr>
                          <tr id="history3">
                            <td ></td>
                            <td >Reviewed by MIS Staff</td>
                            <td></td>
                          </tr>
                          <tr id="history4">
                            <td></td>
                            <td>Acknowledged by MIS Head</td>
                            <td></td>
                          </tr>
                          <tr id="history5">
                            <td></td>
                            <td>Job Order Rendered</td>
                            <td></td>
                          </tr>
                          <tr id="history6">
                            <td></td>
                            <td>Conformed</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                  </center>
               </q-scroll-area>
            </div>
         </div>
      </q-modal>
      <ModalRecordReview :opened.sync="modal_rr" :jo_no="JSON.parse(this.jod)._id" />
   </div>
</template>
<script>
    import getDateTime from '../../functions/getDateTime.js'
    import ModalRecordReview from 'components/Form/RecordReview.vue' 
    import { LocalStorage } from 'quasar'
    import Vue from 'vue'
    import VueSwal from 'vue-swal'
    Vue.use(VueSwal)
    export default {
        components: {
          ModalRecordReview 
        },
        props: ['opened', 'jod', 'from'],
        data() {
            return {
                modal_rr: false, 
                supervisors_note_button: 'none',
                user_is_supervisor: false,
                mis_staff_review_button: 'none',
                job_order: {
                    job_order_no: '',
                    requester_details: {
                        requester: '',
                        section: '',
                        division: '',
                    },
                    service_request_details: {
                        date_filed: '',
                        service_requested_type: 'Technical Support'
                    },
                    service_requested_details: {
                        technical_support_type: 'Check up',
                        unit_type: 'Desktop',
                        property_no: '',
                        remarks: ''
                    },
                    service_status: "For Supervisor's Acknowledgement",
                    _id: ''
                }
            }
        },
        methods: {
            supervisors_note() {  
                swal({
                        title: "Acknowledge this Job Order Request?",
                        text: "Once confirmed, this Job Order Request will be sent to MIS!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                    .then((toSubmit) => {
                        if (toSubmit) {
                            var updated_job_order = JSON.parse(this.jod)
                            updated_job_order.service_status = "For Review"
                            updated_job_order.service_request_details.date_noted = getDateTime()
                            updated_job_order.service_request_details.supervisor_noted_by = JSON.parse(LocalStorage.get.item("logged_in_user")).id_no
                            delete updated_job_order.__index

                            this.$dbCon.services.joborders.update(this.job_order._id, updated_job_order).then(result => {
                    
                            })
                            this.closeModal()
                            swal("Acknowledged!", "Job Order Request is now up for review", "success")

                        }
                    })

            },
            closeModal() {
                this.$parent.modal_ts = false;
                this.opened = false
            },
            validateSupervisor() {
                this.$dbCon.services.maintenance.find({
                    "query": {
                        "supervisors.id_no": JSON.parse(LocalStorage.get.item("logged_in_user")).id_no
                    }
                }).then(result => {
                    if (JSON.stringify(result.total) == 1) {
                        this.user_is_supervisor = true
                    } else {
                        this.user_is_supervisor = false
                    }
                })
                if (JSON.parse(this.jod).service_status == "For Supervisor's Acknowledgement" && this.user_is_supervisor) {
                    this.supervisors_note_button = "block"
                } else {
                    this.supervisors_note_button = "none"
                }
            },
            validateMISStaff(){ 
              
               if (JSON.parse(this.jod).service_status == "For Review" && JSON.parse(LocalStorage.get.item("logged_in_user")).user_type == "MIS" ) {
                    this.mis_staff_review_button = "block"
                } else {
                    this.mis_staff_review_button = "none"
                }
            },
            mis_review (){ 
              this.modal_rr=true
            }
        },
        updated() {
            this.validateSupervisor()
            this.validateMISStaff() 
            this.job_order._id = JSON.parse(this.jod)._id
            this.job_order.job_order_no = JSON.parse(this.jod).job_order_no
            this.job_order.service_request_details.service_requested_type = JSON.parse(this.jod).service_request_details.service_requested_type
            this.job_order.service_requested_details.technical_support_type = JSON.parse(this.jod).service_requested_details.technical_support_type
            this.job_order.service_requested_details.remarks = JSON.parse(this.jod).service_requested_details.remarks
            this.job_order.service_requested_details.property_no = JSON.parse(this.jod).service_requested_details.property_no
            this.job_order.service_requested_details.unit_type = JSON.parse(this.jod).service_requested_details.unit_type
            //VALIDATING HISTORY
            document.getElementById('history1').style.display="none"
            document.getElementById('history2').style.display="none"
            document.getElementById('history3').style.display="none"
            document.getElementById('history4').style.display="none"
            document.getElementById('history5').style.display="none"
            document.getElementById('history6').style.display="none"
            // var statuses = ["","For Supervisor's Acknowledgement","For Review","For MIS Acknowledgement","For Render","For Conforme"]
            // for(var x=1;x<= statuses.indexOf(JSON.parse(this.jod).service_status); x++){
            //   document.getElementById('history'+x).style.display="block"
            // }
            if(JSON.parse(this.jod).service_status=="For Supervisor's Acknowledgement"){
              document.getElementById('history'+1).style.display="block"
            }
        },
        mounted() {
          this.validateSupervisor()
          this.validateMISStaff() 
        }
    }
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}
  th, td {
  border-bottom: 1px solid #ddd;
   padding: 8px;
}
</style>