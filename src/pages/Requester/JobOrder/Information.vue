<template>
   <div class="row">
      <div class="col-5">
         <q-card inline class="bigger q-ma-sm">
            <q-card-media>
               <img >
            </q-card-media>
            <q-card-title class="relative-position">
               <q-btn fab color="primary" icon="person" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />
               <div class="ellipsis">Technical Support</div>
            </q-card-title>
            <q-card-main>
               <p class="text-faded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </q-card-main>
         
         </q-card><br><br><br>
         <q-card inline class="bigger q-ma-sm">
            <q-card-media>
               <img >
            </q-card-media>
            <q-card-title class="relative-position">
               <q-btn fab color="primary" icon="apps" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />
               <div class="ellipsis">Software Development</div>
            </q-card-title>
            <q-card-main>
               <p class="text-faded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </q-card-main>
          
         </q-card><br><br><br>
         <q-card inline class="bigger q-ma-sm">
            <q-card-media>
               <img >
            </q-card-media>
            <q-card-title class="relative-position">
               <q-btn fab color="primary" icon="web" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />
               <div class="ellipsis">Website Modification</div>
            </q-card-title>
            <q-card-main>
               <p class="text-faded">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </q-card-main>
         </q-card>
      </div>
      <div class="col-1" />
      <div class="col-6">
         <q-timeline responsive color="blue">
            <q-timeline-entry heading>Job Order Steps</q-timeline-entry>
            <q-timeline-entry title="1st Step" subtitle="Estimated Time Alotted" side="left" >
               <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. 
               </div>
            </q-timeline-entry>
            <q-timeline-entry title="2nd Step" subtitle="Estimated Time Alotted" side="right" >
               <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. 
               </div>
            </q-timeline-entry>
            <q-timeline-entry title="3rd Step" subtitle="Estimated Time Alotted" side="left" >
               <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. 
               </div>
            </q-timeline-entry>
            <q-timeline-entry title="DONE!" subtitle="" side="right" >
               <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. 
               </div>
            </q-timeline-entry>
         </q-timeline>
      </div>
   </div>
</template>