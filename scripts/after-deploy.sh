REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

yarn

pm2 start app.js
