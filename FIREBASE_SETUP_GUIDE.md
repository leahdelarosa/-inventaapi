# 🔥 Firebase Setup Guide - Step by Step

Follow this guide to connect your system to Firebase database.

## Part 1: Create Firebase Project (5 minutes)

### Step 1: Go to Firebase Console
1. Open your browser
2. Go to: https://console.firebase.google.com/
3. Click **"Add project"** or **"Create a project"**

### Step 2: Project Details
1. **Project name**: Enter `inventaapi` (or any name you like)
2. Click **Continue**
3. **Google Analytics**: You can disable this (toggle OFF) for simpler setup
4. Click **Create project**
5. Wait for project creation (30 seconds)
6. Click **Continue**

---

## Part 2: Enable Firestore Database

### Step 1: Create Firestore Database
1. In Firebase Console, click **"Firestore Database"** from left sidebar
2. Click **"Create database"**
3. **Select mode**: Choose **"Start in test mode"** (for development)
4. Click **Next**
5. **Location**: Choose closest to you (e.g., `asia-southeast1` for Philippines)
6. Click **Enable**
7. Wait for database creation (1 minute)

### Step 2: Set Security Rules (Important!)
1. Click **"Rules"** tab
2. Replace the content with:

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow authenticated users to read/write products
    match /products/{productId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // Allow authenticated users to read/write recommendations
    match /recommendations/{recoId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

---

## Part 3: Enable Authentication

### Step 1: Enable Email/Password Authentication
1. Click **"Authentication"** from left sidebar
2. Click **"Get started"**
3. Click **"Email/Password"** from the list
4. **Toggle ON** the first option (Email/Password)
5. Click **Save**

### Step 2: Create First Test User
1. Click **"Users"** tab
2. Click **"Add user"**
3. **Email**: Enter your test email (e.g., `admin@test.com`)
4. **Password**: Enter a password (e.g., `admin123`)
5. Click **"Add user"**

---

## Part 4: Get Firebase Client Credentials (for Frontend)

### Step 1: Register Web App
1. Click **gear icon** (⚙️) next to "Project Overview" → Click **"Project settings"**
2. Scroll down to **"Your apps"** section
3. Click the **Web icon** `</>`
4. **App nickname**: Enter `InventaAPI Dashboard`
5. Click **"Register app"**

### Step 2: Copy Config Values
You'll see something like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "inventaapi-xxxxx.firebaseapp.com",
  projectId: "inventaapi-xxxxx",
  storageBucket: "inventaapi-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

**COPY ALL THESE VALUES!** You'll need them in Step 6.

3. Click **"Continue to console"**

---

## Part 5: Get Firebase Admin SDK Credentials (for Backend)

### Step 1: Generate Service Account Key
1. Still in **Project Settings** (gear icon ⚙️)
2. Click **"Service accounts"** tab at the top
3. Click **"Generate new private key"** button
4. Click **"Generate key"** in the popup
5. A JSON file will download (e.g., `inventaapi-xxxxx-firebase-adminsdk-xxxxx.json`)

### Step 2: Open the JSON File
1. Open the downloaded JSON file with Notepad
2. Find these values:
   - `project_id`
   - `private_key`
   - `client_email`

**KEEP THIS FILE SAFE!** Don't share it with anyone.

---

## Part 6: Configure Your Application

### A. Configure Frontend (.env.local)

1. Open file: `c:\API-master\dashboard\.env.local`
2. Replace with your Firebase values:

```env
# Get these from Step 4 (Firebase Web App Config)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=inventaapi-xxxxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=inventaapi-xxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=inventaapi-xxxxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

NEXT_PUBLIC_API_URL=http://localhost:5000
```

3. Save the file

### B. Configure Backend (.env)

1. Open file: `c:\API-master\.env`
2. Replace with your Firebase Admin SDK values (from Step 5):

```env
PORT=5000
NODE_ENV=development

# Get these from the downloaded JSON file (Step 5)
FIREBASE_PROJECT_ID=inventaapi-xxxxx
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@inventaapi-xxxxx.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----"

JWT_SECRET=your-random-secret-key-change-this-to-something-secure
```

**Important Notes:**
- Copy the ENTIRE `private_key` value including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Keep the `\n` characters in the private key (don't remove them)
- Wrap the private key in quotes

3. Save the file

---

## Part 7: Restart Your Servers

### Stop Current Servers
Go to your Kiro terminals and stop both servers (Ctrl+C or use stop process)

### Start Servers Again
```cmd
# Backend
cd c:\API-master
npm start

# Frontend (new terminal)
cd c:\API-master\dashboard
npm run dev
```

---

## Part 8: Test Your Setup

### Test 1: Login
1. Go to http://localhost:3000
2. Click **"Sign In"** button
3. Enter the test user credentials:
   - Email: `admin@test.com`
   - Password: `admin123`
4. Click **"Sign In"**
5. You should be redirected to the dashboard!

### Test 2: Add a Product
1. Click **"Products"** in the sidebar
2. Click **"Add Product"** button
3. Fill in product details:
   - Name: Test Product
   - Price: 100
   - Stock: 50
   - etc.
4. Click **"Save"**
5. Product should appear in the list!

### Test 3: Check Firebase Console
1. Go back to Firebase Console
2. Click **"Firestore Database"**
3. You should see:
   - `products` collection with your product
   - `users` collection with your user

---

## 🎉 You're Done!

Your system is now fully connected to Firebase!

### What Works Now:
✅ User authentication (login/logout)
✅ Add, edit, delete products
✅ View products list
✅ User management
✅ Recommendations
✅ All database operations

### Troubleshooting:

**Problem**: Login fails with "invalid-api-key"
- **Solution**: Double-check your `.env.local` file has correct `NEXT_PUBLIC_FIREBASE_API_KEY`

**Problem**: Backend crashes with "Failed to parse private key"
- **Solution**: Make sure the private key in `.env` includes the entire key with `-----BEGIN` and `-----END`, and all `\n` characters

**Problem**: "Permission denied" errors
- **Solution**: Check your Firestore security rules (Part 2, Step 2)

**Problem**: Can't see data in dashboard
- **Solution**: Make sure you're logged in and check browser console for errors

---

## Quick Reference

### Firebase Console URLs:
- Main Console: https://console.firebase.google.com/
- Your Project: https://console.firebase.google.com/project/YOUR_PROJECT_ID

### Your App URLs:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Config Files:
- Frontend config: `c:\API-master\dashboard\.env.local`
- Backend config: `c:\API-master\.env`

---

**Need Help?** Check the troubleshooting section or ask for assistance!
