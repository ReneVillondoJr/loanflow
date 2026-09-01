import {
  ApplicationsContent,
  ApplicationsHeader,
  ApplicationsSummary,
} from '@/modules/applications';

import {
  applications,
  applicationSummary,
} from '@/modules/applications/data/applications';

export default function ClientApplicationsPage() {
  return (
    <div className='space-y-6'>
      <ApplicationsHeader total={applicationSummary.total} />

      <ApplicationsSummary summary={applicationSummary} />

      <ApplicationsContent applications={applications} />
    </div>
  );
}
