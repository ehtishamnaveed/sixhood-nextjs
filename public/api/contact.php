<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// ──────────────────────────────────────────────
//  CONFIGURATION — update these before deploying
// ──────────────────────────────────────────────
$to_email  = 'info@sixhood.ca';                         // where submissions land
$from_name = 'SixHood Website';                         // sender name on the email
$subject   = 'New Contact Form Submission — SixHood';   // email subject line

// ──────────────────────────────────────────────
//  Rate limiting (simple IP-based, 5 per 10 min)
// ──────────────────────────────────────────────
$ip       = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_dir = sys_get_temp_dir() . '/sixhood_ratelimit';
if (!is_dir($rate_dir)) {
    mkdir($rate_dir, 0700);
}

$rate_file = $rate_dir . '/' . md5($ip);
$now       = time();

if (file_exists($rate_file)) {
    $attempts = json_decode(file_get_contents($rate_file), true);
    // purge entries older than 10 minutes
    $attempts = array_filter($attempts, fn($t) => $now - $t < 600);
    if (count($attempts) >= 5) {
        http_response_code(429);
        echo json_encode(['success' => false, 'error' => 'Too many requests. Please try again later.']);
        exit;
    }
} else {
    $attempts = [];
}

// ──────────────────────────────────────────────
//  Honeypot check (hidden field must be empty)
// ──────────────────────────────────────────────
if (!empty($_POST['website'])) {
    // silently pretend success to confuse bots
    echo json_encode(['success' => true]);
    exit;
}

// ──────────────────────────────────────────────
//  Input sanitisation
// ──────────────────────────────────────────────
$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$company = trim($_POST['company'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

$errors = [];

if ($name === '' || mb_strlen($name) > 200) {
    $errors[] = 'Please enter a valid name.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}
if (mb_strlen($company) > 200) {
    $errors[] = 'Company name is too long.';
}
if ($message === '' || mb_strlen($message) > 5000) {
    $errors[] = 'Please enter a message (max 5000 characters).';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// ──────────────────────────────────────────────
//  Build and send the email
// ──────────────────────────────────────────────
$service_labels = [
    'cloud'        => 'Cloud Solutions',
    'security'     => 'Cybersecurity',
    'development'  => 'Software Development',
    'data'         => 'Data & Analytics',
    'managed'      => 'Managed IT Services',
    'digital'      => 'Digital Transformation',
    'other'        => 'Something else',
];
$service_label = $service_labels[$service] ?? ($service ?: 'Not specified');

$clean_name    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$clean_email   = htmlspecialchars($email,   ENT_QUOTES, 'UTF-8');
$clean_company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$clean_message = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

$body = <<<HTML
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#fafaf8;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e4df;border-radius:12px;overflow:hidden;">
  <tr>
    <td style="background:#1891c7;padding:24px 32px;">
      <h2 style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">New Contact Form Submission</h2>
    </td>
  </tr>
  <tr>
    <td style="padding:32px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#555555;">
        <tr>
          <td style="padding:8px 0;width:120px;color:#888888;font-weight:600;text-transform:uppercase;font-size:11px;letter-spacing:0.05em;">Name</td>
          <td style="padding:8px 0;color:#1a1a1a;font-weight:500;">{$clean_name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#888888;font-weight:600;text-transform:uppercase;font-size:11px;letter-spacing:0.05em;">Email</td>
          <td style="padding:8px 0;color:#1a1a1a;"><a href="mailto:{$clean_email}" style="color:#1891c7;text-decoration:none;">{$clean_email}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#888888;font-weight:600;text-transform:uppercase;font-size:11px;letter-spacing:0.05em;">Company</td>
          <td style="padding:8px 0;color:#1a1a1a;">{$clean_company}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#888888;font-weight:600;text-transform:uppercase;font-size:11px;letter-spacing:0.05em;">Service</td>
          <td style="padding:8px 0;color:#1a1a1a;">{$service_label}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#888888;font-weight:600;text-transform:uppercase;font-size:11px;letter-spacing:0.05em;vertical-align:top;">Message</td>
          <td style="padding:8px 0;color:#1a1a1a;line-height:1.6;">{$clean_message}</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:16px 32px;background:#f2f1ed;border-top:1px solid #e5e4df;">
      <p style="margin:0;font-size:12px;color:#888888;">Submitted on " . date('F j, Y \a\t g:i A T') . " from IP {$ip}</p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>
HTML;

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$from_name} <{$email}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: SixHood-Website/1.0";

$sent = @mail($to_email, $subject, $body, $headers);

if ($sent) {
    // record attempt for rate limiting
    $attempts[] = $now;
    file_put_contents($rate_file, json_encode($attempts));

    echo json_encode(['success' => true, 'message' => 'Thanks for reaching out. We\'ll get back to you within one business day.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Something went wrong on our end. Please email us directly at info@sixhood.ca']);
}
