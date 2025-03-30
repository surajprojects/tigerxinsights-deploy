// import prisma from "@tigerxinsights/db";
// import { z } from "zod";

// export const contactInput = z.object({
//     name: z.string(),
//     email: z.string(),
//     message: z.string(),
// });

export async function POST() {
    try {
        // const parsedInput = contactInput.safeParse();

        // // if (!parsedInput.success) {
        // //     return res.status(411).json({ message: parsedInput.error });
        // // }

        // const { name, email, message } = parsedInput.data;

        // const contactData = await prisma.contact.create({
        //     data: {
        //         name,
        //         email,
        //         message
        //     }
        // });

        return Response.json({ message: "Successfully stored the data!" }, { status: 201 });
    }
    catch (error) {
        console.log(error)
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
};