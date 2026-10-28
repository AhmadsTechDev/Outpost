"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function checkUser() {
    // cek user sudah login / belum
    const clerkUser = await currentUser();

    if (!clerkUser) return null;

    // jika ada user, cek apakah user sudah ada di database atau belum
    const existing = await prisma.user.findUnique({
        where: {
            clerkId: clerkUser.id,
        }
    });

    if (existing) return existing; 
    
    // cek email user dari clerk, jika tidak ada email maka return null
    const email = clerkUser.emailAddresses[0]?.emailAddress;
    if (!email) return null;

    return prisma.user.create({
        data: {
            clerkId: clerkUser.id,
            email: email,
            name: `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() || null,
            imageUrl: clerkUser.imageUrl,
        }
    })
}