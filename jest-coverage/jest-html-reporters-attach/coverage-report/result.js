window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":8,"numPassedTests":37,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":9,"numTotalTests":38,"startTime":1719209778437,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209787496,"runtime":8684,"slow":true,"start":1719209778812},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/mongodb/mongodb.module.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["MongodbModule"],"duration":7,"failureMessages":[],"fullName":"MongodbModule should be defined","status":"passed","title":"should be defined"},{"ancestorTitles":["MongodbModule"],"duration":1,"failureMessages":[],"fullName":"MongodbModule should connect to MongoDB with the correct URI","status":"passed","title":"should connect to MongoDB with the correct URI"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209787895,"runtime":9126,"slow":true,"start":1719209778769},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/mysql/scores.controller.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["ScoresController"],"duration":31,"failureMessages":[],"fullName":"ScoresController should be defined","status":"passed","title":"should be defined"}]},{"numFailingTests":1,"numPassingTests":18,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209787899,"runtime":9122,"slow":true,"start":1719209778777},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/mongodb/scores.controller.spec.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mScoresController › should return the set result with milestone calculation\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).\u001b[22mtoHaveBeenCalledWith\u001b[2m(\u001b[22m\u001b[32m...expected\u001b[39m\u001b[2m)\u001b[22m\n\n    Expected: \u001b[32m{\"data\": ObjectContaining {\"currentLevel\": \"m1\", \"fluency\": 1, \"percentage\": Any<Number>, \"previous_level\": \"m1\", \"sessionResult\": \"pass\", \"targetsCount\": 2, \"targetsPercentage\": Any<Number>, \"totalSyllables\": 4, \"totalTargets\": 2}, \"status\": \"success\"}\u001b[39m\n    Received\n           1\n            \u001b[2m  Object {\u001b[22m\n            \u001b[32m-   \"data\": ObjectContaining {\u001b[39m\n            \u001b[32m-     \"currentLevel\": \"m1\",\u001b[39m\n            \u001b[32m-     \"fluency\": 1,\u001b[39m\n            \u001b[32m-     \"percentage\": Any<Number>,\u001b[39m\n            \u001b[32m-     \"previous_level\": \"m1\",\u001b[39m\n            \u001b[32m-     \"sessionResult\": \"pass\",\u001b[39m\n            \u001b[32m-     \"targetsCount\": 2,\u001b[39m\n            \u001b[32m-     \"targetsPercentage\": Any<Number>,\u001b[39m\n            \u001b[32m-     \"totalSyllables\": 4,\u001b[39m\n            \u001b[32m-     \"totalTargets\": 2,\u001b[39m\n            \u001b[31m+   \"Famalarity\": Array [\u001b[39m\n            \u001b[31m+     Object {\u001b[39m\n            \u001b[31m+       \"createdAt\": \"2024-06-22T06:52:44.389Z\",\u001b[39m\n            \u001b[31m+       \"score\": Array [\u001b[39m\n            \u001b[31m+         Object {\u001b[39m\n            \u001b[31m+           \"avg\": 0.993,\u001b[39m\n            \u001b[31m+           \"character\": \"ட\",\u001b[39m\n            \u001b[31m+           \"countAboveThreshold\": 5,\u001b[39m\n            \u001b[31m+           \"countBelowThreshold\": 0,\u001b[39m\n            \u001b[31m+           \"latestScores\": Array [\u001b[39m\n            \u001b[31m+             Object {\u001b[39m\n            \u001b[31m+               \"original_text\": \"இப்பாடலின்\",\u001b[39m\n            \u001b[31m+               \"response_text\": \"ஈ பாடலேந்\",\u001b[39m\n            \u001b[31m+               \"score\": 0.993,\u001b[39m\n            \u001b[31m+             },\u001b[39m\n            \u001b[31m+             Object {\u001b[39m\n            \u001b[31m+               \"original_text\": \"இப்பாடலின்\",\u001b[39m\n            \u001b[31m+               \"response_text\": \"ஈ பாடலேந்\",\u001b[39m\n            \u001b[31m+               \"score\": 0.993,\u001b[39m\n            \u001b[2m              },\u001b[22m\n            \u001b[32m-   \"status\": \"success\",\u001b[39m\n            \u001b[31m+           ],\u001b[39m\n            \u001b[31m+         },\u001b[39m\n            \u001b[31m+       ],\u001b[39m\n            \u001b[31m+       \"subSessionId\": \"UJoRJ7sbVnvT0QGVeTsJwAp4wa5FSmNA\",\u001b[39m\n            \u001b[31m+     },\u001b[39m\n            \u001b[31m+   ],\u001b[39m\n            \u001b[31m+   \"Target\": Array [\u001b[39m\n            \u001b[31m+     Object {\u001b[39m\n            \u001b[31m+       \"createdAt\": \"2024-06-22T06:52:44.389Z\",\u001b[39m\n            \u001b[31m+       \"score\": Array [\u001b[39m\n            \u001b[31m+         Object {\u001b[39m\n            \u001b[31m+           \"avgScore\": 0.9,\u001b[39m\n            \u001b[31m+           \"character\": \"ப\",\u001b[39m\n            \u001b[31m+           \"countAboveThreshold\": 5,\u001b[39m\n            \u001b[31m+           \"countBelowThreshold\": 0,\u001b[39m\n            \u001b[31m+           \"latestScores\": Array [\u001b[39m\n            \u001b[31m+             Object {\u001b[39m\n            \u001b[31m+               \"original_text\": \"இப்பாடலின்\",\u001b[39m\n            \u001b[31m+               \"response_text\": \"ஈ பாடலேந்\",\u001b[39m\n            \u001b[31m+               \"score\": 0.9,\u001b[39m\n            \u001b[31m+             },\u001b[39m\n            \u001b[31m+             Object {\u001b[39m\n            \u001b[31m+               \"original_text\": \"இப்பாடலின்\",\u001b[39m\n            \u001b[31m+               \"response_text\": \"ஈ பாடலேந்\",\u001b[39m\n            \u001b[31m+               \"score\": 0.9,\u001b[39m\n            \u001b[31m+             },\u001b[39m\n            \u001b[31m+           ],\u001b[39m\n            \u001b[31m+         },\u001b[39m\n            \u001b[31m+       ],\u001b[39m\n            \u001b[31m+       \"subSessionId\": \"UJoRJ7sbVnvT0QGVeTsJwAp4wa5FSmNA\",\u001b[39m\n            \u001b[31m+     },\u001b[39m\n            \u001b[31m+   ],\u001b[39m\n            \u001b[2m  }\u001b[22m,\n           2\n            \u001b[2m  Object {\u001b[22m\n            \u001b[32m-   \"data\": ObjectContaining {\u001b[39m\n            \u001b[32m-     \"currentLevel\": \"m1\",\u001b[39m\n            \u001b[32m-     \"fluency\": 1,\u001b[39m\n            \u001b[32m-     \"percentage\": Any<Number>,\u001b[39m\n            \u001b[32m-     \"previous_level\": \"m1\",\u001b[39m\n            \u001b[32m-     \"sessionResult\": \"pass\",\u001b[39m\n            \u001b[32m-     \"targetsCount\": 2,\u001b[39m\n            \u001b[32m-     \"targetsPercentage\": Any<Number>,\u001b[39m\n            \u001b[32m-     \"totalSyllables\": 4,\u001b[39m\n            \u001b[32m-     \"totalTargets\": 2,\u001b[39m\n            \u001b[32m-   },\u001b[39m\n            \u001b[32m-   \"status\": \"success\",\u001b[39m\n            \u001b[31m+   \"message\": \"Server error - Error: Test error\",\u001b[39m\n            \u001b[31m+   \"status\": \"error\",\u001b[39m\n            \u001b[2m  }\u001b[22m,\n           3: \u001b[31m[{\"targetCount\": 2, \"targetData\": [{\"character\": \"ளி\", \"score\": 0.1}, {\"character\": \"வெ\", \"score\": 0.1}], \"user_id\": \"12345678\"}, {\"targetCount\": 2, \"targetData\": [{\"character\": \"ளி\", \"score\": 0.1}, {\"character\": \"வெ\", \"score\": 0.1}], \"user_id\": \"87654321\"}]\u001b[39m\n\n    Number of calls: \u001b[31m9\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 528 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 529 |\u001b[39m     expect(mockResponse\u001b[33m.\u001b[39mstatus)\u001b[33m.\u001b[39mtoHaveBeenCalledWith(\u001b[33mHttpStatus\u001b[39m\u001b[33m.\u001b[39m\u001b[33mCREATED\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 530 |\u001b[39m     expect(mockResponse\u001b[33m.\u001b[39msend)\u001b[33m.\u001b[39mtoHaveBeenCalledWith({\u001b[22m\n\u001b[2m     \u001b[90m     |\u001b[39m                               \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 531 |\u001b[39m       status\u001b[33m:\u001b[39m \u001b[32m'success'\u001b[39m\u001b[33m,\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 532 |\u001b[39m       data\u001b[33m:\u001b[39m expect\u001b[33m.\u001b[39mobjectContaining({\u001b[22m\n\u001b[2m     \u001b[90m 533 |\u001b[39m         sessionResult\u001b[33m:\u001b[39m \u001b[32m'pass'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mmongodb/scores.controller.spec.ts\u001b[39m\u001b[0m\u001b[2m:530:31)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["ScoresController"],"duration":287,"failureMessages":[],"fullName":"ScoresController should be defined","status":"passed","title":"should be defined"},{"ancestorTitles":["ScoresController","getUsersMilestones"],"duration":121,"failureMessages":[],"fullName":"ScoresController getUsersMilestones should successfully get users milestones","status":"passed","title":"should successfully get users milestones"},{"ancestorTitles":["ScoresController","getUsersMilestones"],"duration":33,"failureMessages":[],"fullName":"ScoresController getUsersMilestones should handle validation errors","status":"passed","title":"should handle validation errors"},{"ancestorTitles":["ScoresController"],"duration":15,"failureMessages":[],"fullName":"ScoresController should successfully get users familiarity","status":"passed","title":"should successfully get users familiarity"},{"ancestorTitles":["ScoresController"],"duration":16,"failureMessages":[],"fullName":"ScoresController should handle validation errors","status":"passed","title":"should handle validation errors"},{"ancestorTitles":["ScoresController"],"duration":28,"failureMessages":[],"fullName":"ScoresController should return user profile data","status":"passed","title":"should return user profile data"},{"ancestorTitles":["ScoresController"],"duration":9,"failureMessages":[],"fullName":"ScoresController should handle errors","status":"passed","title":"should handle errors"},{"ancestorTitles":["ScoresController"],"duration":12,"failureMessages":[],"fullName":"ScoresController should return the user target data","status":"passed","title":"should return the user target data"},{"ancestorTitles":["ScoresController"],"duration":13,"failureMessages":[],"fullName":"ScoresController should handle errors","status":"passed","title":"should handle errors"},{"ancestorTitles":["ScoresController"],"duration":8,"failureMessages":[],"fullName":"ScoresController should return session ids for a user with default limit","status":"passed","title":"should return session ids for a user with default limit"},{"ancestorTitles":["ScoresController"],"duration":6,"failureMessages":[],"fullName":"ScoresController should add assessment input and return success response","status":"passed","title":"should add assessment input and return success response"},{"ancestorTitles":["ScoresController"],"duration":10,"failureMessages":[],"fullName":"ScoresController should handle errors","status":"passed","title":"should handle errors"},{"ancestorTitles":["ScoresController"],"duration":169,"failureMessages":[],"fullName":"ScoresController should return missing characters for a given story","status":"passed","title":"should return missing characters for a given story"},{"ancestorTitles":["ScoresController"],"duration":12,"failureMessages":[],"fullName":"ScoresController should handle errors","status":"passed","title":"should handle errors"},{"ancestorTitles":["ScoresController"],"duration":12,"failureMessages":[],"fullName":"ScoresController should return the latest milestone level for a user","status":"passed","title":"should return the latest milestone level for a user"},{"ancestorTitles":["ScoresController"],"duration":7,"failureMessages":[],"fullName":"ScoresController should return m0 if no milestone level is found","status":"passed","title":"should return m0 if no milestone level is found"},{"ancestorTitles":["ScoresController"],"duration":7,"failureMessages":[],"fullName":"ScoresController should handle errors","status":"passed","title":"should handle errors"},{"ancestorTitles":["ScoresController"],"duration":31,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).\u001b[22mtoHaveBeenCalledWith\u001b[2m(\u001b[22m\u001b[32m...expected\u001b[39m\u001b[2m)\u001b[22m\n\nExpected: \u001b[32m{\"data\": ObjectContaining {\"currentLevel\": \"m1\", \"fluency\": 1, \"percentage\": Any<Number>, \"previous_level\": \"m1\", \"sessionResult\": \"pass\", \"targetsCount\": 2, \"targetsPercentage\": Any<Number>, \"totalSyllables\": 4, \"totalTargets\": 2}, \"status\": \"success\"}\u001b[39m\nReceived\n       1\n        \u001b[2m  Object {\u001b[22m\n        \u001b[32m-   \"data\": ObjectContaining {\u001b[39m\n        \u001b[32m-     \"currentLevel\": \"m1\",\u001b[39m\n        \u001b[32m-     \"fluency\": 1,\u001b[39m\n        \u001b[32m-     \"percentage\": Any<Number>,\u001b[39m\n        \u001b[32m-     \"previous_level\": \"m1\",\u001b[39m\n        \u001b[32m-     \"sessionResult\": \"pass\",\u001b[39m\n        \u001b[32m-     \"targetsCount\": 2,\u001b[39m\n        \u001b[32m-     \"targetsPercentage\": Any<Number>,\u001b[39m\n        \u001b[32m-     \"totalSyllables\": 4,\u001b[39m\n        \u001b[32m-     \"totalTargets\": 2,\u001b[39m\n        \u001b[31m+   \"Famalarity\": Array [\u001b[39m\n        \u001b[31m+     Object {\u001b[39m\n        \u001b[31m+       \"createdAt\": \"2024-06-22T06:52:44.389Z\",\u001b[39m\n        \u001b[31m+       \"score\": Array [\u001b[39m\n        \u001b[31m+         Object {\u001b[39m\n        \u001b[31m+           \"avg\": 0.993,\u001b[39m\n        \u001b[31m+           \"character\": \"ட\",\u001b[39m\n        \u001b[31m+           \"countAboveThreshold\": 5,\u001b[39m\n        \u001b[31m+           \"countBelowThreshold\": 0,\u001b[39m\n        \u001b[31m+           \"latestScores\": Array [\u001b[39m\n        \u001b[31m+             Object {\u001b[39m\n        \u001b[31m+               \"original_text\": \"இப்பாடலின்\",\u001b[39m\n        \u001b[31m+               \"response_text\": \"ஈ பாடலேந்\",\u001b[39m\n        \u001b[31m+               \"score\": 0.993,\u001b[39m\n        \u001b[31m+             },\u001b[39m\n        \u001b[31m+             Object {\u001b[39m\n        \u001b[31m+               \"original_text\": \"இப்பாடலின்\",\u001b[39m\n        \u001b[31m+               \"response_text\": \"ஈ பாடலேந்\",\u001b[39m\n        \u001b[31m+               \"score\": 0.993,\u001b[39m\n        \u001b[2m              },\u001b[22m\n        \u001b[32m-   \"status\": \"success\",\u001b[39m\n        \u001b[31m+           ],\u001b[39m\n        \u001b[31m+         },\u001b[39m\n        \u001b[31m+       ],\u001b[39m\n        \u001b[31m+       \"subSessionId\": \"UJoRJ7sbVnvT0QGVeTsJwAp4wa5FSmNA\",\u001b[39m\n        \u001b[31m+     },\u001b[39m\n        \u001b[31m+   ],\u001b[39m\n        \u001b[31m+   \"Target\": Array [\u001b[39m\n        \u001b[31m+     Object {\u001b[39m\n        \u001b[31m+       \"createdAt\": \"2024-06-22T06:52:44.389Z\",\u001b[39m\n        \u001b[31m+       \"score\": Array [\u001b[39m\n        \u001b[31m+         Object {\u001b[39m\n        \u001b[31m+           \"avgScore\": 0.9,\u001b[39m\n        \u001b[31m+           \"character\": \"ப\",\u001b[39m\n        \u001b[31m+           \"countAboveThreshold\": 5,\u001b[39m\n        \u001b[31m+           \"countBelowThreshold\": 0,\u001b[39m\n        \u001b[31m+           \"latestScores\": Array [\u001b[39m\n        \u001b[31m+             Object {\u001b[39m\n        \u001b[31m+               \"original_text\": \"இப்பாடலின்\",\u001b[39m\n        \u001b[31m+               \"response_text\": \"ஈ பாடலேந்\",\u001b[39m\n        \u001b[31m+               \"score\": 0.9,\u001b[39m\n        \u001b[31m+             },\u001b[39m\n        \u001b[31m+             Object {\u001b[39m\n        \u001b[31m+               \"original_text\": \"இப்பாடலின்\",\u001b[39m\n        \u001b[31m+               \"response_text\": \"ஈ பாடலேந்\",\u001b[39m\n        \u001b[31m+               \"score\": 0.9,\u001b[39m\n        \u001b[31m+             },\u001b[39m\n        \u001b[31m+           ],\u001b[39m\n        \u001b[31m+         },\u001b[39m\n        \u001b[31m+       ],\u001b[39m\n        \u001b[31m+       \"subSessionId\": \"UJoRJ7sbVnvT0QGVeTsJwAp4wa5FSmNA\",\u001b[39m\n        \u001b[31m+     },\u001b[39m\n        \u001b[31m+   ],\u001b[39m\n        \u001b[2m  }\u001b[22m,\n       2\n        \u001b[2m  Object {\u001b[22m\n        \u001b[32m-   \"data\": ObjectContaining {\u001b[39m\n        \u001b[32m-     \"currentLevel\": \"m1\",\u001b[39m\n        \u001b[32m-     \"fluency\": 1,\u001b[39m\n        \u001b[32m-     \"percentage\": Any<Number>,\u001b[39m\n        \u001b[32m-     \"previous_level\": \"m1\",\u001b[39m\n        \u001b[32m-     \"sessionResult\": \"pass\",\u001b[39m\n        \u001b[32m-     \"targetsCount\": 2,\u001b[39m\n        \u001b[32m-     \"targetsPercentage\": Any<Number>,\u001b[39m\n        \u001b[32m-     \"totalSyllables\": 4,\u001b[39m\n        \u001b[32m-     \"totalTargets\": 2,\u001b[39m\n        \u001b[32m-   },\u001b[39m\n        \u001b[32m-   \"status\": \"success\",\u001b[39m\n        \u001b[31m+   \"message\": \"Server error - Error: Test error\",\u001b[39m\n        \u001b[31m+   \"status\": \"error\",\u001b[39m\n        \u001b[2m  }\u001b[22m,\n       3: \u001b[31m[{\"targetCount\": 2, \"targetData\": [{\"character\": \"ளி\", \"score\": 0.1}, {\"character\": \"வெ\", \"score\": 0.1}], \"user_id\": \"12345678\"}, {\"targetCount\": 2, \"targetData\": [{\"character\": \"ளி\", \"score\": 0.1}, {\"character\": \"வெ\", \"score\": 0.1}], \"user_id\": \"87654321\"}]\u001b[39m\n\nNumber of calls: \u001b[31m9\u001b[39m\n    at Object.<anonymous> (/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/mongodb/scores.controller.spec.ts:530:31)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"ScoresController should return the set result with milestone calculation","status":"failed","title":"should return the set result with milestone calculation"},{"ancestorTitles":["ScoresController"],"duration":10,"failureMessages":[],"fullName":"ScoresController should handle errors","status":"passed","title":"should handle errors"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209788264,"runtime":348,"slow":false,"start":1719209787916},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/app.controller.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["AppController","root"],"duration":10,"failureMessages":[],"fullName":"AppController root should return \"Hello World!\"","status":"passed","title":"should return \"Hello World!\""}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209788577,"runtime":498,"slow":false,"start":1719209788079},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/mongodb/scores.service.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["ScoresService"],"duration":24,"failureMessages":[],"fullName":"ScoresService should be defined","status":"passed","title":"should be defined"}]},{"numFailingTests":0,"numPassingTests":8,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209788745,"runtime":473,"slow":false,"start":1719209788272},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/config/mysql.config.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["Database Configuration"],"duration":1,"failureMessages":[],"fullName":"Database Configuration should have the correct type","status":"passed","title":"should have the correct type"},{"ancestorTitles":["Database Configuration"],"duration":1,"failureMessages":[],"fullName":"Database Configuration should have the correct host","status":"passed","title":"should have the correct host"},{"ancestorTitles":["Database Configuration"],"duration":1,"failureMessages":[],"fullName":"Database Configuration should have the correct port","status":"passed","title":"should have the correct port"},{"ancestorTitles":["Database Configuration"],"duration":1,"failureMessages":[],"fullName":"Database Configuration should have the correct username","status":"passed","title":"should have the correct username"},{"ancestorTitles":["Database Configuration"],"duration":1,"failureMessages":[],"fullName":"Database Configuration should have the correct password","status":"passed","title":"should have the correct password"},{"ancestorTitles":["Database Configuration"],"duration":0,"failureMessages":[],"fullName":"Database Configuration should have the correct database name","status":"passed","title":"should have the correct database name"},{"ancestorTitles":["Database Configuration"],"duration":0,"failureMessages":[],"fullName":"Database Configuration should have synchronize set to true","status":"passed","title":"should have synchronize set to true"},{"ancestorTitles":["Database Configuration"],"duration":2,"failureMessages":[],"fullName":"Database Configuration should have the correct entities","status":"passed","title":"should have the correct entities"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209788846,"runtime":66,"slow":false,"start":1719209788780},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/config/mongodb.config.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["Mongo Config"],"duration":3,"failureMessages":[],"fullName":"Mongo Config should export the correct MongoDB URI from the environment variable","status":"passed","title":"should export the correct MongoDB URI from the environment variable"}]},{"numFailingTests":0,"numPassingTests":4,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209788965,"runtime":298,"slow":false,"start":1719209788667},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/mongodb/cache/cache.service.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["CacheService"],"duration":8,"failureMessages":[],"fullName":"CacheService should be defined","status":"passed","title":"should be defined"},{"ancestorTitles":["CacheService","get"],"duration":10,"failureMessages":[],"fullName":"CacheService get should return the value for a given key","status":"passed","title":"should return the value for a given key"},{"ancestorTitles":["CacheService","set"],"duration":3,"failureMessages":[],"fullName":"CacheService set should set the value with a given key and ttl","status":"passed","title":"should set the value with a given key and ttl"},{"ancestorTitles":["CacheService","del"],"duration":3,"failureMessages":[],"fullName":"CacheService del should delete the value for a given key","status":"passed","title":"should delete the value for a given key"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1719209789011,"runtime":1371,"slow":false,"start":1719209787640},"testFilePath":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src/mysql/scores.service.spec.ts","failureMessage":null,"testResults":[{"ancestorTitles":["ScoresService"],"duration":8,"failureMessages":[],"fullName":"ScoresService should be defined","status":"passed","title":"should be defined"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":true,"collectCoverageFrom":["**/*.(t|j)s"],"coverageDirectory":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":3,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/node_modules/jest-html-reporters/index.js",{"publicPath":"./jest-coverage","filename":"coverage-report.html","expand":true}]],"rootDir":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/src","runTestsByPath":false,"seed":-1441717948,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/home/ttpl-rt-090/Tekdi_projects/all-learner-ai-services/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false,"coverageLinkPath":"../coverage/lcov-report/index.html"},"endTime":1719209789173,"_reporterOptions":{"publicPath":"./jest-coverage","filename":"coverage-report.html","expand":true,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})