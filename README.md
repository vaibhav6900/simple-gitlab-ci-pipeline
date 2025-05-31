# 🚀 Node.js CI/CD Pipeline using GitLab, Docker & AWS

This project demonstrates how to set up a complete CI/CD pipeline using GitLab CI/CD, Docker, and AWS EC2 for a Node.js application. The pipeline builds a Docker image, pushes it to DockerHub, and deploys it automatically on an EC2 server using a self-hosted GitLab Runner.

---
## 🗂️ Project Structure
.
├── .gitlab-ci.yml # CI/CD pipeline config
├── Dockerfile # Docker image instructions
├── index.js # Node.js app (Express server)
├── package.json
└── README.md # You're reading it!


---

## 🧑‍💻 Tech Stack

- Node.js (Express)
- Docker & DockerHub
- GitLab CI/CD
- AWS EC2
- GitLab Runner (self-hosted)

---

## ⚙️ Step-by-Step Setup Guide

### 1️⃣ Clone the Repo

```bash
git clone https://gitlab.com/<your-username>/<repo-name>.git
cd <repo-name>

2️⃣ Setup DockerHub
Create a DockerHub account.

Create a new repository (e.g., yourusername/node-cicd).

Go to GitLab → Settings > CI/CD > Variables

Add:

DOCKER_USERNAME → your DockerHub username

DOCKER_PASSWORD → your DockerHub password or access token

3️⃣ Configure GitLab CI/CD
.gitlab-ci.yml
4️⃣ Create & Connect AWS EC2 Instance
Launch Ubuntu EC2 instance.

Open port 22 (SSH) and 3000 (Node.js).

SSH into EC2:
Install Docker:
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker ubuntu

5️⃣ Setup GitLab Runner on EC2

# Install GitLab Runner
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash
sudo apt install gitlab-runner -y

# Register Runner
sudo gitlab-runner register

Follow prompts:

URL: https://gitlab.com/

Token: from your GitLab project → Settings → CI/CD → Runners

Tags: dev

Executor: shell

Start the runner:
sudo gitlab-runner start
6️⃣ Push Code to GitLab & Trigger Pipeline
git add .
git commit -m "Initial CI/CD setup"
git push origin main


![image](https://github.com/user-attachments/assets/1d5ac8cf-3adf-411b-8186-8873f314a32f)

