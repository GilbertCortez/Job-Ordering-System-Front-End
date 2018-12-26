<template>
   <div>
    <q-toolbar color="white">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Job Order" icon="person" />
      <q-breadcrumbs-el label="Request New Service" icon="widgets" />
    </q-breadcrumbs>
      </q-toolbar>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab color="primary"  icon="add" direction="left">
        <q-btn color="blue" @click="modal_ts=true" label="Technical Support" />
        <q-btn color="blue" label="Software Development" />
        <q-btn color="blue" label="MIDRC Website" />
      </q-fab>
    </q-page-sticky>
      <q-modal v-model="opened" :content-css="{minWidth: '60vw', minHeight: '90vh'}">
         <q-modal-layout>
            <q-toolbar slot="header">
               <q-toolbar-title>JOB ORDER FORM</q-toolbar-title>
               <q-btn flat round v-close-overlay  icon="close"/>
            </q-toolbar>
            <div>
               <div class="row">
                  <div class="auto">
                    <div class="layout-padding">
                     <p class="caption">Service Request Type</p>
                     <q-select v-model="select" :options="options" />
                     <br>
                     <p class="caption">Type of unit:</p>
                     <q-field  icon="desktop_mac" label="Desktop" helper="Property No." >
                        <q-input v-model="text" />
                     </q-field>
                     <q-field  icon="laptop" label="Laptop" helper="Property No." >
                        <q-input v-model="text" />
                     </q-field>
                     <q-field  icon="print" label="Printer" helper="Property No." >
                        <q-input v-model="text" />
                     </q-field>
                     <q-field  icon="devices_other" label="Others" helper="Property No." >
                        <q-input v-model="text" />
                     </q-field>
                     </div>
                  </div>
                  <div class="auto">
                    <div class="layout-padding">
                     <q-input v-model="area" type="textarea" float-label="Program Modification" :max-height="100" rows="1" />
                    <q-input v-model="area" type="textarea" float-label="Program/System Development" :max-height="100" rows="1" />
                    <q-input v-model="area" type="textarea" float-label="Purpose" :max-height="100" rows="1" />
                    <q-input v-model="area" type="textarea" float-label="Intranet/Social Media Update" :max-height="100" rows="1" />
                    <q-input v-model="area" type="textarea" float-label="Website Update" :max-height="100" rows="1" />
                    <q-input v-model="area" type="textarea" float-label="Remarks" :max-height="100" rows="1" />
                    </div>
                  </div>
               </div>
            </div>
            <div class="row items-center">
                  <q-btn color="primary" v-close-overlay label="Submit"/>
                  <q-btn color="grey" v-close-overlay label="Close"/>
            </div>
         </q-modal-layout>
      </q-modal>
      <div>
      <JobOrderCards joborderno="JOB-1-01234"/>
      </div>
   </div>
</template>
<script>
import JobOrderCards from './JobOrderCards.vue'
export default {
  components: {
    JobOrderCards
  },
  data () {
    return {
      text: '',
      area: '',
      firstname: '',
      lastname: '',
      modal_ts: false, //technical support
      modal_sd: false, //software development
      modal_wm: false, //website modification
      select: '',
      options: [
        {
          label: 'Select Service Request Type',
          value: '',
          disable: true
        },
        {
          label: 'Check-up',
          value: '0'
        },
        {
          label: 'Software Installation',
          value: '1'
        },
        {
          label: 'Repair',
          value: '2'
        },
        {
          label: 'Virus Detection',
          value: '3'
        }
      ],
      joborders: [
        {
          joborderno: 'JOB-1-01294',
          jobtype: '1',
          datefiled: 'December 13, 2018',
          requester: 'Gilbert Cortez',
          secdiv: 'PMD-MIS',
          remarks: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  }
}
</script>
