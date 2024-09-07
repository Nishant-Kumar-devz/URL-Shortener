const ShortUniqueId = require("short-unique-id");
const { randomUUID } = new ShortUniqueId({ length: 8 });
const urlModel = require("../model/url");

async function handelAnalytic(req, res) {
  const shortUrl = req.params.shortUrl;

  const urlData = await urlModel.findOne({ shortUrl });

  return res.json({
    "Data": urlData.analytics,
    "Total Clicks":urlData.analytics.length,
  });
}

async function handelRedirect(req, res) {
  const shortUrl = req.params.shortUrl;
  const urlData = await urlModel.findOneAndUpdate(
    { shortUrl },
    {
      $push: {
        analytics: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(urlData.originalUrl);
}

async function handelGenerateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) res.status(400).json("require url...");
  const urlData = await urlModel.create({
    shortUrl: randomUUID(),
    originalUrl: body.url,
  });
  return res.json({ shortUrl: urlData.shortUrl });
}

module.exports = { handelGenerateShortUrl, handelRedirect, handelAnalytic };
