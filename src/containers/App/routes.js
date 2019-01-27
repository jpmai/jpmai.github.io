import Home from '../Home'
import Services from '../Services'
import Team from '../Team'
import Gallery from '../Gallery'
import Contacts from '../Contacts'

export default [
  /*{
    path: '/',
    intlId: 'nav.home',
    exact: true,
    component: Home,
    icon: 'quidditch',
    last: true
  },
  {
    path: '/aboutus',
    intlId: 'nav.aboutus',
    exact: true,
    component: AboutUs
    ,
    icon: 'ghost',
    main: true,
    submenu: [
      {
        path: '/team',
        intlId: 'The team',
        exact: true
      }
    ]
  },
  {
    path: '/events',
    intlId: 'nav.events',
    exact: true,
    component: Events,
    icon: 'volleyball-ball',
    main: true,
    submenu: [
      {
        path: '/worldcup',
        intlId: 'Word Cup',
        exact: true
      },
      {
        path: '/tourintlIdnts',
        intlId: 'TourintlIdnts',
        exact: true
      },
      {
        path: '/games',
        intlId: 'Games',
        exact: true
      }
    ],
    last: true
  },*/
  {
    path: '/',
    intlId: 'nav.home',
    exact: true,
    component: Home,
    icon: 'table-tennis',
    main: true
  },
  {
    path: '/agricultural',
    intlId: 'nav.agricultural',
    exact: true,
    component: Services,
    icon: 'table-tennis',
    main: true
  },
  {
    path: '/lumbering',
    intlId: 'nav.lumbering',
    exact: true,
    component: Services,
    icon: 'table-tennis',
    main: true
  },
  {
    path: '/civilengineering',
    intlId: 'nav.civilengineering',
    exact: true,
    component: Services,
    icon: 'table-tennis',
    main: true
  },
  {
    path: '/services',
    intlId: 'nav.services',
    exact: true,
    component: Services,
    icon: 'table-tennis'
  },
  {
    path: '/team',
    intlId: 'nav.team',
    exact: true,
    component: Team,
    main: true,
    icon: 'golf-ball'
  },
  {
    path: '/gallery',
    intlId: 'nav.gallery',
    exact: true,
    component: Gallery,
    main: true,
    icon: 'golf-ball'
  },
  {
    path: '/contact',
    intlId: 'nav.contact',
    exact: true,
    component: Contacts,
    main: true,
    icon: 'golf-ball'
  }
]
