# 🚀 HOW TO START THE SYSTEM

## Quick Start (2 steps)

### Step 1: Start Backend Server
```bash
# Open terminal in: c:\API-master
npm start
```
**Expected output:**
```
✅ Server running on http://localhost:5000
✅ Firebase Admin SDK initialized
```

### Step 2: Start Frontend Server
```bash
# Open NEW terminal in: c:\API-master\dashboard
npm run dev
```
**Expected output:**
```
✅ Local: http://localhost:3000
✅ Ready in Xms
```

---

## 🌐 Access Points

Once both servers are running:

- **Landing Page:** http://localhost:3000
- **Dashboard:** http://localhost:3000/dashboard (after login)
- **Backend API:** http://localhost:5000

---

## 🔐 Test Account

**Email:** test@example.com  
**Password:** test123456

*(Or create new account via Sign Up)*

---

## ✅ Verification Checklist

After starting both servers, verify:

1. **Frontend loads:** Open http://localhost:3000
   - Should see landing page with "InventaAPI" branding
   - Should see "Mobile Computing System for Multi-Business Data-as-a-Service"

2. **Backend responds:** Open http://localhost:5000
   - Should see: `{"message":"InventaAPI - Multi-Business DaaS Platform"}`

3. **Firebase connected:**
   - Login should work
   - No "client is offline" errors in browser console

4. **Features working:**
   - Can login with test account
   - Can access dashboard
   - Can submit products
   - Can upload images
   - Can add product variants

---

## 🐛 Troubleshooting

### Problem: Backend won't start
**Solution:**
```bash
# Check if port 5000 is in use
netstat -ano | findstr :5000

# If in use, kill the process or use different port
# Or restart your computer
```

### Problem: Frontend won't start
**Solution:**
```bash
cd dashboard
# Delete node_modules and reinstall
rmdir /s /q node_modules
npm install
npm run dev
```

### Problem: "Firebase client is offline"
**Solution:**
1. Go to: https://console.firebase.google.com/project/inventaapi-cf6bc
2. Click "Firestore Database" in sidebar
3. If not created, click "Create database"
4. Choose "Test mode" and location "asia-southeast1"
5. Wait 1-2 minutes for provisioning
6. Refresh your browser at http://localhost:3000

### Problem: Login fails
**Solution:**
- Check `.env` file exists in `c:\API-master` with Firebase credentials
- Check `dashboard\.env.local` file exists with Firebase config
- Try creating new account via Sign Up button
- Check browser console for specific error messages

---

## 📱 For Presentation

### Day Before:
1. Test both servers
2. Create test account if needed
3. Prepare 2-3 sample images for demo
4. Clear browser cache
5. Test full demo flow

### Morning Of:
1. Start backend: `npm start` in root folder
2. Start frontend: `npm run dev` in dashboard folder
3. Open http://localhost:3000 in browser
4. Login with test account
5. Keep both terminal windows visible but minimized
6. Close unnecessary applications

### During Defense:
- Keep terminals running in background
- Don't close browser tabs
- Have backup screenshots ready
- Stay calm if errors occur

---

## 🎯 System Ready Indicators

You know the system is fully ready when:

✅ Backend terminal shows: "Server running on http://localhost:5000"  
✅ Frontend terminal shows: "Local: http://localhost:3000"  
✅ Landing page loads without errors  
✅ Login modal appears when clicking "Sign In"  
✅ Can login and see dashboard  
✅ No Firebase errors in browser console  

---

**If all checks pass: YOU'RE READY FOR THE DEMO! 🎉**

---

*Last Updated: July 13, 2026*  
*System: InventaAPI v1.0*
