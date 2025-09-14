import React from 'react';
import { SEO } from '../../components/SEO';

export const CancellationPolicy = () => {
  return (
    <>
      <SEO 
        title="Cancellation Policy - Professional Service Company"
        description="Learn about our cancellation policy for ongoing services including SEO, digital marketing, and maintenance packages."
      />
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Cancellation Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  This Cancellation Policy outlines the procedures and conditions for canceling services with Professional Services Company. We aim to provide flexibility while ensuring fair business practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Monthly Subscription Services</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">SEO Services</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>30 days written notice required</li>
                    <li>Cancellation effective at the end of current billing cycle</li>
                    <li>No partial refunds for unused portions of the month</li>
                    <li>All work completed up to cancellation date will be delivered</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Marketing Services</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>30 days written notice required</li>
                    <li>Ad campaign costs are non-refundable</li>
                    <li>Account access will be transferred upon request</li>
                    <li>Final reports will be provided within 7 business days</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project-Based Services</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Web Development</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Cancellation allowed before project commencement</li>
                    <li>50% of project cost retained if work has begun</li>
                    <li>Full payment required if project is 80% complete</li>
                    <li>All completed work will be delivered upon cancellation</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Cancellation possible during concept phase</li>
                    <li>Payment due for all completed design phases</li>
                    <li>Source files provided for paid work only</li>
                    <li>Client retains rights to paid deliverables</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">AI & Automation Projects</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Cancellation terms depend on project complexity</li>
                  <li>Initial consultation and analysis phases are non-cancellable</li>
                  <li>Development work is charged based on completion percentage</li>
                  <li>Custom integrations require full payment once deployed</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Cancel</h2>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cancellation Methods</h3>
                  <ol className="list-decimal list-inside text-gray-700 mb-4">
                    <li>Email cancellation@proservices.com with your request</li>
                    <li>Include your account details and reason for cancellation</li>
                    <li>Specify your preferred last service date</li>
                    <li>Request confirmation of cancellation receipt</li>
                  </ol>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Required Information</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Account holder name and email address</li>
                    <li>Service type and package details</li>
                    <li>Preferred cancellation date</li>
                    <li>Reason for cancellation (optional but helpful)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Immediate Cancellation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Immediate cancellation may be requested in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Breach of service agreement by Professional Services Company</li>
                  <li>Failure to deliver agreed services</li>
                  <li>Technical issues preventing service delivery</li>
                  <li>Business closure or change in requirements</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Each immediate cancellation request will be reviewed on a case-by-case basis.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Post-Cancellation</h2>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Data and Files</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>All client data will be securely deleted within 30 days</li>
                    <li>Backup copies retained for legal/accounting purposes only</li>
                    <li>Client responsible for downloading files before cancellation</li>
                    <li>Login credentials will be disabled immediately</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Reactivation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Services can be reactivated within 60 days of cancellation. After 60 days, new setup fees may apply.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For cancellation requests or questions about this policy:
                </p>
                <div className="mt-4 text-gray-700">
                  <p>Email: cancellation@proservices.com</p>
                  <p>Phone: +1 (234) 567-8900</p>
                  <p>Business Hours: Monday-Friday, 9 AM - 6 PM EST</p>
                  <p>Response Time: Within 24 hours</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};