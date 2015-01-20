# angular karma test
angular 앱을 karma를 통해 테스트하는 것에 대한 샘플 프로젝트

# 설치 및 실행
```
git clone https://github.com/rotoshine/angular-karma-test.git
cd angular-karma-test
npm test
```

# protractor test 실행
웹서버를 먼저 실행한 후 테스트를 실행해야한다.
테스트와 같이 실행되게 하는 방법이 있을 듯 한데..
```
http-server -p 8000
```
테스트에 필요한 모듈의 설치 및 업데이트를 한다.
```
npm install protractor -g
webdriver-manager update
```
아래의 커맨드로 테스트를 실행한다.
```
protractor test/protractor.conf.js
```
