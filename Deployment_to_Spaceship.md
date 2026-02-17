===========================================================
🚀 DEPLOYMENT GUIDE: GITHUB PAGES + SPACESHIP.COM
===========================================================
Domain: www.shieldstone.co
Method: GitHub Pages (Fastest & Free SSL)

-----------------------------------------------------------
[ STEP 1 ] PREPARE YOUR FILES IN VS CODE
-----------------------------------------------------------
1. Ensure your main file is named: index.html
2. Open the Terminal (Ctrl + `)
3. Run these commands to push your latest code to GitHub:

   git add .
   git commit -m "Prepare for deployment"
   git push origin main

-----------------------------------------------------------
[ STEP 2 ] ENABLE GITHUB PAGES
-----------------------------------------------------------
1. Go to your repository on GitHub.com.
2. Click [Settings] -> [Pages] (on the left sidebar).
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: main / (root)
4. Under "Custom domain":
   - Enter: www.shieldstone.co
   - Click [Save].

-----------------------------------------------------------
[ STEP 3 ] CONFIGURE DNS ON SPACESHIP.COM
-----------------------------------------------------------
Log into your Spaceship.com account and go to [Advanced DNS].
Add these 5 records to link your domain to GitHub:

1. [TYPE: A]     [HOST: @]   [VALUE: 185.199.108.153]
2. [TYPE: A]     [HOST: @]   [VALUE: 185.199.109.153]
3. [TYPE: A]     [HOST: @]   [VALUE: 185.199.110.153]
4. [TYPE: A]     [HOST: @]   [VALUE: 185.199.111.153]
5. [TYPE: CNAME] [HOST: www] [VALUE: yourusername.github.io]

*Replace "yourusername" with your actual GitHub username.

-----------------------------------------------------------
[ STEP 4 ] FINAL CHECK
-----------------------------------------------------------
- Wait 5-30 minutes for DNS to update.
- Go back to GitHub Settings > Pages.
- Once the "DNS check successful" message appears, 
  check the "Enforce HTTPS" box.

===========================================================
      MASTER TIP: Use 'Alt + 0' in Notepad++ to 
      quickly collapse sections if using UDL.
===========================================================