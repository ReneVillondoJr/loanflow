import {
  CheckCircle2,
  Clock3,
  FileSpreadsheet,
  FileText,
  Trash2,
  XCircle,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type {
  Report,
  ReportStatus,
} from '@/modules/admin/reports/types/reports';

interface RecentReportsProps {
  reports: Report[];
  onView: (report: Report) => void;
  onDelete: (report: Report) => void;
}

function getStatusIcon(status: ReportStatus) {
  if (status === 'READY') {
    return CheckCircle2;
  }

  if (status === 'GENERATING') {
    return Clock3;
  }

  return XCircle;
}

function getStatusLabel(status: ReportStatus) {
  if (status === 'READY') {
    return 'Ready';
  }

  if (status === 'GENERATING') {
    return 'Generating';
  }

  return 'Failed';
}

function getFormatIcon(format: Report['format']) {
  if (format === 'PDF') {
    return FileText;
  }

  return FileSpreadsheet;
}

export function RecentReports({
  reports,
  onView,
  onDelete,
}: RecentReportsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base'>Recent Reports</CardTitle>
      </CardHeader>

      <CardContent className='p-0'>
        <div className='divide-y'>
          {reports.map((report) => {
            const StatusIcon = getStatusIcon(report.status);
            const FormatIcon = getFormatIcon(report.format);

            return (
              <div
                key={report.id}
                className='flex items-center gap-4 px-6 py-4'
              >
                {/* Format Icon */}
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/60'>
                  <FormatIcon className='size-4 text-muted-foreground' />
                </div>

                {/* Report Information */}
                <div className='min-w-0 flex-1'>
                  <button
                    type='button'
                    onClick={() => onView(report)}
                    className='truncate text-left text-sm font-medium hover:underline'
                  >
                    {report.name}
                  </button>

                  <p className='mt-0.5 truncate text-xs text-muted-foreground'>
                    {report.createdBy} · {report.format}
                    {report.fileSize ? ` · ${report.fileSize}` : ''}
                  </p>
                </div>

                {/* Status */}
                <Badge
                  variant='outline'
                  className='hidden shrink-0 items-center gap-1 sm:inline-flex'
                >
                  <StatusIcon className='size-3' />
                  {getStatusLabel(report.status)}
                </Badge>

                {/* Delete */}
                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  onClick={() => onDelete(report)}
                  aria-label={`Delete ${report.name}`}
                  title='Delete report'
                  className='shrink-0'
                >
                  <Trash2 className='size-4' />
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
