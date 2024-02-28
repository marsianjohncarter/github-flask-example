from flask import Flask, render_template
import datetime
app = Flask(__name__, template_folder='templates', static_folder='static')


  

@app.route('/')
def login():
    current_date = datetime.date.today()
    return render_template('index.html', date=current_date)


if __name__ == '__main__':
    app.run(debug=True)