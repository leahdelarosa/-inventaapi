# 🚀 Quick Firebase Setup (Simplified)

Kung gusto mo ng mas madaling paraan, sundin ito:

## Option 1: Ako gagawa ng test Firebase project para sa'yo

Hindi ka pa ready mag-setup ng sariling Firebase? Pwede mong gamitin ang test credentials ko muna para ma-test mo agad.

**Pero importante**: For production/real use, dapat gumawa ka ng sariling Firebase project.

---

## Option 2: I-setup mo ang Firebase (Recommended)

### Kailangan mo lang ng 3 main steps:

### STEP 1: Create Firebase Project (2 minutes)
1. Go to: https://console.firebase.google.com/
2. Click "Add project"
3. Project name: `inventaapi`
4. Disable Google Analytics
5. Click "Create project"
6. Wait 30 seconds → Done!

### STEP 2: Enable Services (3 minutes)

**A. Firestore Database**
1. Click "Firestore Database" sa sidebar
2. Click "Create database"
3. Choose "Start in test mode"
4. Location: `asia-southeast1`
5. Click "Enable"

**B. Authentication**
1. Click "Authentication" sa sidebar
2. Click "Get started"
3. Click "Email/Password"
4. Toggle ON
5. Click "Save"

**C. Add Test User**
1. Sa Authentication, click "Users" tab
2. Click "Add user"
3. Email: `admin@test.com`
4. Password: `admin123`
5. Click "Add user"

### STEP 3: Get Credentials (5 minutes)

**A. Frontend Credentials (Web App)**
1. Click gear icon ⚙️ → "Project settings"
2. Scroll to "Your apps"
3. Click web icon `</>`
4. App name: `Dashboard`
5. Click "Register app"
6. COPY ang config values (makikita mo ang apiKey, authDomain, etc.)

**B. Backend Credentials (Admin SDK)**
1. Still in Project Settings
2. Click "Service accounts" tab
3. Click "Generate new private key"
4. Click "Generate key"
5. JSON file will download
6. Open the JSON file

---

## STEP 4: Update Config Files

### File 1: Frontend Config
**Location**: `c:\API-master\dashboard\.env.local`

```env
# PALITAN mo ng actual values from Step 3A
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

NEXT_PUBLIC_API_URL=http://localhost:5000
```

### File 2: Backend Config
**Location**: `c:\API-master\.env`

```env
PORT=5000
NODE_ENV=development

# PALITAN mo ng values from the downloaded JSON file (Step 3B)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_ENTIRE_KEY_HERE\n-----END PRIVATE KEY-----"

JWT_SECRET=my-super-secret-jwt-key-for-production
```

---

## STEP 5: Restart Servers

Kiro terminals will help restart automatically, or you can:

```cmd
# Stop current servers (Ctrl+C sa terminals)
# Then start again:

# Backend
npm start

# Frontend
npm run dev
```

---

## STEP 6: Test!

1. Open http://localhost:3000
2. Click "Sign In"
3. Enter:
   - Email: `admin@test.com`
   - Password: `admin123`
4. Click "Sign In"
5. **SUCCESS!** You should see the dashboard!

---

## 📝 Paano makapag-add ng Product?

Once naka-login ka na:

1. Click **"Products"** sa sidebar
2. Click **"Add Product"** or **"Submit Product"**
3. Fill in:
   - Product Name: `Sample Product`
   - Barcode: `1234567890`
   - Price: `100`
   - Stock: `50`
   - Business Type: `Retail`
4. Click **"Save"** or **"Submit"**
5. Product should appear sa list!

---

## ✅ Checklist

Sundin mo ito in order:

- [ ] Created Firebase project
- [ ] Enabled Firestore Database (test mode)
- [ ] Enabled Authentication (Email/Password)
- [ ] Created test user (`admin@test.com`)
- [ ] Got Web App credentials (Step 3A)
- [ ] Got Admin SDK credentials (Step 3B - downloaded JSON)
- [ ] Updated `.env.local` file (frontend)
- [ ] Updated `.env` file (backend)
- [ ] Restarted both servers
- [ ] Tested login at http://localhost:3000
- [ ] Successfully logged in!
- [ ] Can add products!

---

## 🆘 Kailangan mo ba ng tulong?

**Sabihin mo lang kung:**
- May error ba sa pag-setup?
- Hindi mo alam paano kunin ang credentials?
- May problema sa login?
- Hindi ka makakita ng products?

Tulungan kita mag-troubleshoot!

---

## 🎯 Ready na ba?

Pag ready ka na mag-setup, sabihin mo lang:
- "Ready na, start na tayo" - Tutulong ako step by step
- "May problema ako sa [specific step]" - Tulungan kita sa specific part
- "Use test credentials muna" - Bibigyan kita ng test setup para ma-try agad

**Ano gusto mo gawin?**
