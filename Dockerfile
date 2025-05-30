# Use base Node image
FROM node:18-alpine

# Set workdir
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install
COPY . .

# Expose port & run app
EXPOSE 3000
CMD ["npm", "start"]
