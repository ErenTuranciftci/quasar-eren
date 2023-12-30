const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();

const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'quasar',
  password: '123123',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const user = result.rows[0];


    if (password !== user.password) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );

    const user = result.rows[0];

    res.json({ success: true, user });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.get('/api/user/:userid', async (req, res) => {
  const userid = req.params.userid;

  try {
    const result = await pool.query('SELECT * FROM users WHERE userid = $1', [userid]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const user = result.rows[0];
    res.json({ success: true, user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.put('/api/user/:userid', async (req, res) => {
  const userid = req.params.userid;
  const { email, username, password } = req.body;

  try {

    await pool.query('UPDATE users SET email = $1, username = $2, password = $3 WHERE userid = $4',
      [email, username, password, userid]);

    res.json({ success: true, message: 'User profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
