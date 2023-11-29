REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

/usr/bin/yarn

/usr/bin/pm2 start app.js
