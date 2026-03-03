import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-secondary-50">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20 sm:py-28">
        <div className="max-w-xl w-full text-center bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-primary-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Thank you for reaching out
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We have received your message and will get back to you within 24 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to contact
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
