<template>
	<div>
		<q-tabs color="black">
		  <q-tab slot="title" label="Technical Support" icon="person" @click="$router.push('/Requester/NewJobOrder/TechnicalSupport')"  default /> 
		  <q-tab slot="title" label="Software Development" icon="apps" @click="$router.push('/Requester/NewJobOrder/SoftwareDevelopment')" />
		  <q-tab slot="title" label="Website/Social Media Modification" icon="web" @click="$router.push('/Requester/NewJobOrder/WebsiteSocialMediaModification')" />

		  <div class="q-pa-xl">
			<div class="q-px-xl">
				<router-view />
			</div> 	
		</div>
		</q-tabs>
	</div>
</template>