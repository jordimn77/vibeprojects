export default function handler(req, res) {
  const { message = '' } = req.query;
  res.status(200).json({ reply: `Echo: ${message}` });
}
