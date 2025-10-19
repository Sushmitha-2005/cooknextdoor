# CookNextDoor Deployment Guide

## 🚀 Deploy to Render

This guide explains how to deploy your CookNextDoor food delivery application to Render.

### Prerequisites

1. **GitHub Repository**: Make sure your code is pushed to GitHub
2. **Render Account**: Sign up at [render.com](https://render.com)

### Deployment Steps

#### 1. Connect Repository to Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository (`https://github.com/Sushmitha-2005/cooknextdoor.git`)
4. Render will automatically detect the `render.yaml` file

#### 2. Configure Services

The `render.yaml` file defines two services:

- **Web Service** (`cooknextdoor-backend`): Node.js application
- **Database** (`cooknextdoor-database`): MongoDB database

#### 3. Environment Variables

Render will automatically generate:
- `MONGODB_URI`: Connection string for the database

#### 4. Deploy

1. Click "Apply" to create the blueprint
2. Render will start building and deploying your application
3. Once complete, you'll get a `.onrender.com` URL

### Project Structure

```
cooknextdoor/
├── backend/                 # Node.js/Express server
│   ├── server.js           # Updated for production
│   ├── models/             # MongoDB models
│   └── routes/             # API routes
├── frontend/               # Angular application
│   └── dist/               # Built production files
├── render.yaml             # Render deployment config
├── package.json            # Updated build scripts
└── .env.example           # Environment variables template
```

### Build Process

1. **Install Dependencies**: Both frontend and backend dependencies
2. **Build Frontend**: Angular production build
3. **Start Backend**: Serves both API and static files

### Local Development vs Production

| Aspect | Local Development | Production (Render) |
|--------|------------------|-------------------|
| Frontend | `ng serve` (port 4200) | Static files served by backend |
| Backend | `node server.js` (port 5000) | `npm run start:prod` (port 10000) |
| Database | Local MongoDB | Render MongoDB service |
| Environment | Development | Production |

### API Endpoints

- **Health Check**: `https://your-app.onrender.com/api/health`
- **API Routes**: `https://your-app.onrender.com/api/*`
- **Frontend**: `https://your-app.onrender.com/*`

### Troubleshooting

#### Build Issues
- Check build logs in Render dashboard
- Ensure all dependencies are properly installed
- Verify MongoDB connection string

#### Runtime Issues
- Check application logs in Render dashboard
- Verify environment variables are set correctly
- Test API endpoints individually

#### Database Issues
- Confirm MongoDB service is running
- Check database connection logs
- Verify database name matches configuration

### Monitoring

- **Logs**: Available in Render dashboard
- **Metrics**: CPU, memory usage visible in dashboard
- **Health Checks**: Automatic monitoring via `/api/health`

### Custom Domains

You can add a custom domain in Render dashboard:
1. Go to your service settings
2. Add custom domain
3. Update DNS settings with your domain provider

### Updates

To deploy updates:
1. Push changes to your GitHub repository
2. Render will automatically redeploy (if auto-deploy is enabled)
3. Monitor the deployment in the Render dashboard

### Support

For issues specific to Render deployment:
- Check [Render Documentation](https://render.com/docs)
- Review application logs in dashboard
- Test locally before deploying

---

**Note**: Make sure to keep your GitHub repository updated and monitor your application's performance and logs regularly.
