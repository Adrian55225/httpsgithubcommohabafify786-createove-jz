import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';
import InfoPageLayout from '../components/InfoPageLayout';

const PrivacyPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      subtitle="How we handle your information"
      isDraft={true}
    >
      <div className="space-y-6">
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="text-yellow-800 text-sm">
            <strong>Notice:</strong> This is a draft privacy policy for HeartSync.
            Final legal review is required before this page goes live.
            Content below is general guidance and not finalized policy.
          </p>
        </div>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Information We Collect</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>We collect information you provide directly, such as:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Profile information (name, age, photos, bio)</li>
              <li>Contact information (email address)</li>
              <li>Communication data (messages sent through our platform)</li>
              <li>Payment information (processed securely through our payment providers)</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">How We Use Your Information</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Provide and improve our services</li>
              <li>Match you with compatible users</li>
              <li>Communicate with you about your account</li>
              <li>Ensure platform safety and security</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Data Security</h2>
          </div>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <UserCheck className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Your Choices</h2>
          </div>
          <div className="text-gray-700 space-y-2">
            <p>You can:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Update your profile information at any time</li>
              <li>Delete your account through the Settings page</li>
              <li>Control notification preferences</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Contact Us</h2>
          </div>
          <p className="text-gray-700">
            If you have questions about this privacy policy, please contact us through
            the app or visit our Help Center.
          </p>
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

export default PrivacyPage;
