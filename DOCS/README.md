# project Title : Deploy Full Stack Udagram 

## Contents :-

- [.circleci]
- ---------(config.yml)

- -[.elasticbeanstalk]
- ---------[app_versions]
- ---------(config.yml)
- -[DOCS]
- ---------(README.md)


- [Udagram]
- -------[udagram-api]
- -(.env)
- -------[udagram-frontend]

- -(.gitignore)
- -(package.json)
 
- -(READMEE.md)

## Description

- This project connects to an RDS database on AWS by creating a 'Bucket' and creating an 'environment'. This app connects to the client repository on Github and also syncs any changes made to the project and uploads it to Github through Circlci'


## How was the project created?

1. We first run the project locally and ensure that it works well
2. We log in to AWS and create a database via RDS
3. We create an environment with elastic beanstalk
4. After that, we create the application and choose the appropriate operating environment for it. In this application, we choose NodeJs
5. Then we go and choose S3 and we create a bucket to publish the application inside
6. We go to IAM on AWS to create a new user, and after the creation process is completed, we get an ID number and an access code that we will use when uploading the project to Amazon
7. We come back after that and make sure that everything is OK, so we start deploying the application through ``` eb deploy ```
**Note: eb dploy will publish frontend and backend together in the same order**
8. We go to the link for the project and make sure that it works efficiently by clicking on it[Abdalla-Yahia-Udagram](http://abdalla-yahia-udagram.s3-website-us-east-1.amazonaws.com/) 
9. We then upload the project to Github
10. Then we connect to our Circlici account and choose the project
11. In the project settings we put the environment variables that we got when we create a new user through IAM in AWS servicies
12. Circleci searches for the config.yml file inside the .circleci folder
13. circlci runs commands inside the file, builds the frontend, builds the backend, installs the dependencies for the frontend and backend, performs the necessary test, and then deploy the frontend and backend
14. Congratulations, the process has been successfully completed, and if the client uploads any modifications to the project on GitHub, it will publish automatically without human intervention

## Requirements
1. Database RDS on AWS
2. Bucket on S3 on AWS
3. Environment and application in elastic beanstalk
4. Project repository on GitHub
5. An account and a link to a GitHub repository on Circlci

## How it work ?

### Locally 

**Udagram-api**

1. Entering the api folder
- ```cd udagram\udagram-api ```
2. Setup project dependencies
- ``` npm run install -f ```
3. Build run files
- ``` npm run build ```
4. Run the application in dev mode
- ```npm run dev ```
5. Create an `.env` file and put the variables required to run in it and link it to the `config.ts`  file


**Udagram-frontend**
1. Entering the frontend folder
- ```cd udagram\udagram-feontend ```
2. Setup project dependencies
- ``` npm run install -f ```
3. Build run files
- ``` npm run build ```
4. Run the application in 
- ```npm run start ```

### General

1. Entering the api folder
- ```cd udagram\udagram-api ```
2. Publish the project to the application created in the environment on AWS
- ```npm run deploy ```
3. 1. Entering the frontend folder
- ```cd udagram\udagram-feontend ```
4. Publish the project to the bucket created in S3 on AWS
- ```npm run deploy ```

### synchronization

1. Enter the GitHub repository and upload the project to it
2. Entering Circle CI and linking it to the GitHub repository
3. Put the variables required to publish the project into the project settings
4. Start the sync process

## Contents of ``Config.yml`` File 

```js

version: 2.1
orbs:
  # orgs contain basc recipes and reproducible actions (install node, aws, etc.)
  node: circleci/node@5.0.2
  eb: circleci/aws-elastic-beanstalk@2.0.1
  aws-cli: circleci/aws-cli@3.1.1
  # different jobs are calles later in the workflows sections
jobs:
  build:
    docker:
      # the base image can run most needed actions with orbs
      - image: "cimg/node:14.15"
    steps:
      # install node and checkout code
      - node/install:
          node-version: '14.15'         
      - checkout
      # Use root level package.json to install dependencies in the frontend app
      - run:
          name: Install Front-End Dependencies
          command: |
            echo "NODE --version" 
            echo $(node --version)
            echo "NPM --version" 
            echo $(npm --version)
            npm run frontend:install
      # TODO: Install dependencies in the the backend API          
      - run:
          name: Install API Dependencies
          command: |
           echo "TODO: Install dependencies in the the backend API  "
           npm run api:install
      # TODO: Build the frontend app
      - run:
          name: Front-End Build
          command: |
            echo "TODO: Build the frontend app"
            npm run frontend:build
      # TODO: Build the backend API      
      - run:
          name: API Build
          command: |
            echo "TODO: Build the backend API"
            npm run api:build
  # deploy step will run only after manual approval
  deploy:
    docker:
      - image: "cimg/base:stable"
      # more setup needed for aws, node, elastic beanstalk
    steps:
      - node/install:
          node-version: '14.15' 
      - eb/setup
      - aws-cli/setup
      - checkout
      - run:
          name: Deploy App
          # TODO: Install, build, deploy in both apps
          command: |
            echo "# TODO: Install, build, deploy in both apps"
            npm run deploy
            
workflows:
  udagram:
    jobs:
      - build
      - hold:
          filters:
            branches:
              only:
                - master
          type: approval
          requires:
            - build
      - deploy:
          requires:
            - hold


```


## Built with

- [Abdalla-Yahia-Kamell](abdalla_y2007@yahoo.com)

### Date

- [Sun Sep 25 2022]
