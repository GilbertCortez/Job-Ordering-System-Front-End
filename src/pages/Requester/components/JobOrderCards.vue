<template>
<div class="layout-padding">
        <q-card inline class="bigger q-ma-sm" style="max-width: 350px">
          <q-card-title class="relative-position">
            <div class="ellipsis">{{joborderno}}</div>
            <div slot="right" class="row items-center">
              <q-icon name="info" />Type:
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
            <q-btn  icon="remove_red_eye" v-on:click="view" color="black">VIEW</q-btn>
            <q-btn  icon="edit" color="primary">EDIT</q-btn>
          </q-card-actions>
        </q-card>
      </div>
</template>
<script>
export default {
  props: ['joborderno'],
  methods: {
    view: function () {
      alert(this.joborderno)
    }
  }
}
</script>