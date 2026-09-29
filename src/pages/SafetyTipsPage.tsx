import React from 'react';
import { Shield, AlertTriangle, Lock, Eye, UserX, Phone, MapPin } from 'lucide-react';
import InfoPageLayout from '../components/InfoPageLayout';

const safetyTips = [
  {
    icon: Lock,
    title: 'Protect Your Personal Information',
    tips: [
      'Never share your home address, workplace, or financial details',
      'Use the in-app messaging until you feel comfortable',
      'Keep conversations on the platform for your safety',
    ],
  },
  {
    icon: Eye,
    title: 'Verify Before You Meet',
    tips: [
      'Video chat before meeting in person',
      'Check that photos match the person you\'re talking to',
      'Be cautious of profiles that seem too good to be true',
    ],
  },
  {
    icon: MapPin,
    title: 'Meet Safely',
    tips: [
      'Always meet in a public place for the first few dates',
      'Tell a friend or family member where you\'re going',
      'Have your own transportation arranged',
      'Stay sober and keep your drink in sight',
    ],
  },
  {
    icon: Phone,
    title: 'Trust Your Instincts',
    tips: [
      'If something feels wrong, it probably is',
      'It\'s okay to end a date early if you feel uncomfortable',
      'Don\'t hesitate to block or report suspicious behavior',
    ],
  },
];

const SafetyTipsPage: React.FC = () => {
  return (
    <InfoPageLayout
      title="Safety Tips"
      subtitle="Your safety is our priority"
    >
      <div className="space-y-6">
        <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-heartsync flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-heartsync">Report Suspicious Behavior</h3>
              <p className="text-sm text-gray-700 mt-1">
                If anyone makes you feel uncomfortable or asks for money, please report them immediately.
                Your reports help keep HeartSync safe for everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {safetyTips.map((section, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-heartsync" />
                </div>
                <h2 className="text-lg font-semibold text-black">{section.title}</h2>
              </div>
              <ul className="ml-10 space-y-2">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-heartsync rounded-full mt-2 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-heartsync flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-black">We're Here to Help</h3>
              <p className="text-sm text-gray-700 mt-1">
                If you ever feel unsafe or need assistance, please contact our support team.
                We take all reports seriously and will investigate promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default SafetyTipsPage;
