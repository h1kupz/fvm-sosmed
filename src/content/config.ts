import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const aprs = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        header: z.string(),
        bgImage: z.string(),
        cards: z.string(),
        crd1: z.object({
            tkn1: z.string(),
            tkr1: z.string(),
            tkn2: z.string(),
            tkr2: z.string(),
            apr: z.string(),
            tvl: z.string(),
        }),
        crd2: z.object({
            tkn1: z.string(),
            tkr1: z.string(),
            tkn2: z.string(),
            tkr2: z.string(),
            apr: z.string(),
            tvl: z.string(),
        }).optional(),
        crd3: z.object({
            tkn1: z.string(),
            tkr1: z.string(),
            tkn2: z.string(),
            tkr2: z.string(),
            apr: z.string(),
            tvl: z.string(),
        }).optional(),
    }),
});

export const collections = {
    'aprs': aprs,
};
