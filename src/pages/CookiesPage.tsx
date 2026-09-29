import React from 'react';
import { Cookie, Settings, Shield, Info } from 'lucide-react';
import InfoPageLayout from '../components/InfoPageLayout';

const CookiesPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies"
      isDraft={true}
    >
      <div className="space-y-6">
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="text-yellow-800 text-sm">
            <strong>Notice:</strong> This is a draft cookie policy for HeartSync.
            Final legal review is required before this page goes live.
          </p>
        </div>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Cookie className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">What Are Cookies?</h2>
          </div>
          <p className="text-gray-700">
            Cookies are small text files stored on your device when you visit our website.
            They help us provide a better experience by remembering your preferences and
            understanding how you use our service.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Settings className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Types of Cookies We Use</h2>
          </div>
          <div className="text-gray-700 space-y-3">
            <div className="p-3 bg-surface-muted rounded-lg">
              <h3 className="font-medium text-black">Essential Cookies</h3>
              <p className="text-sm mt-1">
                Required for the service to function properly. These include authentication
                and security cookies.
              </p>
            </div>
            <div className="p-3 bg-surface-muted rounded-lg">
              <h3 className="font-medium text-black">Functional Cookies</h3>
              <p className="text-sm mt-1">
                Remember your preferences and settings to provide a personalized experience.
              </p>
            </div>
            <div className="p-3 bg-surface-muted rounded-lg">
              <h3 className="font-medium text-black">Analytics Cookies</h3>
              <p className="text-sm mt-1">
                Help us understand how users interact with our service so we can improve it.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Managing Cookies</h2>
          </div>
          <p className="text-gray-700">
            You can control cookies through your browser settings. Disabling certain cookies
            may affect the functionality of our service. Most browsers allow you to:
          </p>
          <ul className="list-disc list-inside ml-2 mt-2 space-y-1 text-gray-700">
            <li>View cookies stored on your device</li>
            <li>Block third-party cookies</li>
            <li>Delete cookies after each session</li>
            <li>Block all cookies</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-heartsync" />
            <h2 className="text-lg font-semibold text-black">Third-Party Services</h2>
          </div>
          <p className="text-gray-700">
            Some third-party services we use (such as analytics and payment providers)
            may also set cookies. Please refer to their privacy policies for more information.
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

export default CookiesPage;
