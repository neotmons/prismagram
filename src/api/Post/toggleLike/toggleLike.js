import { isAutehnticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        toggleLike: async (_, args, { request }) => {
            isAutehnticated(request);

            const { postId } = args;
            const { user } = request;

            const filterOptions = {
                AND: [
                    {
                        user:{
                            id: user.id
                        }
                    },
                    {
                        post:{
                            id: postId
                        }
                    }
                ]
            };

            try {

                const existingLike = await prisma.$exists.like(filterOptions);

                
                if(existingLike){
                    await prisma.deleteManyLikes(filterOptions);
                } else {
                    await prisma.createLike({
                        user: {
                            connect: {
                                id: user.id
                            }
                        },
                        post: {
                            connect: {
                                id: postId
                            }
                        }
                    });
                }
            } catch {
                return false;
            }            

            return true;            
        }
    }
};