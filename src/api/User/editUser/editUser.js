import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        editUser: async (_, args, {request, isAutehnticated}) => {
            isAutehnticated(request);

            const { name, email, firstname, lastname, bio } = args;
            const { user } = request;

            return prisma.updateUser({
                where: {id: user.id}, 
                data: {name, email, firstname, lastname, bio}
            });
        }
    }
}