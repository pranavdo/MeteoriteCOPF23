from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)
model = print()
@app.route('/')
def index():
    return send_from_directory('build', 'index.html')

@app.route('/static/js/<filename>')
def serve_js(filename):
    return send_from_directory('build/static/js', filename)

@app.route('/static/css/<filename>')
def serve_css(filename):
    return send_from_directory('build/static/css', filename)

@app.route('/model_predict', methods=['POST'])
def model_predict():
    try:
        data = request.get_json()
        axis = float(data['axis'])
        distance = float(data['distance'])
        period = float(data['period'])
        prediction = model([[axis, distance, period]])
        return jsonify({'prediction': int(prediction[0])})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
