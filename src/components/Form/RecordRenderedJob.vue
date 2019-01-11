<template>
   <div>
      <q-modal  v-model="opened" maximized>
         <div>
            <q-toolbar slot="header" >
               <q-btn
                  flat
                  round
                  dense
                  @click="closeModal"
                  icon="keyboard_arrow_left"
                  />
               <q-toolbar-title>
                  Record Rendered Job
               </q-toolbar-title>
            </q-toolbar>
         </div>
         <div class="layout-padding row">
            <div class="col-3">
               <div class="col-12">
                  <p class="caption">Type of Problem<font color="red">*</font></p>
               </div>
               <div class="q-px-md">
                  <div class="col-12">
                     <q-radio  val=""  label="Software" />
                  </div>
                  <div class="col-12">
                     <q-radio  val="" label="Hardware" />
                  </div>
                  <div class="col-12">
                     <q-radio  val="" label="Intranet/Social Media" />
                  </div>
                  <div class="col-12">
                     <q-radio  val="" label="Website" />
                  </div>
                  <div class="col-12">
                     <q-radio  val="" label="Others" />
                  </div>
                  <div class="col-12 q-px-lg ">
                     <div>&nbsp;</div>
                     <small class="q-body-1">Please Specify,</small>
                     <q-input value=""/>
                  </div>
               </div>
            </div>
            <div class="col-5 row">
               <div class="col-6">
                  <p class="caption">Worker-hours Utilized<font color="red">*</font></p>
                  <div class="q-px-md">
                     <q-input value=""/>
                  </div>
               </div>
               <div class="col-6">
                  <p class="caption">Date Finished<font color="red">*</font></p>
                  <div class="q-px-md">
                     <q-input value=""/>
                  </div>
               </div>
               <div class="col-12">
                  <br>
                  <p class="caption">Findings/ Action Taken<font color="red">*</font></p>
                  <div class="q-px-md">
                     <q-input type="textarea" max-height="3" rows="3" value=""/>
                  </div>
               </div>
            </div>
            <div class="col-2">
               <div class="col-12">
                  <p class="caption">Status After Service<font color="red">*</font></p>
               </div>
               <div class="q-px-md">
                  <div class="col-12">
                     <q-radio  val=""  label="Operational" />
                  </div>
                  <div class="col-12">
                     <q-radio  val="" label="Not Operational" />
                  </div>
                  <div class="col-12 q-px-lg ">
                     <div>&nbsp;</div>
                     <small class="q-body-1">Please Specify,</small>
                     <q-input value="" type="textarea" max-height="3"  rows="3"/>
                  </div>
               </div>
            </div>
            <div class="col-2">
               <div class="col-12">
                  <br><br>
               </div>
               <div class="q-px-md">
                  <div class="col-12">
                     <q-radio  val=""  label="Pulled Out" />
                  </div>
                  <div class="col-12">
                     <q-radio  val="" label="Others" />
                  </div>
                  <div class="col-12 q-px-lg ">
                     <div>&nbsp;</div>
                     <small class="q-body-1">Please Specify,</small>
                     <q-input value="" type="textarea" max-height="3"  rows="3"/>
                  </div>
               </div>
            </div>
            <div class="col-12">
               <br>
               <p class="caption">Recommend Purchase Request?<font color="red">*</font></p>
               <div class="q-pa-sm">
                  <q-radio  val=""  label="Yes" />
                  &nbsp; &nbsp;
                  <q-radio  val=""  label="No" />
               </div>
            </div>
            <div class="col-4">
               <div class="col-2 q-px-md">
                  <div class="col-12">
                     <p class="caption">Particular<font color="red">*</font></p>
                  </div>
                    <div class="col-12  ">
                        <q-input value="" type="textarea" max-height="2"   rows="2"/>
                  </div>
               </div>
            </div>
            <div class="col-4">
               <div class="col-2 q-px-md">
                  <div class="col-12">
                     <p class="caption">Specification<font color="red">*</font></p>
                  </div>
                    <div class="col-12  ">
                        <q-input value="" type="textarea" max-height="2"   rows="2"/>
                  </div>
               </div>
            </div>
            <div class="col-4">
               <div class="col-2 q-px-md">
                  <div class="col-12">
                     <p class="caption">Recommendation<font color="red">*</font></p>
                  </div>
                    <div class="col-12  ">
                        <q-input value="" type="textarea" max-height="2"   rows="2"/>
                  </div>
               </div>
            </div>
            <div class="col-12">
            	<br><br>
            	 <div align="right">
         		<q-btn color="primary" icon="send" label="Submit" @click="submitform" />
     				 </div>
            </div>
         </div>
      </q-modal>
   </div>
</template>
<script>
	export default {
      props: ['opened'],
		data (){
			return {

			}
		},
      methods: {
         closeModal() {
            this.$parent.modal_rrj= false
            this.opened=false
         }
      }
	}
</script>
   