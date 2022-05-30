\c capstone_dev; 

INSERT INTO users (fname, lname, email, password) VALUES 
('John', 'Doe', 'johndoe@gmail.com', 'johndoe123'),
('Billy','Jean','billyjean@hotmail.com','password1234'),
('Joey', 'Dean', 'jdbikes@aol.com', 'h0gwarts');

INSERT INTO entries (userid, date_created, mood, interest, activity) VALUES
(1, '2022-05-11T12:08:04.111Z', '😄', 'hug', 'cow therapy'),
(2, '2022-02-14T14:14:45.364Z', '😢', 'hug', 'hug therapy'),
(3, '2022-06-10T18:30:45.436Z', '💃', 'music', 'zumba'),
(2, '2022-03-21T11:11:45.421Z', '😄', 'music', 'karaoke'),
(1, '2022-05-30T15:40:48.683Z', '😄', 'pet', 'Bideawees Pet Therapy Program'),
(1, '2022-05-30T15:41:00.151Z', '😄', 'pet', 'NAMI-NYC'),
(1, '2022-05-30T16:22:33.472Z', '😄', 'music', 'Manhattan Music Therapy'),
(1, '2022-05-30T16:28:36.176Z', '🤫', 'yoga', 'Dharma Yoga'),
(1, '2022-05-30T16:29:50.888Z', '😰', 'art', 'The Art Therapy Project: Veterans');

