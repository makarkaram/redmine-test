This project should do www.redmine.org functionality tests. 

# Requirement

[Node js 19.6.0](https://nodejs.org/en/blog/release/v19.6.0)
____
## How to start
Donload or clone a project
____
### installation

```npm i```

call  ``` allure generate my-allure-results -o allure-report --clean ```  for generate allure report folder
____
#### Run
- Before each launch clean allure report, call ``` allure generate my-allure-results -o allure-report --clean ```
- to run test with allure, call ``` set ALLURE_RESULTS_DIR=my-allure-results
npx playwright test --reporter=line,allure-playwright ```
- to check allure report, call ```allure open allure-report```
