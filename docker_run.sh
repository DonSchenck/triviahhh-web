echo "Building package"

npm config set cache /mycache --global

echo $REACT_APP_API_URL
npm run build --production


echo "**************************************************Copying files"
echo "**************************************************Copying files"
echo "**************************************************Copying files"
echo "**************************************************Copying files"
echo "**************************************************Copying files"

echo $REACT_APP_API_URL
rm /var/www/html/*
sleep 1
cp -R /app/build/* /var/www/html

cat /etc/nginx/nginx.conf

echo "Starting nginx"
echo $REACT_APP_API_URL

/usr/sbin/nginx -g "daemon off;"
