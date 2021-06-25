myself = User.new(email: ENV['USER_EMAIL'],
  phone_number: "+84 77 540 0703",
  full_name: "FRS Admin",
  address: "Đà Nẵng",
  date_of_birth: "01-01-1998",
  role: 0,
  activated: true,
  password: "hoan@123",
  password_confirmation: "hoan@123")
myself.avatar.attach(io: File.open("app/assets/images/team_06.jpg"),
     filename: "myself.jpg", content_type: "image/png")
myself.save
