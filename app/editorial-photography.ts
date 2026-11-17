import { servicePhotography } from './service-photography';

// Ten distinct, licensed photographs per directory page. Source records are
// maintained in public/optimization/photography-sources.json.
export const editorialPhotography = [
  servicePhotography['candidate-sourcing'],
  servicePhotography['interview-coordination'],
  servicePhotography['employee-records-administration'],
  servicePhotography['benefits-administration-support'],
  servicePhotography['payroll-preparation-support'],
  servicePhotography['onboarding-coordination'],
  servicePhotography['learning-administration'],
  servicePhotography['hr-help-desk-support'],
  servicePhotography['performance-review-administration'],
  servicePhotography['offboarding-coordination'],
] as const;
