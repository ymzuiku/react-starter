import loadable from '../utils/loadable';
import Loading from '../components/Loading';

loadable.setDefaultLoadingComponent(Loading);

export default [
  { path: '/', redirect: '/home/' },
  { path: '/home/*', component: loadable.load(() => import('./Home')) },
  { path: '/login/*', component: loadable.load(() => import('./Login')) },
];
