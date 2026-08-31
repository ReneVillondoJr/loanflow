-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "alternatePhone" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "civilStatus" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "employerName" TEXT,
ADD COLUMN     "employmentYears" INTEGER,
ADD COLUMN     "jobTitle" TEXT,
ADD COLUMN     "middleName" TEXT,
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "state" TEXT;

-- AlterTable
ALTER TABLE "LoanApplication" ADD COLUMN     "existingDebt" DECIMAL(12,2),
ADD COLUMN     "monthlyExpenses" DECIMAL(12,2),
ADD COLUMN     "purpose" TEXT,
ADD COLUMN     "submittedAt" TIMESTAMP(3);
