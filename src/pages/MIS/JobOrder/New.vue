<template>
   <div>
      <q-modal v-model="opened" :content-css="{maxWidth: '60vw', maxHeight: '90vh'}">
         <q-modal-layout>
            <q-toolbar slot="header">
               <q-toolbar-title>JOB ORDER DETAILS</q-toolbar-title>
               <q-btn flat round v-close-overlay  icon="close"/>
            </q-toolbar>
            <div>
               <div class="row">
                  <div class="auto">
                    <div class="layout-padding">
                  		 <table>
            						  <tr>
            						    <th>Job Order No.</th>
            						    <td>JOB-1-01294</td>
            						  </tr>
            						  <tr>
            						    <th>Service Type</th>
            						    <td>Software Development</td>
            						  </tr>
            						  <tr>
            						    <th>Date Filed</th>
            						    <td>December 13, 2018</td>
            						  </tr>
            						  <tr>
            						  	<th>Section/Division</th>
            						    <td>PMD-MIS</td>
            						  </tr>
            						  <tr>
            						  	<th>Remarks</th>
            						    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            						    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            						    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            						    consequat.</td>
            						  </tr>
            						</table>
                     </div>
                  </div>
               </div>
            </div>
         </q-modal-layout>
         <div class="layout-padding">
         	<q-btn  icon="check" color="primary">APPROVE</q-btn>
         	<q-btn  icon="reply" @click="opened=false" color="grey">CLOSE</q-btn>
         </div>
      </q-modal>
      <div class="layout-padding">
        <q-card inline class="bigger q-ma-sm" style="max-width: 350px">
          <q-card-title class="relative-position">
            <div class="ellipsis">JOB-1-01294</div>
            <div slot="right" class="row items-center">
              <q-icon name="info" /> Type: Software Development
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
            <q-btn  icon="remove_red_eye" color="black" @click="opened=true">VIEW</q-btn>
          </q-card-actions>
        </q-card>
      </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      opened: false,
    }
  }
}
</script>
<style>
table {
  table-layout:fixed;
  border-collapse: collapse;
  width: 100%;
  border:1px solid grey;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: grey;
  color: white;
}
</style>

<!-- joborders: {
	_id: id,
	job_order_no: String,
	date_filed: Date,
	requester: id,
	service_request_type: Number,
	service_request_description: String,
	service_request_details: {
		//TECHNICAL SUPPORT
		technical_service_type: Number,
		unit_type: String,
		property_no: String
		//SOFTWARE DEVELOPMENT
		program_modification: String,
		system_development: String,
		purpose: String
		//WEBSITE
		intranet_social_media_update: String,
		website_update: String,
		others: String
	},
	assessment_details: {
		problem_type: Number,
		others: String,
		findings: String
		
	}

} -->