from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array, load_img
import numpy as np
import os
from PIL import Image
import io
app = Flask(__name__)

# Load the model
model = load_model("inception_vgg_model.keras")

# Class labels (update this to match your label_encoder.classes_)
class_labels = [
    'Automobile', 'Automobile,Comedy', 'Blog', 'Blog,Comedy',
    'Blog,Entertainment', 'Blog,Science', 'Comedy', 'Comedy,Entertainment',
    'Comedy,Informative', 'Entertainment', 'Entertainment,Blog',
    'Entertainment,Comedy', 'Food', 'Food,Entertainment', 'Informative', 'News',
    'Science', 'Tech', 'Tech,Comedy', 'Tech,Informative', 'Tech,News',
    'VideoGames'
]

IMG_SIZE = (224, 224)

def prepare_image(file):
    # Read file stream into PIL image
    img = Image.open(file.stream).convert("RGB")
    img = img.resize((224, 224))  # Match your model's expected input size
    img = img_to_array(img)
    
    # Preprocess as expected by the model (e.g., InceptionV3 preprocessing)
    img = tf.keras.applications.inception_v3.preprocess_input(img)
    return np.expand_dims(img, axis=0)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image_file = request.files['image']
    try:
        img = prepare_image(image_file)
        preds = model.predict(img)
        
        if preds.shape[1] != len(class_labels):
            return jsonify({'error': f'Model output shape {preds.shape} does not match number of class labels {len(class_labels)}'})

        predicted_class = class_labels[np.argmax(preds[0])]
        confidence = float(np.max(preds[0]))

        return jsonify({
            'predicted_class': predicted_class,
            'confidence': confidence
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
