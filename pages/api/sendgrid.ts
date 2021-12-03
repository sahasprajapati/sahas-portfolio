import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req: any, res: any) => {
  try {
    await sendgrid.send({
      to: "sahasprajapati@gmail.com",
      from: "",
      subject: "",
      html: ``,
    });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({ error: err.message });
  }

  return res.status(200).json({ error: "" });
};

export default sendEmail;
