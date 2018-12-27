<template>
	<div>
		<q-tabs color="black">
		  <q-tab slot="title" label="Information" icon="info" @click="$router.push('/Requester/NewJobOrder/Information')" default />
		  <q-tab slot="title" label="Technical Support" icon="person" @click="$router.push('/Requester/NewJobOrder/TechnicalSupport')"   /> 
		  <q-tab slot="title" label="Software Development" icon="apps" @click="$router.push('/Requester/NewJobOrder/SoftwareDevelopment')" />
		  <q-tab slot="title" label="Website Modification" icon="web" @click="$router.push('/Requester/NewJobOrder/WebsiteModification')" />

		  <div class="q-pa-xl">
			<div class="q-px-xl">
				<router-view />
			</div> 	
		</div>
		</q-tabs>
	</div>
</template>