/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const flowAbleRouter = {
  path: '/flowable',
  component: Layout,
  redirect: '/noredirect',
  name: 'Flowable',
  meta: {
    title: '流程管理',
    icon: 'table'
  },
  children: [
    {
      path: 'modeler',
      component: () => import('@/views/flowable/modeler/index'),
      name: 'modeler',
      meta: { title: '流程模板' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '流程定义' }
    }
    // {
    //   path: 'inline-edit-table',
    //   component: () => import('@/views/table/inline-edit-table'),
    //   name: 'InlineEditTable',
    //   meta: { title: 'Inline Edit' }
    // },
    // {
    //   path: 'complex-table',
    //   component: () => import('@/views/table/complex-table'),
    //   name: 'ComplexTable',
    //   meta: { title: 'Complex Table' }
    // }
  ]
}
export default flowAbleRouter
