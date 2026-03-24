# Cloud Resume – Margaret Gonzales

This project is a cloud-based personal resume website built using Microsoft Azure and modern web technologies. It demonstrates frontend development, cloud deployment, and basic DevOps practices.

---

## Live Website

https://margaretresume.z8.web.core.windows.net

---

## Project Overview

The Cloud Resume Project showcases my resume as a static website hosted on Azure, with dynamic functionality powered by a serverless backend. It highlights my skills in cloud computing, web development, and CI/CD.

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Cloud & Backend

* Microsoft Azure Storage (Static Website Hosting)
* Azure Functions (Python – HTTP Trigger)

### DevOps

* Git & GitHub
* GitHub Actions (CI/CD for automated deployment)

---

## Features

* Responsive and modern resume layout
* Light/Dark mode toggle
* Visitor counter using serverless API
* Automated deployment using GitHub Actions
* Hosted entirely on Azure

---

## Architecture

1. The frontend (HTML/CSS/JS) is stored in Azure Blob Storage (`$web` container).
2. A Python Azure Function handles API requests (visitor counter).
3. GitHub Actions automatically deploys frontend updates to Azure on push to `main`.

---

## CI/CD Workflow

* Changes pushed to the `main` branch trigger GitHub Actions
* Workflow uploads frontend files to Azure Storage
* Website updates automatically after deployment

---

## Security Improvements

* Secrets stored securely in GitHub Secrets
* CORS restrictions applied to limit access
* HTTPS enabled by default via Azure

---

## Project Structure

```
cloud-resume-project/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── README.md
```

---

## Future Improvements

* Add contact form with Azure Function backend
* Store messages in Azure Table Storage / Cosmos DB
* Implement authentication using Azure AD
* Add monitoring with Application Insights
* Improve accessibility and UX

---

## About Me

I am a Computer Science graduate with an interest in cloud computing, cybersecurity, and building scalable solutions. This project reflects my hands-on experience with Azure and modern development workflows.

---

## Contact

* GitHub: https://github.com/MARGYYY1231
* LinkedIn: https://www.linkedin.com/in/margaret-nieves-gonzales-7154b6285/

---
