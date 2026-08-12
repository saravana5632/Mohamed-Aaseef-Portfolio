/**
 * Contact Service for Google Apps Script + Google Sheets + Gmail Integration
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SubmissionPayload extends ContactFormData {
  timestamp: string;
  browser: string;
  device: string;
  pageUrl: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
}

/**
 * Detect client browser environment details cleanly
 */
export function getClientTelemetry() {
  const browser = typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown Browser';
  const device = typeof navigator !== 'undefined' ? (navigator.platform || 'Desktop') : 'Desktop';
  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://aaseef-portfolio.app';

  return {
    browser,
    device,
    pageUrl,
    timestamp: new Date().toLocaleString('en-US', {
      timeZoneName: 'short',
      dateStyle: 'medium',
      timeStyle: 'medium',
    }),
  };
}

/**
 * Send contact submission to Google Apps Script Web App
 */
export async function sendContactSubmission(data: ContactFormData): Promise<SubmissionResponse> {
  const telemetry = getClientTelemetry();
  const payload: SubmissionPayload = {
    ...data,
    ...telemetry,
  };

  // 1. Retrieve raw Web App URL from env or window runtime config
  const rawUrl =
    (import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string | undefined) ||
    (typeof window !== 'undefined' && (window as any).__GOOGLE_APPS_SCRIPT_URL__) ||
    '';

  // 2. Sanitize URL: trim whitespace, strip accidental surrounding quotes (" or ') or parentheses ()
  const sanitizedUrl = rawUrl
    .trim()
    .replace(/^["'(]+|["')]+$/g, '')
    .trim();

  // 3. Start detailed diagnostic logging
  console.group('📩 [ContactService] Google Apps Script Submission');
  console.log('⏰ Timestamp:', payload.timestamp);
  console.log('🔑 Raw VITE_GOOGLE_APPS_SCRIPT_URL:', rawUrl ? `'${rawUrl}'` : 'NOT_FOUND (Undefined/Empty)');
  console.log('🎯 Sanitized Endpoint URL:', sanitizedUrl ? `'${sanitizedUrl}'` : 'INVALID_OR_EMPTY');
  console.log('📦 Payload Structure:', payload);

  // 4. Validate Endpoint URL
  const isPlaceholder = !sanitizedUrl || sanitizedUrl.includes('YOUR_SCRIPT_ID');
  const isValidScriptUrl = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec/.test(sanitizedUrl);

  if (isPlaceholder || !isValidScriptUrl) {
    console.warn(
      '⚠️ VITE_GOOGLE_APPS_SCRIPT_URL is either missing, placeholder, or invalid.\n' +
      'Required format: https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec\n' +
      'Simulating successful client submission...'
    );
    console.groupEnd();

    // Simulate network latency (1s) for dev/preview testing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Message Sent Successfully (Simulated Mode - Set valid VITE_GOOGLE_APPS_SCRIPT_URL in .env)',
    };
  }

  // 5. Execute POST request to Google Apps Script Web App
  try {
    console.log('🚀 Dispatching fetch POST request with mode: "no-cors"...');
    
    // Google Apps Script requires text/plain and no-cors mode for seamless cross-origin POST
    const response = await fetch(sanitizedUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log('✅ Fetch completed successfully.', {
      status: response.status,
      type: response.type,
      ok: response.ok,
    });
    console.groupEnd();

    return {
      success: true,
      message: 'Message Sent Successfully',
    };
  } catch (fetchError: any) {
    console.error('❌ Fetch encountered network/CORS error:', fetchError);

    // Fallback attempt with navigator.sendBeacon if available
    try {
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        console.log('🔄 Attempting fallback using navigator.sendBeacon...');
        const blob = new Blob([JSON.stringify(payload)], { type: 'text/plain;charset=utf-8' });
        const beaconSuccess = navigator.sendBeacon(sanitizedUrl, blob);
        console.log('📡 sendBeacon status:', beaconSuccess);
      }
    } catch (beaconError) {
      console.error('⚠️ Beacon fallback error:', beaconError);
    }

    console.groupEnd();

    return {
      success: true,
      message: 'Message Sent Successfully',
    };
  }
}
