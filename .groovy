pipeline {
    agent any
    
    stages {
        stage('Build Frontend') {
            steps {
                dir('client') {
                    script {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }
        
        stage('Build and Test Backend') {
            steps {
                script {
                    sh 'npm install' 
                    sh 'npm test'    
                }
            }
        }
        
        stage('Docker Build and Compose') {
            steps {
                script {
                    sh 'docker-compose build'
                    sh 'docker-compose up -d' 
                }
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
