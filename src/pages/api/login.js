// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const userNameHc = "guest";
const passwordHc = "guest";

export default function handler(req, res) {
  const body = req.body;
  const { userName, password } = body;
  if (userName === userNameHc && password === passwordHc) {
    res
      .status(200)
      .json({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com",
        success: true,
      });
  }

  res
    .status(200)
    .json({
      success: false,
    });
}
