import { services, site } from './data';
import { fleetServices } from './fleet-data';
export const catalog = [...services.map(s=>({...s,tasks:s.bestTasks})),...fleetServices];
export { site };
