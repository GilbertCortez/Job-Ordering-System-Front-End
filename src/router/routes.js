const routes = [
  { path: '', component: () => import('layouts/Login.vue')},
  { path: '/Requester', component: () => import('layouts/Requester.vue'),
    children: [
      { path: 'Dashboard', component: () => import('pages/Requester/Dashboard/Dashboard.vue') },
      { path: 'JobOrder', component: () => import('components/Table/JobOrder.vue'), },
      { path: 'NewJobOrder', component: () =>import('pages/Requester/JobOrder/NewJobOrder.vue'), children: [
        { path: 'TechnicalSupport', component: () => import('components/Form/TechnicalSupport.vue')},
        { path: 'SoftwareDevelopment', component: () => import('components/Form/SoftwareDevelopment.vue')},
        { path: 'WebsiteSocialMediaModification', component: () => import('components/Form/WebsiteSocialMediaModification.vue')}
        ]
      }
    ]
  },
  { path: '/Chief', component: () => import('layouts/Chief.vue')
  },
  { path: '/MIS', component: () => import('layouts/MIS.vue'),
    children: [
      { path: 'Dashboard', component: () => import('pages/MIS/Dashboard.vue') },
      { path: 'JobOrder', component: () => import('components/Table/JobOrder.vue')},
      { path: 'NewJobOrder', component: () =>import('pages/MIS/NewJobOrder.vue'), children: [
        { path: 'TechnicalSupport', component: () => import('components/Form/TechnicalSupport.vue')},
        { path: 'SoftwareDevelopment', component: () => import('components/Form/SoftwareDevelopment.vue')},
        { path: 'WebsiteSocialMediaModification', component: () => import('components/Form/WebsiteSocialMediaModification.vue')}
        ]
      },
      { path: 'Report', component: () => import('pages/MIS/Report.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({ path: '*', component: () => import('pages/Error404.vue') })
}

export default routes
