# Use an official Node.js runtime as the base image
# This line specifies the base image for the Docker image. In this case, we're using an official Node.js runtime image with version 18.18 and the # Alpine Linux distribution.
FROM node:18.18-alpine

# This line sets the working directory inside the container to /usr/src/app. This is where we'll copy our application code and where the # application will run.
WORKDIR /usr/src/app

# This line installs the build-base package using the Alpine package manager (apk). This package includes the necessary tools for building   
# native Node.js modules.
RUN apk add build-base

# This line installs Python 3 using the Alpine package manager. Python is required for some Node.js modules that have native dependencies.
RUN apk add python3

# This line installs the node-gyp package globally using npm. node-gyp is a tool for building native Node.js modules.
RUN npm install -g node-gyp

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

COPY ./prisma prisma
# Copy the rest of your application code to the container
COPY . .

# This line sets an environment variable that tells the Prisma ORM to ignore missing engine checksums. This is useful when deploying to certain 
# platforms like Heroku.
ENV PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1

# This line generates the Prisma client code based on the schema defined in the application.
RUN npx prisma generate

COPY --chown=node:node --from=builder /app/prisma /app/prisma
# Expose the port that your application will run on (Nest.js default is 3000)
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
