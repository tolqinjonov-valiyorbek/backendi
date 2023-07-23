const { initializeApp } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const admin = require('firebase-admin');

initializeApp({
    credential: admin.credential.cert({
        type: "service_account",
        project_id: "movie-app-cfe63",
        private_key_id: "d98c050790b748433c0b8c8791032a34b2869d33",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDYIjIR3vDNYC6W\n8UYJFB2CeCcIg2TYIqoD7XfaJ/Xv8Tx58LAPxmPpm8NKIvF+Su+rVPiqdQAJ/Cjv\nC8XvHtJyTAb6H8Y4h7HIgcdNe8sjELvT2FUYmxJKdZLDE25Ynaou2S4OUX4DfamA\noc4eKOb/i8PqvGuX1weBjvcbViAXlpmvEuCsbVQMmyh6wsdgJAfijeEQDvO+hDnL\nsno8Gu26FdkXniVX9P84utSDAtY0v+/hqrGlyMWtJ/Ia8XlKAbtGEMlmw5rePVij\nKcZbWFA5ujg5CYTCCeaR81QvyoLPJVDCMPQzF4jlb2Cvo6T2OV086Tx7L+Da5Us3\neyuQVoeDAgMBAAECggEAROtSkARJQRQkhxlUvdxeNJZfzAUqCQm0sR/uEfCgKe0A\n3dl0KvOWNI3oziEqZJ08o6Oqz6ATbRutadyVN1Tawnuf1e5/5NLQTCGmDf0ln37c\nhgb7y6bXREsNi4sMqtFLzTiPyR0PU8mkXVI7Sb69Oku1I4sFvBtjV1rhTSQ/g4V6\nYeR8j5ICFISbQ/2iKmBpTp69EyZqgNqMNNSlUF/Rn0/YWZJEE/BqWRHqC67Ud9Se\neJkxkHfpDQImflFlJOFMLU67Sso8mzEQLTkF9MKuGgDYSAQeF1SAjjb6TMwvFYjN\nji1tuznzELHBvPov3M4DOv6FdvbNDvyep9N9Tl+VUQKBgQDt1EvQGnlaXWUg36cw\njdY+DtBnAmRemFWmtZx3WPHtc3q+ms9lmFwrMUH9omvSsDovRDVjA1wJasfpUFsi\nZE0jquO7jPE3eLLhxmzNhhByXc8YbB3ZqoK72Rq+VNCzRTF3Ln92ZnvIFmM5q8JV\nDvvw9Vql5816Df1o3986SXV1TQKBgQDopY2VEK8vCfNRqXQnkS0JK92sZvNNfuhr\nD5uIxF/U/rrC9NNJKoiB/DLnIC5ZHMa/QK5XT8SyM/qcUwdjiTAueC3OZt+y+r/o\nDGzE653spg5TwRtRxZfHfQwggNvsFbOfR49W7y6HX3024dN73lkVPkyOISmPt8pw\niNPpN9NIDwKBgQDVtELfXzqWOX/qly17UqgloVggh6S633VvVJehInpZXL/5z8/2\nwX5ojV131F/AtPvDhy3Vp6onCB1UiBEsCSbLmv4BhDcoGjva5lrUHthee+7gSh5U\nfYP12bLPPhU+UTmOl2iPcq1dcMh+hNkdZ1Z6AW4P0Afx2epQN4I1tNZnrQKBgQCt\nPIH2KytX6p/uAjHFONyBRNHXi/3GiibFeiTGLfxyXZByld4zUGG/8S1yX8tDfiMc\nzSxFRdfhHsWR3F3XJ5PiNolddctDumZmg8IGzLCXRHvMsDIIrQs9eAcsuOeKoApW\nI/I/uPE7ysYxtO1HAqXxJKfa+iS5qREsxSaPNou0zwKBgQDhfoAa+YTOCsT+FYOJ\neYF9c5PjEk+wm0MhSq0phQpV8BTQsML7rDepzc1323Xi+uytWQiD2exGXMrJU8CC\n30uh/kRW9A1ofFDm44gmCkjK2FqoNJGyEm3oOYWMHVhHdH1Ysyqi3vzQkk1CQTdA\nIPkhPCmHq1L4KUDTi4T+Bmx84w==\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-v2m7z@movie-app-cfe63.iam.gserviceaccount.com",
        client_id: "109456933352436657422",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-v2m7z%40movie-app-cfe63.iam.gserviceaccount.com",
        universe_domain: "googleapis.com",
        storageBucket: "movie-app-cfe63.appspot.com"
    }),
    storageBucket: "movie-app-cfe63.appspot.com" // Firebase Storage uchun saqlash joyi nomi
});

const storage = getStorage().bucket();

module.exports = storage;
