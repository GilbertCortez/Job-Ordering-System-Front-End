const routes = [
  { path: '', component: () => import('layouts/Login.vue')},
  { path: '/Requester', component: () => import('layouts/Requester.vue'),
    children: [
      { path: 'RequestNewJob', component: () => import('pages/Requester/RequestNewJob.vue') },
      { path: 'Dashboard', component: () => import('pages/Requester/Dashboard.vue') },
      { path: 'JobOrder', component: () => import('pages/Requester/JobOrder.vue'), },
      { path: 'Track', component: () => import('pages/Requester/Track.vue') }
    ]
  },
  { path: '/Chief', component: () => import('layouts/Chief.vue')
  },
  { path: '/MIS', component: () => import('layouts/MIS.vue'),
    children: [
      { path: 'Dashboard', component: () => import('pages/MIS/Dashboard.vue') },
      { path: 'JobOrder', component: () => import('pages/MIS/JobOrder.vue'),
        children: [
          { path: 'New', component: () => import('pages/MIS/JobOrder/New.vue') },
          { path: 'ForAssessment', component: () => import('pages/MIS/JobOrder/ForAssessment.vue') },
          { path: 'ForReview', component: () => import('pages/MIS/JobOrder/ForReview.vue') },
          { path: 'ForRender', component: () => import('pages/MIS/JobOrder/ForRender.vue') },
          { path: 'ForConfirmation', component: () => import('pages/MIS/JobOrder/ForConfirmation.vue') }
        ]
      },
      { path: 'Track', component: () => import('pages/MIS/Dashboard.vue') },
      { path: 'Report', component: () => import('pages/MIS/Report.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({ path: '*', component: () => import('pages/Error404.vue') })
}

export default routes
