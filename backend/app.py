from flask import Flask, request, jsonify, session
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import pandas as pd

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'your-secret-key'  # Replace with your secret key

# Initialize DataFrame
users = pd.DataFrame(columns=['name','email', 'password', 'year', 'time', 'room'])
print(users)
@app.route('/register', methods=['POST'])
def register():
    global users
    data = request.get_json()
    session['email'] = data['email']
    session['name'] = data['name']
    session['time'] = data['time']
    session['year'] = data['year']
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    new_user = pd.DataFrame([[data['name'], data['email'], hashed_password, data['year'], data['time'], None]], columns=['name', 'email', 'password', 'year','time','room'])
    users = pd.concat([users, new_user], ignore_index=True)
    print(users)
    print(session['email'])
    return jsonify({'message': 'Registered successfully'}), 200

@app.route('/login', methods=['POST'])
def login():
    global users
    print("trying to login")
    data = request.get_json()
    filtered_users = users[users['email'] == data['email']]
    if filtered_users.empty:
        return jsonify({'message': 'Login failed'}), 401
    user = filtered_users.iloc[0]
    if user.empty or not check_password_hash(user['password'], data['password']):
        return jsonify({'message': 'Login failed'}), 401
    session['email'] = data['email']
    session['name'] = user['name']
    session['time'] = user['time']
    session['year'] = user['year']
    session['room'] = user['room']
    return jsonify({'message': 'Login successful'}), 200

# @app.route('/time', methods=['POST'])
# def time():
#     global users
#     data = request.get_json()
#     email = session.get('email')
#     drawtime = data['time']
#     # Find the user's row
#     user_index = users[users['email'] == email].index[0]
#     if user_index is not None:
#         # Update the user's row
#         users.loc[user_index, 'time'] = drawtime
#         return jsonify({'message': 'Updated successfully'}), 200
#     else:
#         return jsonify({'message': 'User not found'}), 404
 

@app.route('/assign', methods=['POST'])
def assign():
    global users
    data = request.get_json()
    print(users)
    
    email = session['email']
    new_room = data['room']
    print(email)
    # Find the user's row
    filtered_users = users[users['email'] == email]
    if not filtered_users.empty:
        user_index = users[users['email'] == email].index[0]
        if user_index is not None:
            # Check if the room is already assigned
            occupant = users[users['room'] == new_room]
            if not occupant.empty:
                # Compare the times
                if users.loc[user_index, 'year'] < occupant['year'].values[0]:
                    # Unassign the old user
                    users.loc[occupant.index[0], 'room'] = None
                    # Assign the room to the new user
                    users.loc[user_index, 'room'] = new_room
                    return jsonify({'message': 'Room assigned successfully'}), 200
                
                elif users.loc[user_index, 'time'] < occupant['time'].values[0]:
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
        return jsonify({'message': 'User not found'}), 410

@app.route('/checkroom', methods=['POST'])
def check_room():
    global users
    data = request.get_json()
    filtered_users = users[users['room'] == data['room']]
    if not filtered_users.empty:
        the_room = filtered_users.iloc[0]
        if the_room['name'] == session['name']:
            return jsonify({'message': 'You have claimed this room'}), 200
        else:
            return jsonify({'message': str(the_room['name']) + ' (' + str(the_room['year']) + ') has claimed this room with a time of ' + str(the_room['time'])}), 200
    else:
        print("empty")
        return jsonify({'message': 'Empty'}), 200
    
@app.route('/name', methods=['POST'])
def name():
    global users
    return jsonify({'message': str(session['name'])}), 200

@app.route('/time', methods=['POST'])
def time():
    global users
    return jsonify({'message': str(session['time'])}), 200

@app.route('/room', methods=['POST'])
def room():
    global users
    return jsonify({'message': str(session['room'])}), 200


if __name__ == '__main__':
    app.run(debug=True)