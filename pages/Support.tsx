import React from 'react';
import { Mail, MessageSquare, CircleHelp } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-20 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">How can we help?</h1>
        <p className="text-xl text-zonix-muted">
          We're here to help you get the most out of Zonix.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {/* Contact Card */}
        <div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors">
          <div className="bg-zonix-accent/10 w-12 h-12 rounded-lg flex items-center justify-center text-zonix-accent mb-6">
            <Mail size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-3">Email Support</h2>
          <p className="text-zonix-muted mb-6">
            For specific inquiries, bugs, or partnership opportunities, drop us a line directly.
          </p>
          <a href="mailto:azimahmed356@gmail.com" className="text-zonix-text font-medium hover:text-white hover:underline decoration-zonix-accent decoration-2 underline-offset-4">
            azimahmed356@gmail.com
          </a>
        </div>

        {/* FAQ Card */}
        <div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/[0.07] transition-colors">
           <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center text-purple-400 mb-6">
            <MessageSquare size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-3">Live Chat</h2>
          <p className="text-zonix-muted mb-6">
            Our team is available 9am - 5pm EST for real-time assistance with your AI coaches.
          </p>
          <span className="text-zonix-muted/50 cursor-not-allowed text-sm">
            Coming soon to Beta
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          <div className="border border-white/5 rounded-xl p-6 bg-white/[0.02]">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CircleHelp size={18} className="text-zonix-muted flex-shrink-0" />
              What exactly is an AI Coach?
            </h4>
            <p className="text-zonix-muted text-sm leading-relaxed ml-7">
              An AI Coach in Zonix is a specialized chat bot. You upload your specific knowledge (PDFs, docs, notes), and the AI learns from that content to answer questions and solve problems just like you would, but instantly and 24/7.
            </p>
          </div>

          <div className="border border-white/5 rounded-xl p-6 bg-white/[0.02]">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CircleHelp size={18} className="text-zonix-muted flex-shrink-0" />
              Is my data private?
            </h4>
            <p className="text-zonix-muted text-sm leading-relaxed ml-7">
              Yes. Your data is used exclusively to fine-tune your specific AI instance. We do not share your raw knowledge base with other users unless you explicitly choose to publish it as an open-source coach.
            </p>
          </div>

          <div className="border border-white/5 rounded-xl p-6 bg-white/[0.02]">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
               <CircleHelp size={18} className="text-zonix-muted flex-shrink-0" />
              When will Zonix launch?
            </h4>
            <p className="text-zonix-muted text-sm leading-relaxed ml-7">
              We are currently in a closed Alpha. Join the waitlist on the home page to get early access when we open up Beta spots in the coming weeks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;