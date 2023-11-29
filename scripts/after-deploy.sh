REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

sudo yarn

pm2 start src/app.js
