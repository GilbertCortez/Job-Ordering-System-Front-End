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
        <q-btn color="blue" @click="opened=true" label="Technical Support" />
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
      <div class="layout-padding">
        <q-card inline class="bigger q-ma-sm" style="max-width: 350px" v-for="item in joborders" :key="item.joborderno">
          <q-card-title class="relative-position">
            <div class="ellipsis">{{item.joborderno}}</div>
            <div slot="right" class="row items-center">
              <q-icon name="info" /> Type:
            </div>
          </q-card-title>
          <q-card-main>
            <p><q-icon name="calendar_today" />・<font color="gray"> Date Filed: </font> December 13, 2018</p>
            <p><q-icon name="person" />・<font color="gray"> Requester: </font>Gilbert Critica Cortez</p>
            <p><q-icon name="place" />・<font color="gray"> Section/Division: </font>PMD-MIS</p>
            <p class="text-faded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions align="center">
            <q-btn  icon="remove_red_eye" color="black">VIEW</q-btn>
            <q-btn  icon="edit" color="primary">EDIT</q-btn>
          </q-card-actions>
        </q-card>
      </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      area: '',
      firstname: '',
      lastname: '',
      opened: false,
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
