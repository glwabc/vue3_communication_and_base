/*
所有路由配置的数组
*/

export default [
  {
    path: '/',
    component: () => import('@/views/01_props/PropsTest.vue'),
  },
  {
    path: '/props_pre',
    component: () => import('@/views/01_props/PropsTest.vue'),
  },
  {
    path: '/event_pre',
    component: () => import('@/views/02_custom-event/EventTest.vue'),
  },
  {
    path: '/bus_pre',
    component: () => import('@/views/03_event-bus/EventBusTest.vue'),
  },
  {
    path: '/model_pre',
    component: () => import('@/views/04_v-model/ModelTest.vue'),
  },
  {
    path: '/attrs-listeners_pre',
    component: () =>
      import('@/views/05_1_attrs-listeners/AttrsListenersTest.vue'),
  },
  {
    path: '/proxy_demo',
    component: () => import('@/views/05_2_proxy_demo/PorxyDemo.vue'),
  },
  {
    path: '/ref_parent_pre',
    component: () =>
      import('@/views/06_1_ref-children-parent/RefChildrenParentTest.vue'),
  },
  {
    path: '/ref_of_vue3',
    component: () => import('@/views/06_2_ref_of_vue3/Parent.vue'),
  },
  {
    path: '/ref_and_active',
    component: () => import('@/views/06_3_ref_and_reactive/aa.vue'),
  },
  {
    path: '/provide-inject_pre',
    component: () => import('@/views/07_provide-inject/ProvideInjectTest.vue'),
  },
  {
    path: '/vuex_pre',
    component: () => import('@/views/08_pinia/index.vue'),
  },
  {
    path: '/slot_pre',
    component: () => import('@/views/09_slot/SlotTest.vue'),
  },
  {
    path: '/sanmu_study',
    component: () => import('@/views/sanmu_study/Father.vue'),
  },

  {
    path: '/FooScriptSetup',
    component: () => import('@/views/vue2_vs_vue3/FooScriptSetup.vue'),
  },
  {
    path: '/FooSetup',
    component: () => import('@/views/vue2_vs_vue3/FooSetup.vue'),
  },
  {
    path: '/FooView',
    component: () => import('@/views/vue2_vs_vue3/FooView.vue'),
  },
  {
    path: '/father',
    component: () => import('@/views/vue3_script_setup/father_component.vue'),
  },
  {
    path: '/son',
    component: () => import('@/views/vue3_script_setup/son_component.vue'),
  },
  {
    path: '/test',
    component: () => import('@/views/test/index.vue'),
  },
]
