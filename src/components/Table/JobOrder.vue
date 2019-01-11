<template>
   <div class="row q-pa-sm">

      <div class="col-12">
        <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <q-tr slot="body" slot-scope="props" :props="props">
        <q-td key="joborderno" :props="props">
          {{ props.row.job_order_no }}
        </q-td>
        <q-td key="servicetype" :props="props">
         
            {{ props.row.service_request_details.service_requested_type }}
      
        </q-td>
        <q-td key="datefiled" :props="props">{{ props.row.service_request_details.date_filed }}</q-td>
        <q-td key="requester" :props="props">
         {{ props.row.requester_details.requester }}
        </q-td>
        <q-td key="status" :props="props">
         <q-btn color="primary"  label="view"  @click.native="rowClick(props.row)" v-on icon="remove_red_eye" />
        </q-td>
       
      </q-tr>
    </q-table>
        <div class="q-body-1 row">
          <div class="col-3">

            <q-search @input="searchKeyUp" v-model="search" /><br>
          </div>
          <div class="col-12">
            <center>
            <q-btn-group outline responsive>
            <q-btn outline  color="primary"   label="All" />
            <q-btn outline  color="primary" label="New" />
            <q-btn outline  color="primary" label="For Supervisor's Acknowledgement" /> 
            <q-btn outline  color="primary" label="For Review" />
            <q-btn outline  color="primary" label="For MIS Acknowledgement" /> 
            <q-btn outline  color="primary" label="For Render" /> 
            <q-btn outline  color="primary" label="For Conforme" /> 
          </q-btn-group>
        </center><br>
        </div>
        </div>
         <q-table
      :data="tableData"
      :columns="columns"
      row-key="name"

    >

      <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
      </q-tr>
    </q-table>
      </div>

      <div class="col-5 q-pa-md">
         <ModalTechnicalSupport :opened.sync="modal_ts"  :jod.sync="clickedRow" from="requester_job_order"/>
         <ModalSoftwareDevelopment :opened.sync="modal_sd"  :jod.sync="clickedRow" from="requester_job_order" />
         <ModalWebsiteSocialMediaModification :opened.sync="modal_wsmm"  :jod.sync="clickedRow" from="requester_job_order" />
      </div>
   </div>
</template>
<script>
import ModalTechnicalSupport from 'components/Modal/TechnicalSupport.vue'
import ModalSoftwareDevelopment from 'components/Modal/SoftwareDevelopment.vue'
import ModalWebsiteSocialMediaModification from 'components/Modal/WebsiteSocialMediaModification.vue'
export default {
  components: {
    ModalTechnicalSupport,
    ModalSoftwareDevelopment,
    ModalWebsiteSocialMediaModification
  },
  data () {
    return {
      modal_ts: false,
      modal_sd: false,
      modal_wsmm: false,
      clickedRow: [],
      jod :{
        job_order_no: '',
        service_requested_type: '',
        technical_support_type: '',
        unit_type: '',
        property_no: '',
        remarks: ''
      },
      sampledata: '',
      tableData: [] ,
      columns: [
        { name: 'joborderno', label: 'Job Order No.', align: 'left', field: 'job_order_no', sort: 1},
        { name: 'servicetype', label: 'Service Type', field: row => row.service_request_details.service_requested_type },
        { name: 'datefiled', label: 'Date Filed', field: row => row.service_request_details.date_filed },
        { name: 'requester', label: 'Requester', field: row => row.requester_details.requester },
        { name: 'status', label: 'Status', field: 'service_status' },
      ]
    }
  } ,
  methods: {
    view(id){
      alert(id)
    },
    rowClick (row) {
      
      this.clickedRow= JSON.stringify(row)
      if(row.service_request_details.service_requested_type=='Technical Support'){
        this.modal_ts= true
      }
      else if(row.service_request_details.service_requested_type=='Software Development'){
        this.modal_sd= true
      }
      else if(row.service_request_details.service_requested_type=='Website/Social Media Modification'){
        this.modal_wsmm= true
      }
    }
  },
  mounted () {

    this.tableData= this.$dbCon.services.joborders.data
      this.$dbCon.services.joborders.onDataChange(data => { // the function where the magic happen
      this.tableData =onDataChange // mutate your state. for ReactJS use setState
    })

      this.$dbCon.services.joborders.find({
    
    job_order_no:"19-0-01"
 
      }).then((result) => {
  console.log("result",result)
})
  }
}
</script>
<style>
  .q-caption {
    color: rgb(0,0,255);
  }
</style>