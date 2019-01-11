<template >
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
          IT Help Desk
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
        width=200
    >
      <div class="row flex-center bg-white" style="height: 115px;">
        <img alt="Quasar logo" src="../statics/MIDRC-Logo.jpg" style="height: 75px;">
      <div class="caption q-ml-md">
          MIRDC
        </div></div>
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>

        <q-item to="/Requester/Dashboard" class="q-body-1">
          <q-item-side icon="widgets" />
          <q-item-main label="Dashboard"/>
        </q-item>

        <div class="q-item-separator-component"  v-bind:style="{'display': user_is_supervisor}"></div>

         <q-item to="/Requester/JobOrder" class="q-body-1">
          <q-item-side icon="person" />
          <q-item-main label="Job Orders"/>
          <q-chip  dense  color="primary">{{  this.$dbCon.services.joborders.data.length }}</q-chip>
        </q-item>
        

        <div class="q-item-separator-component"></div>

       <q-item to="/Requester/NewJobOrder/TechnicalSupport" class="q-body-1">
          <q-item-side icon="add" />
          <q-item-main label="New Job Order"/>
        </q-item>

       

        <div class="q-item-separator-component"></div>

        <q-item to="/#/" class="q-body-1">
          <q-item-side icon="logout" />
          <q-item-main label="Signout" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {  LocalStorage } from 'quasar'
import { openURL } from 'quasar'
  import { Notify } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  },
  mounted () {
    this.authenticate () 
  },
  created () {
     this.authenticate () 
  },
  updated() {
     this.authenticate () 
  },
  methods: {  
      authenticate () {
        if(!LocalStorage.has("logged_in_user")){
      Notify.create({
            message: "Please Log In First!",
            type: 'negative',
            position: 'top-right'
          })
          this.$q.notify()
      window.location.href="/#/"
    }
    if(!(JSON.parse(LocalStorage.get.item("logged_in_user")).user_type=="REQUESTER")){
      window.location.href="/#/MIS"
    }
      }
  }
}
</script>
