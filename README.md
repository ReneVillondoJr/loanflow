# LoanFlow — Loan Origination & Management Platform

A modern full-stack loan management platform designed to manage the complete lending lifecycle — from customer applications and document submission to underwriting, approval, disbursement, repayment tracking, and administrative oversight.

LoanFlow provides a secure, role-based environment for customers, loan officers, underwriters, administrators, and system managers.

---

## Overview

LoanFlow is designed to model a real-world lending operation through one centralized platform.

The application is divided into two primary experiences:

### Customer Portal

Customers can:

- Create an account
- Complete their profile
- Submit loan applications
- View loan products
- Upload required documents
- Track application status
- View loan details
- Review repayment schedules
- Monitor payment history
- Receive application updates

### Administrative System

Authorized staff can:

- Manage customers
- Review applications
- Assign loan officers
- Review submitted documents
- Perform underwriting
- Approve or reject applications
- Manage loan products
- Track active loans
- Monitor repayments
- View financial reports
- Manage users and roles
- Review activity logs

---

# Project Goals

The goal of LoanFlow is to demonstrate a realistic financial business workflow using a scalable full-stack architecture.

The project focuses on:

- Loan lifecycle management
- Secure authentication
- Role-based access control
- Application workflow management
- Underwriting workflow
- Document management
- Payment tracking
- Financial calculations
- Relational database design
- Administrative dashboards
- Audit logging
- Production-oriented architecture

---

# Key Features

## Customer Features

- Customer registration
- Secure authentication
- Customer dashboard
- Profile management
- Loan product browsing
- Loan application
- Application tracking
- Document submission
- Loan details
- Repayment schedule
- Payment history
- Application notifications

---

# Loan Products

Administrators can configure loan products.

Example:

```text
Personal Loan
Business Loan
Auto Loan
Home Loan
Emergency Loan
Education Loan

A loan product may define:

Name
Description
Minimum Amount
Maximum Amount
Interest Rate
Loan Term
Processing Fee
Eligibility Requirements
Status
Loan Application

Customers can submit a loan application.

Application Information
Customer
Loan Product
Requested Amount
Loan Term
Purpose
Employment Information
Monthly Income
Monthly Expenses
Existing Obligations
Supporting Documents
Loan Application Lifecycle
DRAFT
  ↓
SUBMITTED
  ↓
UNDER_REVIEW
  ↓
UNDERWRITING
  ↓
APPROVED / REJECTED
  ↓
DOCUMENTATION
  ↓
DISBURSED
  ↓
ACTIVE
  ↓
PAID_OFF

Applications can also enter:

CANCELLED
WITHDRAWN
Loan Officers

Loan officers are responsible for handling assigned applications.

They can:

View assigned applications
Review customer information
Review documents
Contact customers
Add application notes
Request additional information
Submit applications for underwriting
Track assigned loans
Underwriting

The underwriting workflow allows authorized underwriters to evaluate applications.

Underwriting Information
Credit Information
Income Verification
Debt Obligations
Employment Information
Requested Loan Amount
Risk Assessment
Debt-to-Income Ratio
Supporting Documents
Underwriter Notes
Decision
Underwriting Decision
APPROVE
CONDITIONAL_APPROVAL
REQUEST_INFORMATION
REJECT
Loan Approval

Approved applications move into the loan creation process.

Application Approved
        ↓
Loan Created
        ↓
Loan Terms Confirmed
        ↓
Documentation
        ↓
Disbursement
        ↓
Active Loan
Loan Management

Administrators can manage active loans.

Loan Information
Loan Number
Customer
Loan Product
Principal Amount
Interest Rate
Term
Start Date
Maturity Date
Outstanding Balance
Status
Loan Status
PENDING
ACTIVE
PAST_DUE
DEFAULTED
PAID_OFF
CANCELLED
Repayment Management

LoanFlow tracks loan repayment schedules and payment history.

Repayment Schedule

Each loan can contain:

Installment Number
Due Date
Principal
Interest
Fees
Total Due
Amount Paid
Remaining Balance
Status
Payment Status
UPCOMING
DUE
PAID
PARTIALLY_PAID
LATE
MISSED
Payment Workflow
Loan Active
    ↓
Installment Generated
    ↓
Payment Due
    ↓
Payment Submitted
    ↓
Payment Recorded
    ↓
Balance Updated
Customer Dashboard

The customer dashboard provides a centralized view of the customer's financial activity.

Dashboard Sections
Active Loans
Pending Applications
Upcoming Payments
Outstanding Balance
Recent Payments
Application Status
Administrative Dashboard

The admin dashboard provides a complete overview of lending operations.

Main Metrics
Total Customers
Pending Applications
Applications Under Review
Approved Applications
Active Loans
Total Disbursed
Outstanding Balance
Overdue Payments
Dashboard Analytics
Application volume
Approval rate
Rejection rate
Loan portfolio
Disbursement trends
Repayment trends
Delinquency trends
Loan officer performance
Customer Management

Administrators can manage customer records.

Customer Information
Name
Email
Phone
Address
Date of Birth
Employment Information
Income
Account Status
Customer Activity

Administrators can view:

Loan applications
Active loans
Payment history
Submitted documents
Application notes
Activity history
Document Management

Loan applications may require supporting documentation.

Examples:

Government ID
Proof of Income
Employment Certificate
Bank Statement
Proof of Address
Business Documents
Collateral Documents

Document workflow:

REQUESTED
  ↓
UPLOADED
  ↓
UNDER_REVIEW
  ↓
VERIFIED / REJECTED
Notifications

LoanFlow can provide notifications for:

Application submission
Application status changes
Document requests
Approval
Rejection
Payment reminders
Overdue payments
Loan maturity
User Roles

LoanFlow uses role-based access control.

SUPER_ADMIN

Full system access.

Users
Roles
Loan Products
Customers
Applications
Loans
Payments
Reports
Activity Logs
Settings
ADMIN

Administrative and operational access.

Customers
Applications
Loans
Payments
Reports
LOAN_OFFICER

Application and customer workflow access.

Assigned Applications
Customers
Application Notes
Documents
Appointments / Follow-ups
UNDERWRITER

Credit review and application decision access.

Assigned Applications
Customer Financial Information
Documents
Risk Assessment
Underwriting Decisions
CUSTOMER

Customer portal access.

Profile
Loan Products
Applications
Documents
Loans
Repayments
Payments
Authentication & Authorization

LoanFlow provides secure authentication and role-based authorization.

Authentication
User login
Logout
Session management
Protected routes
Password hashing
Authenticated user context
Authorization

Every protected area is evaluated against the authenticated user's role and permissions.

User
 ↓
Authenticated
 ↓
Role
 ↓
Permission
 ↓
Resource Access

Unauthorized users are redirected to the appropriate access-denied page.

Role-Based Application Access
                         LoanFlow
                            │
             ┌──────────────┼──────────────┐
             │              │              │
         CUSTOMER      LOAN OFFICER    UNDERWRITER
             │              │              │
        Applications     Assigned       Credit Review
        Documents        Loans          Decisions
        Payments         Customers      Documents
             │              │              │
             └──────────────┼──────────────┘
                            │
                         ADMIN
                            │
                     SUPER_ADMIN
Reports & Analytics

LoanFlow provides reporting for lending operations.

Application Reports
Applications by status
Applications by loan product
Approval rate
Rejection rate
Average processing time
Portfolio Reports
Active loan balance
Total disbursed
Outstanding principal
Interest collected
Paid-off loans
Delinquent accounts
Repayment Reports
Payments received
Upcoming payments
Late payments
Missed payments
Delinquency rate
Activity Logs

The platform records important administrative events.

Example:

Loan Officer
Updated Application
"LN-2026-000123"
September 11, 2026 — 11:30 AM

Activities may include:

Login
Application creation
Application update
Status change
Loan approval
Loan rejection
Document verification
Payment creation
User changes
Permission changes
Core Business Workflow
Complete Loan Lifecycle
Customer
   ↓
Create Account
   ↓
Browse Loan Products
   ↓
Submit Application
   ↓
Document Submission
   ↓
Loan Officer Review
   ↓
Underwriting
   ↓
Approval / Rejection
   ↓
Loan Creation
   ↓
Documentation
   ↓
Disbursement
   ↓
Active Loan
   ↓
Repayment
   ↓
Paid Off
Technology Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Lucide React
Backend
Next.js App Router
Server Components
Server Actions / Route Handlers
Prisma ORM
PostgreSQL
Authentication
NextAuth / Auth.js
Credentials authentication
Role-based authorization
Validation
Zod
React Hook Form
Database
PostgreSQL
Prisma ORM
Development
ESLint
Prettier
Git
GitHub
npm
Architecture

LoanFlow follows a modular architecture designed to keep business domains isolated and maintainable.

app/
    ↓
Routes & Pages
    ↓
modules/
    ↓
Business Features
    ↓
services / server logic
    ↓
Prisma ORM
    ↓
PostgreSQL
Project Structure
loanflow/
│
├── app/
│   ├── auth/
│   │   └── login/
│   │       └── page.tsx
│   │
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── customers/
│   │   ├── applications/
│   │   ├── loans/
│   │   ├── payments/
│   │   ├── reports/
│   │   ├── users/
│   │   ├── activity-logs/
│   │   └── settings/
│   │
│   ├── clients/
│   │   ├── dashboard/
│   │   ├── applications/
│   │   ├── loans/
│   │   ├── payments/
│   │   └── profile/
│   │
│   └── unauthorized/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── dashboard/
│   ├── forms/
│   ├── tables/
│   └── ui/
│
├── modules/
│   ├── applications/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── services/
│   │   └── index.tsx
│   │
│   ├── loans/
│   ├── customers/
│   ├── payments/
│   ├── underwriting/
│   ├── loan-products/
│   ├── dashboard/
│   └── auth/
│
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   ├── permissions.ts
│   ├── calculations/
│   └── validations/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   ├── images/
│   └── icons/
│
├── types/
│
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── prisma.config.ts
├── tsconfig.json
└── README.md
Application Routes
Authentication
/auth/login
/unauthorized
Customer
/clients/dashboard
/clients/applications
/clients/applications/new
/clients/applications/[id]
/clients/loans
/clients/loans/[id]
/clients/payments
/clients/profile
Admin
/admin/dashboard

/admin/customers
/admin/customers/[id]

/admin/applications
/admin/applications/[id]

/admin/loans
/admin/loans/[id]

/admin/payments

/admin/loan-products

/admin/reports

/admin/users

/admin/activity-logs

/admin/settings
Database Model

The database can be centered around these entities:

User
Role
CustomerProfile
LoanProduct
LoanApplication
ApplicationDocument
ApplicationNote
UnderwritingReview
Loan
RepaymentSchedule
Payment
Notification
ActivityLog

Potential supporting entities:

Address
Employment
FinancialProfile
LoanOfficerAssignment
Database Relationships
User
 ├── CustomerProfile
 └── Staff Profile

Customer
 ├── LoanApplications
 ├── Loans
 ├── Payments
 └── Notifications

LoanProduct
 └── LoanApplications

LoanApplication
 ├── Documents
 ├── Notes
 ├── UnderwritingReview
 └── Loan

Loan
 ├── RepaymentSchedules
 └── Payments
Core Data Flow
Customer
   │
   └── LoanApplication
          │
          ├── Documents
          ├── Notes
          └── UnderwritingReview
                     │
                     ↓
                  Decision
                     │
             ┌───────┴───────┐
             │               │
          Approved         Rejected
             │
             ↓
            Loan
             │
             ├── Repayment Schedule
             │
             └── Payments
Financial Calculations

LoanFlow can support calculations such as:

Principal
Interest
Installment amount
Total repayment
Remaining balance
Interest paid
Outstanding principal
Late payment amounts

A common amortizing-loan calculation is:

M = P × [r(1 + r)^n] / [(1 + r)^n − 1]

Where:

M = Monthly Payment
P = Principal
r = Monthly Interest Rate
n = Number of Payments

Financial calculations should be handled carefully on the server and validated before being persisted.

Application Validation

Forms can be validated using:

React Hook Form
        ↓
Zod
        ↓
Server Validation
        ↓
Business Rules
        ↓
Database

Validation areas include:

Registration
Login
Customer profile
Loan applications
Loan products
Documents
Underwriting
Payments
User management
Security

Because LoanFlow handles financial workflows, security is a major architectural concern.

Security practices include:

Authentication
Password hashing
Protected routes
Role-based authorization
Server-side permission checks
Server-side validation
Secure environment variables
Controlled access to customer data
Audit logging
Input validation
Database constraints

Sensitive financial and authentication information should never be exposed to unauthorized clients.

Performance

The application is designed to support efficient business operations.

Performance strategies include:

Server Components
Server-side data fetching
Pagination
Efficient Prisma queries
Database indexing
Optimized dashboard queries
Loading states
Error boundaries
Selective client components
Responsive Design

LoanFlow is designed for:

Desktop
Laptop
Tablet
Mobile

The customer portal prioritizes responsive usability while the admin dashboard is optimized for business workflows.

Accessibility

The interface aims to follow accessible UI practices.

Examples:

Semantic HTML
Keyboard navigation
Accessible forms
Clear labels
Focus states
Descriptive buttons
Appropriate contrast
Responsive layouts
Installation
1. Clone the Repository
git clone https://github.com/your-username/loanflow.git
cd loanflow
2. Install Dependencies
npm install
3. Configure Environment Variables

Create:

.env

Use .env.example as the template.

Example:

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

NEXTAUTH_URL="http://localhost:3000"

NEXTAUTH_SECRET="your-secret-key"

Depending on the authentication configuration, additional environment variables may be required.

Database Setup

Generate Prisma Client:

npx prisma generate

Create the database migration:

npx prisma migrate dev

Seed development data:

npx prisma db seed

Open Prisma Studio:

npx prisma studio
Development

Start the development server:

npm run dev

Open:

http://localhost:3000

Customer dashboard:

http://localhost:3000/clients/dashboard

Admin dashboard:

http://localhost:3000/admin/dashboard
Production

Create a production build:

npm run build

Start the application:

npm run start

Run lint:

npm run lint
Useful Commands
npm run dev
npm run build
npm run start
npm run lint

npx prisma generate
npx prisma migrate dev
npx prisma db seed
npx prisma studio
Environment Variables

Example .env.example:

DATABASE_URL=""

NEXTAUTH_URL="http://localhost:3000"

NEXTAUTH_SECRET=""

Never commit .env files containing production secrets.

Development Seed Data

The development seed can provide sample:

Users
Roles
Customers
Loan products
Loan applications
Underwriting reviews
Loans
Repayment schedules
Payments

This allows the dashboard and workflows to be tested without manually entering all data.

Example Development Roles
SUPER_ADMIN
ADMIN
LOAN_OFFICER
UNDERWRITER
CUSTOMER

Development credentials should be kept separate from production credentials.

Testing Strategy
Unit Tests

Test:

Financial calculations
Validation schemas
Permission helpers
Utility functions
Business logic
Component Tests

Test:

Application forms
Loan forms
Payment forms
Data tables
Filters
Dialogs
Dashboard components
Integration Tests

Test:

Authentication
Application creation
Underwriting workflow
Loan approval
Loan creation
Payment recording
Role restrictions
End-to-End Tests

Example:

Customer Login
      ↓
Apply for Loan
      ↓
Submit Documents
      ↓
Loan Officer Review
      ↓
Underwriter Review
      ↓
Approve
      ↓
Create Loan
      ↓
Generate Repayment Schedule
      ↓
Record Payment
Deployment

Typical production architecture:

GitHub
   ↓
Deployment Platform
   ↓
Next.js Application
   ↓
PostgreSQL

Production environment variables should be configured through the deployment provider.

Production Checklist
[ ] Environment variables configured
[ ] Production database configured
[ ] Prisma migrations applied
[ ] Prisma Client generated
[ ] Authentication tested
[ ] RBAC tested
[ ] Customer routes tested
[ ] Admin routes tested
[ ] Underwriting workflow tested
[ ] Loan calculations verified
[ ] Payment workflow tested
[ ] Validation tested
[ ] Error handling tested
[ ] Responsive UI tested
[ ] Accessibility reviewed
[ ] Security reviewed
[ ] Production build successful
Future Improvements
Customer Experience
Customer dashboard improvements
Loan comparison
Application timeline
Real-time notifications
Secure messaging
Document center
Lending Operations
Credit scoring
Automated eligibility rules
Risk scoring
Automated underwriting
Collateral management
Loan restructuring
Refinancing workflow
Payments
Online payments
Payment gateways
Automatic payment reminders
Recurring payments
Receipt generation
Communication
Email notifications
SMS notifications
Application alerts
Payment reminders
Reporting
Portfolio analytics
Delinquency reports
Risk dashboards
Officer performance
Product performance
Financial exports
Integrations
Credit bureau APIs
Payment gateways
Banking APIs
Email providers
SMS providers
Cloud document storage
Portfolio Highlights

LoanFlow demonstrates practical experience in:

Full-stack web development
Financial application architecture
Database design
Relational modeling
Authentication
RBAC
CRUD operations
Complex business workflows
Form validation
Financial calculations
Dashboard development
Data management
Audit logging
Responsive design
Production-oriented architecture
What This Project Demonstrates

LoanFlow goes beyond a basic loan application form.

It connects:

Customer Portal
      +
Loan Products
      +
Loan Applications
      +
Document Management
      +
Loan Officer Workflow
      +
Underwriting
      +
Loan Management
      +
Repayment Scheduling
      +
Payment Tracking
      +
Administration
      +
RBAC
      +
Analytics

This demonstrates the ability to translate a complex business process into a structured, secure full-stack application.

Main Application Areas
Customer Portal
Dashboard
Loan Products
Applications
Application Details
Documents
Loans
Loan Details
Repayments
Payment History
Profile
Administrative System
Dashboard
Customers
Applications
Application Review
Underwriting
Loans
Payments
Loan Products
Reports
Users
Activity Logs
Settings
Project Roadmap
Phase 1 — Foundation
[✓] Project setup
[✓] Next.js
[✓] TypeScript
[✓] Tailwind CSS
[✓] shadcn/ui
[✓] Modular architecture
Phase 2 — Database
[ ] PostgreSQL
[ ] Prisma configuration
[ ] Schema design
[ ] Migrations
[ ] Seed data
Phase 3 — Authentication
[ ] Authentication
[ ] Session management
[ ] Roles
[ ] Permissions
[ ] Protected routes
Phase 4 — Customer Portal
[ ] Customer dashboard
[ ] Loan products
[ ] Loan application
[ ] Document upload
[ ] Application tracking
[ ] Loan details
[ ] Payments
Phase 5 — Administration
[ ] Admin dashboard
[ ] Customer management
[ ] Application management
[ ] Loan officer workflow
[ ] Underwriting
[ ] Loan management
[ ] Payments
[ ] Reports
[ ] User management
[ ] Activity logs
Phase 6 — Quality
[ ] Validation
[ ] Error handling
[ ] Security review
[ ] Responsive testing
[ ] Accessibility
[ ] Performance optimization
[ ] Testing
Phase 7 — Deployment
[ ] Production database
[ ] Environment variables
[ ] Production build
[ ] Deployment
[ ] Monitoring
Project Status
Planning
████████████████████ 100%

Architecture
████████████████████ 100%

Database
████████████████████ 100%

Authentication
████████████████████ 100%

Customer Portal
████████████████████ 100%

Admin Dashboard
████████████████████ 100%

Underwriting
██████████░░░░░░░░░░ 50%

Payments
██████████░░░░░░░░░░ 50%

Testing
████████░░░░░░░░░░░░ 40%

Deployment
██████░░░░░░░░░░░░░░ 30%

Update project percentages as development progresses.

Recommended Repository Name
loanflow

or:

loanflow-platform
Recommended Product Description
LoanFlow — Loan Origination & Management Platform
Author
Rene B. Villondo Jr.

Full-Stack Web Developer & IT Support Specialist

GitHub:

https://github.com/ReneVillondoJr

Portfolio:

https://portfolio-renevillondo.vercel.app

LinkedIn:

https://www.linkedin.com/in/rene-villondo-5a6858430/

License

This project is intended for portfolio and educational purposes.

Add an appropriate open-source license if the project is intended for public distribution.

Built With
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Prisma
PostgreSQL
NextAuth
Zod
React Hook Form
Lucide React
Final Architecture
                           LOANFLOW
                              │
             ┌────────────────┴────────────────┐
             │                                 │
       CUSTOMER PORTAL                  ADMIN PLATFORM
             │                                 │
       Dashboard                         Dashboard
       Loan Products                     Customers
       Applications                      Applications
       Documents                         Loan Officers
       Loans                             Underwriting
       Payments                          Loans
       Profile                           Payments
                                         Reports
                                         Users
                                         Activity Logs
                                         Settings
             │                                 │
             └────────────────┬────────────────┘
                              │
                           Next.js
                              │
                     Authentication
                              │
                            RBAC
                              │
                           Prisma
                              │
                         PostgreSQL
