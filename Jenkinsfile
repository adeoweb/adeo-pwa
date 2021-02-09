pipeline {
  agent {label 'debian-10-builder'}
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
    timeout(time: 90, unit: 'MINUTES')
  }
  stages {
    stage('Initialize Environment') {
      steps {
        sh 'cp .env.sample .env'
      }
    }
    stage('Run Docker Build') {
      steps {
        sh 'make build'
      }
    }
    stage('Tag Production Images') {
      when {
          branch 'master'
      }
      steps {
        sh '''
          docker tag eu.gcr.io/aw-rent/adeoweb-pwa-frontend:production \\
          eu.gcr.io/aw-rent/adeoweb-pwa-frontend:v${BUILD_NUMBER}
          '''
      }
    }
    stage('Docker Push Production') {
      when {
          branch 'master'
      }
      steps {
        sh '''
          docker push eu.gcr.io/aw-rent/adeoweb-pwa-frontend:v${BUILD_NUMBER}
        '''
      }
    }
    stage('Tag Development Images') {
      when {
          branch 'development'
      }
      steps {
        sh '''
          docker tag eu.gcr.io/aw-rent/adeoweb-pwa-frontend:production \\
          eu.gcr.io/aw-rent/adeoweb-pwa-frontend:v${BUILD_NUMBER}-dev
          '''
      }
    }
    stage('Docker Push Development') {
      when {
          branch 'development'
      }
      steps {
        sh '''
          docker push eu.gcr.io/aw-rent/adeoweb-pwa-frontend:v${BUILD_NUMBER}-dev
        '''
      }
    }
    stage('Deploy') {
      when {
        branch 'development'
      }
      steps {
        build job: 'adeo-pwa-frontend-deployment', parameters: [[$class: 'StringParameterValue', name: 'BUILD_NUMBER', value: "${BUILD_NUMBER}" ]], wait: false
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
