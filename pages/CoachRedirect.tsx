import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink, Smartphone } from 'lucide-react';

const CoachRedirect: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            // Attempt to open the custom URL scheme
            window.location.href = `zonix://coach/${id}`;

            // Optional: fallback logic could go here, e.g. checking if the app opened
            // But typically for simple redirection we just attempt it.

            // If we wanted to go to an app store after a timeout:
            // setTimeout(() => {
            //   window.location.href = 'https://apps.apple.com/...';
            // }, 2000);
        }
    }, [id]);

    const handleOpenApp = () => {
        if (id) {
            window.location.href = `zonix://coach/${id}`;
        }
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-zonix-surface rounded-2xl p-8 border border-white/5 text-center space-y-6">
                <div className="w-16 h-16 bg-zonix-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Smartphone className="w-8 h-8 text-zonix-accent" />
                </div>

                <h1 className="text-2xl font-bold text-white">Opening in Zonix...</h1>

                <p className="text-zonix-muted">
                    We're redirecting you to view this coach in the Zonix app.
                </p>

                <div className="pt-4 space-y-3">
                    <button
                        onClick={handleOpenApp}
                        className="w-full bg-zonix-accent hover:bg-zonix-accentHover text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        Open App
                        <ExternalLink size={18} />
                    </button>

                    <button className="w-full bg-white/5 hover:bg-white/10 text-white py-3 px-4 rounded-xl font-medium transition-colors">
                        Download Zonix
                    </button>
                </div>

                <p className="text-xs text-zonix-muted pt-4">
                    If nothing happens, click "Open App" above.
                </p>
            </div>
        </div>
    );
};

export default CoachRedirect;
