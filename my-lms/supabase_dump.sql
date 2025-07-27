-- to create Table lessons

CREATE TABLE lessons (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title text NOT NULL,
    description text,
    scheduled_date date NOT NULL,
    duration interval NOT NULL,
    img text,
    is_completed boolean DEFAULT false,
    stream text NOT NULL
);

-- inser values into the table

INSERT INTO lessons (title, description, scheduled_date, duration, img, is_completed, stream) VALUES
('React Basics', 'Introduction to React components and JSX', '2025-07-28', '45 minutes', '/images/react-img.png', false, 'live session'),
('Mathematics', 'Introduction to number system', '2025-07-28', '1 hour', '/images/maths-img.jpg', false, 'self-learning'),
('Typescript', 'Introduction to basics of Typesrcipt', '2025-07-28', '40 minutes', 'images/typescript-img.png', false, 'live session'),
('DSA', 'Introduction to arrays', '2025-07-28', '50 minutes', '/images/dsa-img.jpeg', true, 'live session');
('NextJs Basics', 'Introduction to NextJs', '2025-07-28', '50 minutes', 'images/nextjs-img.jpg', true, 'live session');