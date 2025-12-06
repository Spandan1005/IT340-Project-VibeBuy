# Database VM

This folder represents the Database Virtual Machine.

## Role
Host the MongoDB database server.

## Setup
1.  Install MongoDB Community Server.
2.  Ensure the service is running on port `27017`.
3.  The connection string used by the Backend VM is: `mongodb://localhost:27017/vibebuy` (assuming local tunneling or same network).

## Maintenance
- Check logs in `C:\Program Files\MongoDB\Server\X.X\log\`
- Use MongoDB Compass to inspect data.
