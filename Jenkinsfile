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
            }
        }
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}