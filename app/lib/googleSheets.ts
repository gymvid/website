import jwt from "jsonwebtoken";

const SPREADSHEET_ID = "1md-jgkAkgUMnAwDLlEqjHqxJy9Ziz4W5p5FmRoc20jI";
const SHEET_NAME = "Sheet1";

const CREDENTIALS = {
  type: "service_account",
  project_id: "gymvid",
  private_key_id: "11311bb505b3deac354fcdfdf791b01953081a0d",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCPhvGCWqG9fAm2\n2RKL4b1HF/PsjH2u3wUVbG8aK4rSkXdPgezZP2Mr/AME36EKkPwDmBMFn8oqZxyZ\nRufcRjRcx9wBRQHnBMScZt4qT+ZAd2K75Dc5WSYXa1HrBgUH1aZqYeHY4WufgMY1\nc1rJ5/I8sBmnsaUUV9eec852G92ABOoTUAk8WgIvIdBM6ijrDUwjQ00tL3ul4v4H\nIyNpST3zgFbKeUkaNmRH0bezoXusAFtq0jVT4TghXOVIz+J/itwmevbtrjOaEOUQ\nCjIr/sObJQ+KHFN+EgQ51btZEORCfBSyXiv/UhGulrWiebsPLrO4GK8cHooDWzWF\n4gRqrrvRAgMBAAECggEAF8Y2yYypN3mtI0JUQeL35yeW0lNYO0f6b9jJE4jsYyJQ\n5NTk7nyDOSUyu9MuOhGXiSHe3sLf6kOvt00JOZHQeSDq9rPfU4zU44JfoRsgjQOp\nkW2FX0S+3Ei85kUWPry7ZupFTpdSbDaYvoBX5NN8quRRr5crvNGrJ/ZPV/2YJG0M\ndv8FTog5tTCdEe/8VF1Sol3yj4oOCFnWM4avPwu5f4HXzxRahALzXKgrXjlC+VJS\nQoL1CD5NyJEhg+1qKeg42C63piAP3L6e0y/2KYKRL+Xu8oq7aku6LhvP8ftt3Fnq\nc6TsfgO5UQbmixllzOHA1YT2kK9ZiWrScSU2enfw5QKBgQDAbZB13fZ3YyVzv9LQ\ngmwjqE0c4n+k0mO9AoRttQEB78Cpq0ajJbSM71tT7ct110B9SvY93tC2Jr104WB3\n/GaORxd2Dvp5nBRxkwBsZ6T12iP8LBajMXKc+E3rcplLOWs8AYp4zcg2c/rMpZmW\nki+04vvrVxHVLvaeAYRoPWPm/QKBgQC+8aEr3b4V3Jj8otslZIRLN83e/kLIWt3Y\njx0aTKtoSkxGvJYDueIZkq+EN90UtxgV/nxSsPLpZpnNEWptI9UCgEBsXPwEcepf\nuC/R13VlWHZkyl8Ksbody824N46HcUqmh8wY84BDMilb6J04IaBfosySfeAXBku0\nVD+3jSMiZQKBgC+msiBN/+uelLauKOFTer31vmrJt/wz0VkL14lnSkGVgmtBq7NY\n8fX4i/Ajsb+TtzePqZy2oY6J116rNP1hdnADMM8edG5K9VEOqwstO09aXpDixhRR\neWVfo8QLU+Sp6mEorIavxsWdQN0OoRMFTmUH1IR5wkO9ZnrIO2ao1SVtAoGBAIGm\n6F00z+FgTLEek9csDXhViACmfQo2SPTHGGfHL4w9BtXxL5uQGCptI6iPlhp+yGgG\nyLwNUqOQ+1X3QWCiN/zewN/Ts3wBLbeZBT9jIV+TVbDSiP5l945L2IABmVH2Z030\nX22BydHWuaaiqD549sB5dpbxybtYlwb3PdyQhQ7RAoGAS4k0qdZc1RCOxWmZmVAw\nEcMEUy2u9P3l9Uh/OQwgUzJX9KbTsc1QseO9IGw7tJgiLT+trKDKKTWXNWE5KCRL\nt0UEFBcaOfMBmybgKqrktWSie22tDmjKuGKDJQEPRVZ9ruL94obfmvlN9DYpAJ1b\n81g45BxJ7h6r2EHA93cEAqE=\n-----END PRIVATE KEY-----\n",
  client_email: "gymvid@gymvid.iam.gserviceaccount.com",
  client_id: "111728326497299154827",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url:
    "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/gymvid%40gymvid.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

async function getAccessToken(): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;

  const payload = {
    iss: CREDENTIALS.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: CREDENTIALS.token_uri,
    exp: exp,
    iat: iat,
  };

  const token = jwt.sign(payload, CREDENTIALS.private_key, {
    algorithm: "RS256",
  });

  const response = await fetch(CREDENTIALS.token_uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${token}`,
  });

  const data = (await response.json()) as any;
  return data.access_token;
}

export async function appendToGoogleSheet(
  rows: (string | number)[][]
): Promise<void> {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:E:append`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: rows,
          valueInputOption: "USER_ENTERED",
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Google Sheets API error: ${error}`);
    }

    console.log("Data appended to Google Sheet successfully");
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    throw error;
  }
}
