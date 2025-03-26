<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
    <title>ברוכים הבאים</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            text-align: center;
        }
        .welcome-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        .btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="welcome-container">
        <h1>ברוכים הבאים ל-Horizon!</h1>
        <p>אנחנו שמחים לראותך כאן. נחזור אליך תוך מספר שניות...</p>
        <button class="btn" id="enterBtn">המשך לאתר</button>
    </div>

    <script>
        // מפעיל את המעבר לעמוד הבית אחרי 5 שניות
        setTimeout(function() {
            window.location.href = 'http://127.0.0.1:5500/website%20home/index.html'; // שנה לכתובת הבית שלך
        }, 5000);

        // מעביר גם אם המשתמש לוחץ על כפתור "המשך לאתר"
        document.getElementById('enterBtn').addEventListener('click', function() {
            window.location.href = 'http://127.0.0.1:5500/website%20home/index.html'; // שנה לכתובת הבית שלך
        });
    </script>
</body>
</html>
