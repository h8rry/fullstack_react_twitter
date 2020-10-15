users = User.create([
  { username: 'Joanna092', email: 'kochanowska92@gmail.com', password: '123123123' },
  { username: 'Tommy', email: 'tommy@test.com', password: 'password' },
  { username: 'Bobby', email: 'bobby@test.com', password: 'password' },
  { username: 'Sarah', email: 'sarah@test.com', password: 'password' },
  { username: 'Lilly', email: 'lilly@test.com', password: 'password' },
  { username: 'Jimmy', email: 'jimmy@test.com', password: 'password' },
  { username: 'Cammy', email: 'cammy@test.com', password: 'password' },
])

user1 = User.find_by( username: "Tommy")
user2 = User.find_by( username: "Bobby")
user3 = User.find_by( username: "Sarah")

tweets = Tweet.create([
  { user: user1, message: 'This is first example message'},
  { user: user2, message: 'This is second example message'},
  { user: user3, message: 'This is third example message'},
])