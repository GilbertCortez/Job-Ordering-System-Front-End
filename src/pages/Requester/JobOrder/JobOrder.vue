<template>
  <div class="row q-pa-sm">
  <div class="col-12">
      <q-table :data="tableData" :columns="columns" row-key="joborder" color="primary" >


  <div slot="top" slot-scope="props" class="row fit">


      <div class="col-6 row">
        <div class="col-5">
          <span class="q-caption">Job Order No</span>
          <q-input class="q-body-1" readonly value="JOB-0-2019-0001"  />
        </div> 
        <div class="col-1" ></div>
        <div class="col-6">
          <span class="q-caption">Service Type</span>
          <q-input class="q-body-1"  readonly value="Technical Support"  />
        </div>
      </div>
    <div class="col-6 row" >
      <div class="col-6">
        <span class="q-caption">Type of Unit</span>
        <div class="row q-pa-sm q-body-1">
          <q-radio class="col-6"  val="Check up"  label="Desktop"  />
          <q-radio  class="col-6" val="Software Installation" label="Laptop" />
          <q-radio class="col-6"  val="Repair" label="Printer" />
          <q-radio  class="col-6" val="Virus Detection" label="Others" />
        </div>
      </div>
      <div class="col-6">
        <span class="q-caption">Unit Property No</span>
         <q-input class="q-body-1"  readonly value="FAD-HR/DOLLY"  />
      </div>
    </div>
    <div class="col-12 row q-pt-md"><br>
      <div class="col-6">
        <span class="q-caption">Technical Support Type</span>
        <div class="row q-pa-sm q-body-1">
          <q-radio class="col-6"  val="Check up"  label="Check up" />
          <q-radio  class="col-6" val="Software Installation" label="Software Installation" />
          <q-radio class="col-6"  val="Repair" label="Repair" />
          <q-radio  class="col-6" val="Virus Detection" label="Virus Detection" />
        </div>
      </div>
      <div class="col-6">
        <span class="q-caption">Remarks</span>
    <q-input class="q-body-1" readonly color="primary" type="textarea" rows="2" value="Hindi ko magamit ng maayos ang monitor. Wala akong makita." />
  </div>
    </div>
   <div class="col-6 "/>
    <div class="col-6" style="float:right">
      <div class=" q-pa-lg" style='float:right'>
        <q-btn icon="edit" label="Edit Job Order Details" color="blue" outline />&nbsp;
        <q-btn icon="timeline" label="See Timeline" outline />
      </div>
    </div>

  </div>
  <div slot="bottom" slot-scope="props" class="row flex-center fit">
    <q-btn
      round dense icon="chevron_left" color="primary" class="q-mr-md"
      :disable="props.isFirstPage"
      @click="props.prevPage"
    />
    <q-btn
      round dense icon="chevron_right" color="primary"
      :disable="props.isLastPage"
      @click="props.nextPage"
    />
  </div>
</q-table>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tableData :  [
      {
        joborder: 'JOB-0-2019-0001',
        servicetype: 'Technical Support',
        datefiled: 'January 1, 2019',
        status: 'For Approval',
      },
      {
        joborder: 'JOB-0-2019-0001',
        servicetype: 'Technical Support',
        datefiled: 'January 1, 2019',
        status: 'For Approval',
      },
      {
        joborder: 'JOB-0-2019-0001',
        servicetype: 'Technical Support',
        datefiled: 'January 1, 2019',
        status: 'For Approval',
      },
      {
        joborder: 'JOB-0-2019-0001',
        servicetype: 'Technical Support',
        datefiled: 'January 1, 2019',
        status: 'For Approval',
      },
       {
        joborder: 'JOB-0-2019-0001',
        servicetype: 'Technical Support',
        datefiled: 'January 1, 2019',
        status: 'For Approval',
      },
      {
        joborder: 'JOB-0-2019-0001',
        servicetype: 'Technical Support',
        datefiled: 'January 1, 2019',
        status: 'For Approval',
      },
      {
        joborder: 'JOB-0-2019-0001',
        servicetype: 'Software Development',
        datefiled: 'January 1, 2019',
        status: 'For Approval',
      },
      {
        joborder: 'JOB-0-2019-0001',
        servicetype: 'Technical Support',
        datefiled: 'January 1, 2019',
        status: 'For Approval',
      }
    ],
      columns: [
        { label: 'Job Order No.', align: 'left', field: 'joborder'},
        { label: 'Service Type', field: 'servicetype' },
        { label: 'Date Filed', field: 'datefiled' },
        { label: 'Status', field: 'status' },

 
      ]
    }
  } 
}
</script>
<style>
  .q-caption {
    color: rgb(0,0,255);
  }
</style>