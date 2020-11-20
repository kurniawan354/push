var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BFkitbgABe0Tm0y0VDBUprE_m43VAxHgb01wYPS4vmRe-2Om0LDf7kYKJmcz6vbKC3xY4lxbvtV16uA9ueNPZzQ",
   "privateKey": "wk-CTX2btu-VbdeuJr0ZSLG0b-GrJmg3lmCAfmID6uY"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/fyFB-o4RgJY:APA91bHC4ZY1TNThmmqTPvCjSoNrn4yg1bpJtNqFSrgrWyqVZQvRS4IQwt-TfIMnT5lXLwv_HauS26vY2pZQz4X0LH_zrKXzUijbv_wWcibv8pq_z0RnV5h_Iz3na8lYNbzQR99AGsQV",
   "keys": {
       "p256dh": "BA19hnwhs/2vzDTnV1cqQnxbYVxOI+sk+scwqQyVf8IWwvFfg6wGWPi2t4ZWSVSIjOhrayq5E3Rrs3rF+qCkpJE=",
       "auth": "F2kxCUVfa76mYV7yL8eZYw=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '380825363327',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);