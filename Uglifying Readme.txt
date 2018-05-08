Uglifying Steps:

1- Install UglifyJS and UglifyES, by running the following commands:

npm install uglify-js -g
npm install uglify-es -g

2- uglify destressor.js file by running the following:

uglifyjs destressor.js --mangle --compress --output destressor.min.js