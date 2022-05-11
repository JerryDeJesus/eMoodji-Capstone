\c capstone_dev; 

INSERT INTO users (fname, lname, email, password) VALUES 
('John', 'Doe', 'johndoe@gmail.com', 'johndoe123'),
('Billy','Jean','billyjean@hotmail.com','password1234'),
('Joey', 'Dean', 'jdbikes@aol.com', 'h0gwarts');

INSERT INTO entries (userId, date, mood, interest, activity) VALUES
(1, '05/11/2022 12:08:00', 'happy', 'animals, food, retail', 'cow therapy'),
(2, '02/14/2022 14:14:00', 'sad', 'social, animals', 'hug therapy'),
(3, '06/10/2022 18:00:00', 'excited', 'social, exercise','zumba'),
(2, '03/21/2022 00:00:00', 'happy', 'social, food, dance', 'karaoke');