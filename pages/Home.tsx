import React, { useState } from 'react';
import { ArrowRight, Brain, Share2, Search, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Home: React.FC = () => {
  const [profileLink, setProfileLink] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileLink) return;

    setStatus('loading');

    try {
      await addDoc(collection(db, 'waitlist'), {
        profileLink: profileLink,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setProfileLink('');
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col items-center animate-fade-in">

      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto text-center py-20 md:py-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zonix-accent/10 border border-zonix-accent/20 text-zonix-accent text-xs font-medium mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zonix-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zonix-accent"></span>
          </span>
          Early Access Waitlist
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Scale your intellect.
        </h1>

        <p className="text-xl text-zonix-muted mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Create, browse, and share AI coaches fine-tuned on your unique knowledge base. The marketplace for expert digital twins.
        </p>

        {/* Waitlist Form */}
        <div className="w-full max-w-md mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {status === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center justify-center gap-3">
              <CheckCircle2 size={20} />
              <span className="font-medium">You're on the list! We'll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                placeholder="LinkedIn / X (Twitter) / Portfolio link..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 pr-32 text-white placeholder:text-white/20 focus:outline-none focus:border-zonix-accent/50 focus:ring-1 focus:ring-zonix-accent/50 transition-all"
                value={profileLink}
                onChange={(e) => setProfileLink(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 top-2 bottom-2 bg-zonix-text text-zonix-bg hover:bg-white font-medium px-4 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <>Join <ArrowRight size={16} /></>}
              </button>
            </form>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 mt-3 text-sm animate-fade-in">
              <AlertCircle size={16} />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}
          <p className="text-xs text-zonix-muted mt-4">
            We are looking for professionals and experts in their fields. Your time and expertise will be monetarily rewarded. Limited spots available.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid md:grid-cols-3 gap-8 py-20 w-full animate-slide-up" style={{ animationDelay: '0.6s' }}>
        <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
          <div className="h-12 w-12 rounded-lg bg-zonix-accent/10 flex items-center justify-center text-zonix-accent mb-6 group-hover:scale-110 transition-transform duration-300">
            <Brain size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Create</h3>
          <p className="text-zonix-muted leading-relaxed">
            Upload your documents, notes, and content. Zonix builds a RAG-based AI that thinks and speaks like you.
          </p>
        </div>

        <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
          <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Search size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Browse</h3>
          <p className="text-zonix-muted leading-relaxed">
            Discover experts in niche fields. From coding mentors to fitness coaches, find the perfect AI guide.
          </p>
        </div>

        <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
          <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Share2 size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Share</h3>
          <p className="text-zonix-muted leading-relaxed">
            Monetize your expertise. Publish your AI coach to the world and earn when others learn from it.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;