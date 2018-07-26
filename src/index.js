import { Navigation } from 'react-native-navigation';

import PageContainer from './containers/PageContainer';
/*import Calculator from './Calculator';
import CarDetails from './CarDetails';
import CarCalculator from './CarCalculator';
import PlanDetails from '../components/PlanDetails';
import CustomTopBar from '../components/CustomTopBar';
import FeaturesModal from '../components/FeaturesModal';
import Map from '../components/Map';*/

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('ownAdventure.PageContainer', () => PageContainer);
  /*Navigation.registerComponent('example.Calculator', () => Calculator);
  Navigation.registerComponent('example.CarDetails', ()=> CarDetails);
  Navigation.registerComponent('example.CarCalculator', ()=> CarCalculator);
  Navigation.registerComponent('example.PlanDetails', ()=> PlanDetails);
  Navigation.registerComponent('example.CustomTopBar', ()=> CustomTopBar);
  Navigation.registerComponent('example.FeaturesModal', ()=> FeaturesModal);
  Navigation.registerComponent('example.Map', ()=> Map);*/
}