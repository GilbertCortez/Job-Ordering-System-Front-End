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

        <q-item to="/MIS/Dashboard" class="q-body-1">
          <q-item-side icon="widgets" />
          <q-item-main label="Dashboard"/>
        </q-item>

        <div class="q-item-separator-component"></div>

        <q-item to="/MIS/JobOrder" class="q-body-1">
          <q-item-side icon="person" />
          <q-item-main label="Job Orders"/>
        </q-item>

        <div class="q-item-separator-component"></div>

        <q-item to="/MIS/NewJobOrder/TechnicalSupport" class="q-body-1">
          <q-item-side icon="add" />
          <q-item-main label="New Job Order" />
        </q-item>

        <div class="q-item-separator-component"></div>

        <q-item to="Report" class="q-body-1">
          <q-item-side icon="view_list" />
          <q-item-main label="Report" />
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
import { openURL } from 'quasar'
import { Notify } from 'quasar'
import {  LocalStorage } from 'quasar'
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
  created () {
 
     if(!LocalStorage.has("logged_in_user")){
         Notify.create({
            message: "Please Log In First!",
            type: 'negative',
            position: 'top-right'
          })
          this.$q.notify()
      window.location.href="/#/"
    }
     if(!(JSON.parse(LocalStorage.get.item("logged_in_user")).user_type=="MIS")){
      window.location.href="/#/Requester"
    }
  }
}
</script>

<style>
</style>
