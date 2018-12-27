<template>
   <div>
      <JobOrderCards joborderno="JOB-1-01235"/>
   </div>
</template>
<script>
import JobOrderCards from '../components/JobOrderCards.vue'
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
    }
  }
}
</script>
