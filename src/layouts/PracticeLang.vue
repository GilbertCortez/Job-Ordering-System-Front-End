<template>
   <div>
      <div>
         <q-btn color="primary" @click="opened=true" label="Add Job Order" icon="add" />
      </div>
      <q-modal v-model="opened" :content-css="{minWidth: '90vw', minHeight: '90vh'}">
         <q-modal-layout>
            <q-toolbar slot="header">
               <q-toolbar-title>JOB ORDER FORM</q-toolbar-title>
               <q-btn flat round v-close-overlay  icon="close"/>
            </q-toolbar>
            <div>
               <div class="row">
                  <div class="auto">
                    <div class="layout-padding">
                     <p class="caption">Service Request</p>
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
                     <p class="caption">Service Request</p>
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
                  <div></div>
               </div>
            </div>
            <div class="content-center">
              <q-toolbar color="white">
                  <q-btn color="primary" v-close-overlay label="Submit"/>
                  <q-btn color="grey" v-close-overlay label="Close"/>
              </q-toolbar>
            </div>
         </q-modal-layout>
      </q-modal>
   </div>
</template>
<script>
export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      opened: false,
      select: '',
      options: [
        {
          label: 'Select Service Request',
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
      ]
    }
  }
}
</script>
