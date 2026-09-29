import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, RefreshCw } from 'lucide-react';
import InfoPageLayout from '../components/InfoPageLayout';

const TermsPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Terms of Service"
      subtitle="Terms and conditions for using HeartSync"
      isDraft={true}
    >
      <div className="space-y-6">
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="text-yellow-800 text-sm">
            <strong>Notice:</strong> This is a draft terms of service for HeartSync.
            Final legal review is required before this page goes live.
            Content below is general guidance and not finalized terms.
          </p>
        </div>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Acceptance of Terms</h2>
          </div>
          <p className="text-gray-700">
            By creating an account and using HeartSync, you agree to abide by these terms.
            If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Your Responsibilities</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>As a HeartSync user, you agree to:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Provide accurate profile information</li>
              <li>Be at least 18 years old</li>
              <li>Use the service respectfully and lawfully</li>
              <li>Not impersonate others</li>
              <li>Not engage in harassment or harmful behavior</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Prohibited Activities</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>You may not:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Use the service for illegal purposes</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Share explicit content without consent</li>
              <li>Attempt to scam or defraud others</li>
              <li>Violate applicable laws or regulations</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Our Rights</h2>
          </div>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate accounts that violate these terms.
            We may modify these terms at any time, with notice to users.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <RefreshCw className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Subscription Terms</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>For premium subscriptions:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Subscriptions auto-renew unless cancelled</li>
              <li>You may cancel anytime through your account settings</li>
              <li>Refund policies are determined on a case-by-case basis</li>
            </ul>
          </div>
        </section>

        <div className="pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Last updated: [Date to be added]
            <br />
            This document is pending final legal review.
          </p>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default TermsPage;
