<template>
	<div>
	  <q-tabs color="black">
		  <q-tab count="0"  slot="title" label="new" @click="$router.push('/MIS/JobOrder/New')" default  /> 
		  <q-tab count="0"  slot="title" label="for assessment" @click="$router.push('/MIS/JobOrder/ForAssessment')" />
		  <q-tab count="0"  slot="title" label="for review" @click="$router.push('/MIS/JobOrder/ForReview')" />
		  <q-tab count="0"  slot="title" label="for render" @click="$router.push('/MIS/JobOrder/ForRender')" />
		  <q-tab count="0"  slot="title" label="for confirmation" @click="$router.push('/MIS/JobOrder/ForConfirmation')" />
		  <router-view />
		</q-tabs>
	</div>
</template>
