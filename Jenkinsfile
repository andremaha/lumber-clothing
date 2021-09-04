pipeline {
    agent any
    stages {
        stage('Demo') {
            steps {
                sh 'echo "Hello, Step One"'
                sh '''
                    echo "Hello, Step Two"
                    ls -lah
                '''
                sh '''
                    echo "Hello, Step Three"
                    pwd
                '''
            }
        }
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}