// import mailSender from "@sendgrid/mail";

// mailSender.setApiKey(process.env.SENDGRID_API_KEY ?? "");

// export default async (req: any, res: any) => {
//   if (req.method === "POST") {
//     const body = JSON.parse(req.body);

//     try {
//       await mailSender.send({
//         from: process.env.FROM_EMAIL ?? "",
//         to: process.env.TO_EMAIL ?? "",
//         subject: `New message from ${body.name}`,
//         text: `
//         Name: ${body.name}\n
//         E-mail: ${body.email}\n
//         Message: ${body.message}
//         `,
//       });
//       res.status(200).json({ status: "OK" });
//     } catch (error) {
//       res.status(400).json({ error });
//     }
//   }
// };
