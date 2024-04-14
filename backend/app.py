from flask import Flask, request, jsonify, session
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import pandas as pd

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'your-secret-key'  # Replace with your secret key

# Initialize DataFrame
users = pd.DataFrame(columns=['name','email', 'password', 'time', 'room'])

@app.route('/register', methods=['POST'])
def register():
    global users
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = pd.DataFrame([[data['name'], data['email'], hashed_password, None, None]], columns=['name', 'email', 'password', 'time','room'])
    users = pd.concat([users, new_user], ignore_index=True)
    return jsonify({'message': 'Registered successfully'}), 200

@app.route('/login', methods=['POST'])
def login():
    global users
    data = request.get_json()
    user = users[users['email'] == data['email']].iloc[0]
    if user.empty or not check_password_hash(user['password'], data['password']):
        return jsonify({'message': 'Login failed'}), 401
    session['email'] = data['email']
    return jsonify({'message': 'Login successful'}), 200

@app.route('/time', methods=['POST'])
def time():
    global users
    data = request.get_json()
    email = session.get('email')
    drawtime = data.get('time')
    # Find the user's row
    user_index = users[users['email'] == email].index[0]
    if user_index is not None:
        # Update the user's row
        users.loc[user_index, 'time'] = drawtime
        return jsonify({'message': 'Updated successfully'}), 200
    else:
        return jsonify({'message': 'User not found'}), 404


@app.route('/assign', methods=['POST'])
def assign():
    global users
    data = request.get_json()
    email = session.get('email')
    new_room = data.get('room')
    # Find the user's row
    user_index = users[users['email'] == email].index[0]
    if user_index is not None:
        # Check if the room is already assigned
        occupant = users[users['room'] == new_room]
        if not occupant.empty:
            # Compare the times
            if users.loc[user_index, 'time'] < occupant['time'].values[0]:
                # Unassign the old user
                users.loc[occupant.index[0], 'room'] = None
                # Assign the room to the new user
                users.loc[user_index, 'room'] = new_room
                return jsonify({'message': 'Room assigned successfully'}), 200
            else:
                return jsonify({'message': 'Room is occupied'}), 409
        else:
            # Assign the room to the new user
            users.loc[user_index, 'room'] = new_room
            return jsonify({'message': 'Room assigned successfully'}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)