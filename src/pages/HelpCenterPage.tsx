import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, CreditCard, User, Shield, Bell, ChevronRight } from 'lucide-react';
import InfoPageLayout from '../components/InfoPageLayout';

const helpTopics = [
  { icon: User, title: 'Account Setup', description: 'Creating and managing your HeartSync profile' },
  { icon: MessageCircle, title: 'Messaging', description: 'Sending messages and starting conversations' },
  { icon: CreditCard, title: 'Subscriptions', description: 'Premium features and payment options' },
  { icon: Shield, title: 'Privacy & Security', description: 'Keeping your account and data safe' },
  { icon: Bell, title: 'Notifications', description: 'Managing alerts and updates' },
  { icon: Mail, title: 'Contact Support', description: 'Get help from our support team' },
];

const HelpCenterPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Help Center"
      subtitle="Find answers and get support for HeartSync"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Popular Topics</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {helpTopics.map((topic, index) => (
              <div
                key={index}
                className="p-4 bg-surface-muted rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <topic.icon className="w-5 h-5 text-heartsync" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-black flex items-center gap-2">
                      {topic.title}
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-heartsync transition-colors" />
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">{topic.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h2 className="text-lg font-semibold text-black mb-4">Getting Started</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Welcome to HeartSync! We're here to help you find meaningful connections.
              Here are some quick tips to get started:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Complete your profile with photos and interests to get better matches</li>
              <li>Be authentic and honest in your bio</li>
              <li>Use the Discover feature to find people who share your interests</li>
              <li>Start conversations with a friendly greeting</li>
              <li>Upgrade to Premium for unlimited messaging and more features</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h2 className="text-lg font-semibold text-black mb-4">Need More Help?</h2>
          <p className="text-gray-700">
            If you can't find what you're looking for, our support team is here to help.
            You can reach us through the app settings or check our other help resources below.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/safety-tips" className="text-heartsync hover:underline text-sm font-medium">
              Safety Tips →
            </Link>
            <Link to="/community-guidelines" className="text-heartsync hover:underline text-sm font-medium">
              Community Guidelines →
            </Link>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default HelpCenterPage;
