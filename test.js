{
  path: '/coaches/:id',
  component: CoachDetail,
  props: true,
  // 联系某位教师 /coaches/ID/contact
  children: [{ path: 'contact', component: ContactCoach, props: true }],
},