# Forget Me Not

A sophisticated, relationship-oriented occasion management and personalised gifting platform built from scratch using **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## Brand Identity & Design System

- **Primary Color (Sage Green):** `#6B7F64`
- **Secondary Color (Muted Blue):** `#73889B`
- **Background (Warm Off-White):** `#FAF8F5`
- **Surface (Pale Sage):** `#F2F5F0`
- **Typography:** Playfair Display (Serif) & Plus Jakarta Sans (Sans-Serif)

---

## Features Implemented

1. **Public Landing Page (`index.html`):**
   - Striking hero section with brand slogan and call-to-action buttons.
   - Interactive "How It Works" 4-step guide (Remember, Organize, Discover, Connect).
   - "Why Forget Me Not?" philosophy and values section.
   - Founder contact placeholders.
   - Clean footer with navigation and legal placeholders.

2. **Authentication & Pricing (`login.html`, `signup.html`, `pricing.html`):**
   - User account signup and login mock states.
   - 3-tier pricing model (Free: 0 BHD, Standard: 2.5 BHD, Premium: 4.5 BHD) with interactive tier selection.

3. **User Dashboard (`dashboard/index.html`):**
   - Overview metrics (profiles count, upcoming occasions, saved gifts, subscription tier).
   - Quick access widgets for upcoming occasions and relationship profiles.

4. **Relationship Profiles (`dashboard/profiles.html`):**
   - CRUD management for people you care about.
   - **Free Plan Limit Enforcement:** Enforces a strict maximum of 3 relationship profiles on the Free tier.

5. **Occasions Management (`dashboard/occasions.html`):**
   - Track birthdays, anniversaries, graduations, and custom milestones.
   - Recurring annual occasion support.

6. **Event Page & Gift Discovery (`dashboard/occasion-detail.html`):**
   - **Option A (Explore Products):** Curated local gift catalogue with filtering based on recipient interests, relationship, and budget. Save/favorite functionality.
   - **Option B (Agent Consultation):** Text and call consultation request interface with interactive form submission.

7. **Saved Gifts & Consultations (`dashboard/saved.html`, `dashboard/consultations.html`):**
   - Manage bookmarked gift ideas and view consultation request history.

8. **Notifications & Settings (`dashboard/notifications.html`, `dashboard/settings.html`):**
   - In-app reminders for upcoming occasions and account settings management.

---

## Features Requiring Future Backend Integration

Since this is a static frontend prototype running on LocalStorage:
- **Real Multi-User Authentication:** Needs backend database (PostgreSQL/MongoDB) and JWT/OAuth authentication.
- **Payment Processing:** Real subscription billing requires a payment gateway (e.g., Stripe, Tap Payments).
- **Live Consultations:** Connecting users directly to human concierge consultants or AI advisory models requires real-time messaging / WebSockets.
- **Cloud Synchronisation:** LocalStorage is browser-specific; cloud sync across devices requires backend API endpoints.

---

## GitHub Pages Deployment Instructions

1. Create a new public repository on GitHub (e.g., `forget-me-not`).
2. Upload the entire project folder contents to the root of the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial greenfield release of Forget Me Not"
   git branch -M main
   git remote add origin https://github.com/your-username/forget-me-not.git
   git push -u origin main
   ```
3. Go to your GitHub repository **Settings** -> **Pages**.
4. Under **Build and deployment**, select **Source** as `Deploy from a branch` and choose `main` branch / `(root)` folder.
5. Click **Save**. Your website will be live at `https://your-username.github.io/forget-me-not/` within a minute.
