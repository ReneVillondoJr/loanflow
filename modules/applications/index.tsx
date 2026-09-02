import { ApplicationsContent } from './components/applications-content';
import { ApplicationsHeader } from './components/header';
import { ApplicationsSummary } from './components/summary';

import { applications, applicationSummary } from './data/applications';

export default function ApplicationsModule() {
  return (
    <div className='space-y-6'>
      <ApplicationsHeader total={applicationSummary.total} />

      <ApplicationsSummary summary={applicationSummary} />

      <ApplicationsContent applications={applications} />
    </div>
  );
}
