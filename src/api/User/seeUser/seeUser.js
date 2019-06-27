import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        seeUser: async(_, args) => {

            const { name } = args;
            //const user = await prisma.user({name});
            //const posts = await prisma.user({name}).posts();

            return prisma.user({name});
        }
    }
}