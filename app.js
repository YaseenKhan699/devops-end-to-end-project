const express = require('express');
const app = express();
const port = 3000;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve quiz form
app.get('/', (req, res) => {
  res.send(`
    <h1>Quick Quiz Survey</h1>
    <p><strong>Note:</strong> This quiz is only for testing real-time traffic and responses. No sensitive data is stored permanently.</p>

    <form method="POST" action="/submit">
      <label>Name:</label><br>
      <input type="text" name="name" placeholder="Your Name" required><br><br>

      <ol>
        <li>
          Your favorite color?<br>
          <input type="radio" name="q1" value="Red" required> Red<br>
          <input type="radio" name="q1" value="Blue"> Blue<br>
          <input type="radio" name="q1" value="Green"> Green<br>
        </li><br>

        <li>
          Preferred mode of transport?<br>
          <input type="radio" name="q2" value="Car" required> Car<br>
          <input type="radio" name="q2" value="Bike"> Bike<br>
          <input type="radio" name="q2" value="Public Transport"> Public Transport<br>
        </li><br>

        <li>
          Favorite meal of the day?<br>
          <input type="radio" name="q3" value="Breakfast" required> Breakfast<br>
          <input type="radio" name="q3" value="Lunch"> Lunch<br>
          <input type="radio" name="q3" value="Dinner"> Dinner<br>
        </li><br>

        <li>
          Favorite season?<br>
          <input type="radio" name="q4" value="Summer" required> Summer<br>
          <input type="radio" name="q4" value="Winter"> Winter<br>
          <input type="radio" name="q4" value="Spring"> Spring<br>
        </li><br>

        <li>
          Favorite sport?<br>
          <input type="radio" name="q5" value="Football" required> Football<br>
          <input type="radio" name="q5" value="Cricket"> Cricket<br>
          <input type="radio" name="q5" value="Basketball"> Basketball<br>
        </li><br>

        <li>
          Where did you see this post?<br>
          <input type="radio" name="source" value="Facebook" required> Facebook<br>
          <input type="radio" name="source" value="Instagram"> Instagram<br>
          <input type="radio" name="source" value="LinkedIn"> LinkedIn<br>
          <input type="radio" name="source" value="WhatsApp"> WhatsApp<br>
        </li>
      </ol>

      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle submission
app.post('/submit', (req, res) => {
  const { name, q1, q2, q3, q4, q5, source } = req.body;

  if (!name || !q1 || !q2 || !q3 || !q4 || !q5 || !source) {
    return res.send("Please enter your name and answer all questions!");
  }

  res.send(`
    <h2>Thank you, ${name}!</h2>
    <p>Here are your answers:</p>
    <ul>
      <li>Favorite color: ${q1}</li>
      <li>Preferred transport: ${q2}</li>
      <li>Favorite meal: ${q3}</li>
      <li>Favorite season: ${q4}</li>
      <li>Favorite sport: ${q5}</li>
      <li>Where did you see this post: ${source}</li>
    </ul>
    <p><strong>Note:</strong> This quiz is only for testing real-time traffic and responses.</p>
    <a href="/">Go back</a>
  `);
});

// Start server
app.listen(port, '0.0.0.0', () => console.log(`Server running at http://127.0.0.1:${port}`));
