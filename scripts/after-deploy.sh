REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

sudo yarn install --frozen-lockfile

pm2 start src/app.js
