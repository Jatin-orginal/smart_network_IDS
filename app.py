from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Fake phishing URL checker
@app.route('/check_url', methods=['POST'])
def check_url():
    data = request.get_json()
    url = data.get('url')

    suspicious_words = ["login", "verify", "free", "bank", "secure"]

    if any(word in url.lower() for word in suspicious_words):
        result = {
            "status": "Unsafe",
            "message": "Suspicious phishing activity detected!"
        }
    else:
        result = {
            "status": "Safe",
            "message": "No suspicious activity found."
        }

    return jsonify(result)


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)