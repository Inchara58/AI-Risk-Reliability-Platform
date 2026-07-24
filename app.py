from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

    import os
import pandas as pd
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'csv'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'GET':
        return render_template('upload.html')

    # POST request - handle the uploaded file
    file = request.files.get('dataset')

    if file is None or file.filename == '':
        return render_template('upload.html', error="Please select a file before uploading.")

    if not allowed_file(file.filename):
        return render_template('upload.html', error="Only CSV files are supported.")

    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    try:
        df = pd.read_csv(filepath)
    except Exception:
        return render_template('upload.html', error="Could not read the CSV file. Please check the format.")

    preview_df = df.head(5)

    return render_template(
        'upload.html',
        uploaded=True,
        filename=filename,
        rows=df.shape[0],
        cols=df.shape[1],
        column_names=list(df.columns),
        preview_rows=preview_df.values.tolist()
    )


if __name__ == '__main__':
    app.run(debug=True)