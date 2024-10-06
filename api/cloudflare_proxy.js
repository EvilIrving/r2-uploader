import axios from "axios";

module.exports = async (req, res) => {
  const { method, body } = req;
  const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
  const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
  const DATABASE_ID = process.env.CLOUDFLARE_DATABASE_ID;
  const API_BASE_URL = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DATABASE_ID}`;

  try {
    const response = await axios({
      method: method,
      url: `${API_BASE_URL}/query`,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: body,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(
      "Error proxying to Cloudflare:",
      error.response ? error.response.data : error.message
    );
    res.status(error.response ? error.response.status : 500).json({
      error: "An error occurred while proxying the request to Cloudflare",
    });
  }
};
