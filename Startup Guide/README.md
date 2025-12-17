# VibeBuy Deployment & Startup Guide

This guide details how to distribute the codebase across your 4 VMs and start each component.

## VM Architecture Overview

| VM Name | IP Address | Role | Folder to Copy |
| **Frontend VM** | `192.168.10.10` | Hosts Angular App & Legacy Static Pages | `Frontend_Angular/` AND `Frontend_VM/` |
| **Backend VM** | `192.168.10.20` | Hosts Node.js API | `Backend_VM/` |
| **Database VM** | `192.168.10.30` | Hosts MongoDB Database | `Database_VM/` |
| **DevOps VM** | `192.168.10.40` | Hosts Log Collector Service | `DevOps_VM/` |

---

## 1. Database VM (192.168.10.30)
**Prerequisites:** MongoDB Community Server installed and running.

1.  **Transfer:** Copy the `Database_VM` folder (mostly for docs).
2.  **Verify Service:** Ensure MongoDB is running on port `27017`.
    ```bash
    # Linux (Systemd)
    sudo systemctl status mongod
    # Ensure it's active (running)
    ```
    *(If not running: `sudo systemctl start mongod`)*
3.  **Network Config:** Ensure MongoDB is bound to `0.0.0.0` or the specific IP `192.168.10.30` in `/etc/mongod.conf` so the Backend VM can connect.
    ```yaml
    net:
      port: 27017
      bindIp: 0.0.0.0  # Allow external connections
    ```
    *(Restart mongo after changing config: `sudo systemctl restart mongod`)*

---

## 2. Backend VM (192.168.10.20)
**Prerequisites:** Node.js (v18+), npm.

1.  **Transfer:** Copy the `Backend_VM` folder to this machine.
2.  **Install Dependencies:**
    ```bash
    cd Backend_VM
    npm install
    ```
3.  **Start Server:**
    ```bash
    npm start
    ```
    *Output should confirm: `MongoDB Connected` and `Server running on port 5000`.*

---

## 3. DevOps VM (192.168.10.40)
**Prerequisites:** Node.js, npm.

1.  **Transfer:** Copy the `DevOps_VM` folder to this machine.
2.  **Install Dependencies:**
    ```bash
    cd DevOps_VM
    npm install
    ```
3.  **Start Log Collector:**
    ```bash
    npm start
    ```
    *Output should confirm: `DevOps Log Collector running on port 9000`.*

---

## 4. Frontend VM (192.168.10.10)
**Prerequisites:** Node.js, npm, Angular CLI (`npm install -g @angular/cli`).

### A. Angular Application
1.  **Transfer:** Copy the `Frontend_Angular` folder.
2.  **Install Dependencies:**
    ```bash
    cd Frontend_Angular
    npm install
    ```
3.  **Start Application:**
    ```bash
    # Binds to 0.0.0.0 to be accessible externally if needed, or just run 'npm start' for local access
    npm start -- --host 0.0.0.0
    ```
    *Access via browser at `http://192.168.10.10:4200`.*

### B. Legacy Pages (Login, Register, MFA)
1.  **Transfer:** Copy the `Frontend_VM` folder.
2.  **Serve Files:** You need a simple HTTP server to serve these files.
    ```bash
    # Install http-server globally
    npm install -g http-server
    
    # Run server in the Frontend_VM directory
    cd Frontend_VM
    http-server -p 8080
    ```
    *Access Login Page via browser at `http://192.168.10.10:8080/LoginPage.html`.*

---

## Verification Checklist

1.  **Database**: Can you ping `192.168.10.30` from the Backend VM?
2.  **Backend**: Does `npm start` show "MongoDB Connected"?
3.  **DevOps**: Is the log collector listening on port 9000?
4.  **Frontend**: 
    - Can you load the Angular app?
    - Can you login via the Legacy pages? (This tests the full flow: Legacy Frontend -> Backend -> Database).