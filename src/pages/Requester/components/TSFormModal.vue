 <template>
 <q-modal v-model=openmodal :content-css="{minWidth: '60vw', minHeight: '90vh'}">
         <q-modal-layout>
            <q-toolbar slot="header">
               <q-toolbar-title>JOB ORDER FORM {{openmodal}}</q-toolbar-title>
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
                        <q-input value="" />
                     </q-field>
                     <q-field  icon="laptop" label="Laptop" helper="Property No." >
                        <q-input value=""  />
                     </q-field>
                     <q-field  icon="print" label="Printer" helper="Property No." >
                        <q-input value=""  />
                     </q-field>
                     <q-field  icon="devices_other" label="Others" helper="Property No." >
                        <q-input value=""  />
                     </q-field>
                     </div>
                  </div>
                  <div class="auto">
                    <div class="layout-padding">
                     <q-input value=""  type="textarea" float-label="Program Modification" :max-height="100" rows="1" />
                    <q-input value=""  type="textarea" float-label="Program/System Development" :max-height="100" rows="1" />
                    <q-input value=""  type="textarea" float-label="Purpose" :max-height="100" rows="1" />
                    <q-input value=""   type="textarea" float-label="Intranet/Social Media Update" :max-height="100" rows="1" />
                    <q-input value=""  type="textarea" float-label="Website Update" :max-height="100" rows="1" />
                    <q-input value=""  type="textarea" float-label="Remarks" :max-height="100" rows="1" />
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
</template>
<script>
  export default {
    props: ['openmodal'],
    data () {
      return {
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
      ]
      }
    }
  }
</script>