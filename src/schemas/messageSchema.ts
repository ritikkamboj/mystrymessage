import { z } from "zod";

export const acceptMessageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content length must be at least 10 characters " })
    .max(300, {
      message: "Content lenght can't be greater than 300 chracters ",
    }),
});
