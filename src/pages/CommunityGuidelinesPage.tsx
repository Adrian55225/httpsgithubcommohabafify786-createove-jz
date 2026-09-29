import React from 'react';
import { Heart, Users, Shield, MessageCircle, AlertCircle, CheckCircle } from 'lucide-react';
import InfoPageLayout from '../components/InfoPageLayout';

const guidelines = [
  {
    icon: Heart,
    title: 'Be Respectful',
    description: 'Treat all members with kindness and respect. Harassment, hate speech, and discrimination are not tolerated.',
  },
  {
    icon: Users,
    title: 'Be Authentic',
    description: 'Use real photos and accurate information in your profile. Catfishing and fake profiles are prohibited.',
  },
  {
    icon: MessageCircle,
    title: 'Communicate Honestly',
    description: 'Be truthful in your conversations. Scams, spam, and misleading behavior will result in account removal.',
  },
  {
    icon: Shield,
    title: 'Respect Boundaries',
    description: 'Always respect others\' comfort levels. No means no. Unwanted explicit content is not allowed.',
  },
];

const CommunityGuidelinesPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Community Guidelines"
      subtitle="Building a safe and respectful community"
    >
      <div className="space-y-6">
        <p className="text-gray-700">
          At HeartSync, we're committed to creating a safe, welcoming space for meaningful connections.
          These guidelines help ensure everyone has a positive experience.
        </p>

        <div className="space-y-4">
          {guidelines.map((guideline, index) => (
            <div key={index} className="p-4 bg-surface-muted rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <guideline.icon className="w-5 h-5 text-heartsync" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">{guideline.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{guideline.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h2 className="text-lg font-semibold text-black mb-4">What's Not Allowed</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Harassment or bullying',
              'Hate speech or discrimination',
              'Fake profiles or catfishing',
              'Spam or promotional content',
              'Explicit content without consent',
              'Asking for money or gifts',
              'Sharing others\' private info',
              'Underage users',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <AlertCircle className="w-4 h-4 text-heartsync flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h2 className="text-lg font-semibold text-black mb-4">Reporting Violations</h2>
          <p className="text-gray-700">
            If you see someone violating these guidelines, please report them using the report button
            on their profile or in chat. Our moderation team reviews all reports promptly.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-2 rounded-lg">
            <CheckCircle className="w-4 h-4" />
            <span>Thank you for helping keep HeartSync safe!</span>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default CommunityGuidelinesPage;
