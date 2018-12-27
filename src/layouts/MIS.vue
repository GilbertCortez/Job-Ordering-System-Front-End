<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Job Ordering System
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <div class="row flex-center bg-white" style="height: 115px;">
        <img alt="Quasar logo" src="../statics/MIDRC-Logo.jpg" style="height: 75px;">
      <div class="caption q-ml-md">
          MIDRC
        </div></div>
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <q-item to="/MIS/Dashboard">
          <q-item-side icon="widgets" />
          <q-item-main label="Dashboard"/>
        </q-item>
        <div class="q-item-separator-component"></div>
        <q-item to="/MIS/JobOrder/New">
          <q-item-side icon="person" />
          <q-item-main label="Job Order"/>
        </q-item>
        <div class="q-item-separator-component"></div>
        <q-item to="/MIS/Track">
          <q-item-side icon="timeline" />
          <q-item-main label="Track" />
        </q-item>
        <div class="q-item-separator-component"></div>
        <q-item to="Report">
          <q-item-side icon="view_list" />
          <q-item-main label="Report" />
        </q-item>
        <div class="q-item-separator-component"></div>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { Notify } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      joborders: []
    }
  },
  methods: {
    openURL
  },
  mounted () {
    if(sessionStorage.length==0){
      Notify.create({
            message: "Please Log In First!",
            type: 'negative',
            position: 'top-right'
          })
          this.$q.notify()
      window.location.href="/#/"
    }
    //AUTHENTICATE HERE
   // this.joborders = this.$dbCon.services.joborders.data
    // this.$dbCon.services.joborders.onDataChange(data => {
    //   this.joborders = data 
    // })
  }
}
</script>

<style>
</style>
