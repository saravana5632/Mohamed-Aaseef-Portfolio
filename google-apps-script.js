/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT FOR MOHAMED AASEEF'S PORTFOLIO CONTACT FORM
 * ==============================================================================
 * 
 * Target Email: mmohamedaaseef@gmail.com
 * Google Sheet Columns: Timestamp | Name | Email | Subject | Message | Browser | Device | Page URL
 * 
 * INSTRUCTIONS TO DEPLOY:
 * ------------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.google.com) and create a new spreadsheet named:
 *    "Mohamed Aaseef - Portfolio Contact Submissions"
 * 2. In the top menu, click Extensions > Apps Script.
 * 3. Delete any existing code in the editor, and paste this entire file.
 * 4. Click the Save icon (💾) or press Ctrl+S / Cmd+S.
 * 5. Click Deploy > New deployment.
 * 6. Select type: "Web app" (click the gear icon ⚙️ next to 'Select type').
 * 7. Set configuration:
 *    - Description: Portfolio Contact Form API
 *    - Execute as: "Me" (your Google Account)
 *    - Who has access: "Anyone" (CRITICAL: Must be "Anyone" so visitors can send messages)
 * 8. Click "Deploy".
 * 9. Authorize the requested permissions when prompted (click Advanced > Go to Portfolio Contact Form API).
 * 10. Copy the Web App URL (starts with https://script.google.com/macros/s/.../exec).
 * 11. Paste this URL into your .env file or directly into your React config:
 *     VITE_GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
 * ==============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Try to acquire lock for up to 10 seconds to avoid concurrency issues
  lock.tryLock(10000);

  try {
    // 1. Parse incoming payload
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        // Fallback for form-urlencoded or parameter object
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // 2. Extract & Sanitize fields
    var name = sanitizeInput(data.name || '');
    var email = sanitizeInput(data.email || '');
    var subject = sanitizeInput(data.subject || '');
    var message = sanitizeInput(data.message || '');
    var browser = sanitizeInput(data.browser || 'Unknown Browser');
    var device = sanitizeInput(data.device || 'Unknown Device');
    var pageUrl = sanitizeInput(data.pageUrl || '');
    var timestamp = data.timestamp || new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

    // 3. Server-side Validation
    if (!name || name.length < 2) {
      return createJsonResponse(false, "Name must be at least 2 characters long.");
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      return createJsonResponse(false, "Please provide a valid email address.");
    }
    if (!subject || subject.length < 5) {
      return createJsonResponse(false, "Subject must be at least 5 characters long.");
    }
    if (!message || message.length < 15) {
      return createJsonResponse(false, "Message must be at least 15 characters long.");
    }

    // 4. Access Active Sheet and verify/insert Header
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Subject",
        "Message",
        "Browser",
        "Device",
        "Page URL"
      ]);
      // Format Header Row
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0D1420");
      headerRange.setFontColor("#00E5FF");
    }

    // 5. Anti-spam Check: Prevent rapid duplicate submission from same email within 30s
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      var lastEmail = sheet.getRange(lastRow, 3).getValue();
      var lastMessage = sheet.getRange(lastRow, 5).getValue();
      if (lastEmail === email && lastMessage === message) {
        return createJsonResponse(true, "Message already recorded.");
      }
    }

    // 6. Append Row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      subject,
      message,
      browser,
      device,
      pageUrl
    ]);

    // 7. Send Email Notification to Mohamed Aaseef
    var recipientEmail = "mmohamedaaseef@gmail.com";
    var emailSubject = "📩 New Portfolio Contact Form Submission";
    
    var emailBody = 
      "You have received a new portfolio enquiry.\n\n" +
      "Name:\n" + name + "\n\n" +
      "Email:\n" + email + "\n\n" +
      "Subject:\n" + subject + "\n\n" +
      "Message:\n" + message + "\n\n" +
      "Date:\n" + timestamp + "\n\n" +
      "Browser:\n" + browser + "\n\n" +
      "Device:\n" + device + "\n\n" +
      "Page URL:\n" + pageUrl + "\n";

    var htmlBody = 
      "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; background-color: #030509; color: #f8fafc;'>" +
        "<h2 style='color: #00E5FF; margin-top: 0; border-bottom: 2px solid #168BFF; padding-bottom: 12px;'>📩 New Portfolio Enquiry</h2>" +
        "<p style='color: #94a3b8; font-size: 14px;'>You have received a new submission from your online portfolio contact form.</p>" +
        "<table style='width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;'>" +
          "<tr><td style='padding: 8px 0; color: #94a3b8; width: 100px; font-weight: bold;'>Name:</td><td style='color: #ffffff; font-weight: bold;'>" + escapeHtml(name) + "</td></tr>" +
          "<tr><td style='padding: 8px 0; color: #94a3b8; font-weight: bold;'>Email:</td><td style='color: #00E5FF;'><a href='mailto:" + escapeHtml(email) + "' style='color: #00E5FF; text-decoration: none;'>" + escapeHtml(email) + "</a></td></tr>" +
          "<tr><td style='padding: 8px 0; color: #94a3b8; font-weight: bold;'>Subject:</td><td style='color: #ffffff; font-weight: bold;'>" + escapeHtml(subject) + "</td></tr>" +
          "<tr><td style='padding: 8px 0; color: #94a3b8; vertical-align: top; font-weight: bold;'>Message:</td><td style='color: #f1f5f9; white-space: pre-wrap; background: #0b111e; padding: 12px; border-radius: 8px; border: 1px solid #1e293b;'>" + escapeHtml(message) + "</td></tr>" +
          "<tr><td style='padding: 8px 0; color: #94a3b8; font-weight: bold;'>Date:</td><td style='color: #cbd5e1;'>" + escapeHtml(timestamp) + "</td></tr>" +
          "<tr><td style='padding: 8px 0; color: #94a3b8; font-weight: bold;'>Browser:</td><td style='color: #cbd5e1;'>" + escapeHtml(browser) + "</td></tr>" +
          "<tr><td style='padding: 8px 0; color: #94a3b8; font-weight: bold;'>Device:</td><td style='color: #cbd5e1;'>" + escapeHtml(device) + "</td></tr>" +
        "</table>" +
        "<div style='margin-top: 24px; padding-top: 16px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; color: #64748b;'>" +
          "Mohamed Aaseef • CSBS Student Portfolio Automated System" +
        "</div>" +
      "</div>";

    try {
      MailApp.sendEmail({
        to: recipientEmail,
        subject: emailSubject,
        body: emailBody,
        htmlBody: htmlBody
      });
    } catch (mailErr) {
      Logger.log("MailApp notice: " + mailErr.toString());
    }

    return createJsonResponse(true, "Message Sent Successfully");

  } catch (err) {
    return createJsonResponse(false, "Server Error: " + err.toString());
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return createJsonResponse(true, "Google Apps Script Web App for Mohamed Aaseef Portfolio Contact Form is active.");
}

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str.trim();
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function createJsonResponse(success, message) {
  var output = JSON.stringify({
    success: success,
    message: message
  });

  return ContentService.createTextOutput(output)
    .setMimeType(ContentService.MimeType.JSON);
}
