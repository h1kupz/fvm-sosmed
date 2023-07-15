import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const partnerships = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    bgImage: z.string(),
    tLogo: z.string().optional(),
    logo: z.string(),
  }),
});

const aprs = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    header1: z.string().optional(),
    header2: z.string().optional(),
    header3: z.string().optional(),
    bgImage: z.string(),
    items: z.string(),
    item1: z.object({
      tkn1: z.string(),
      tkr1: z.string(),
      tkn2: z.string(),
      tkr2: z.string(),
      apr: z.string(),
      tvl: z.string(),
    }),
    item2: z
      .object({
        tkn1: z.string(),
        tkr1: z.string(),
        tkn2: z.string(),
        tkr2: z.string(),
        apr: z.string(),
        tvl: z.string(),
      })
      .optional(),
    item3: z
      .object({
        tkn1: z.string(),
        tkr1: z.string(),
        tkn2: z.string(),
        tkr2: z.string(),
        apr: z.string(),
        tvl: z.string(),
      })
      .optional(),
  }),
});

const partnerbribes = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    header: z.string(),
    bgImage: z.string(),
    logo: z.string(),
    total: z.string(),
    items: z.string(),
    item1: z.object({
      tkn1: z.string(),
      tkr1: z.string(),
      tkn2: z.string(),
      tkr2: z.string(),
    }),
    item2: z
      .object({
        tkn1: z.string(),
        tkr1: z.string(),
        tkn2: z.string(),
        tkr2: z.string(),
      })
      .optional(),
    item3: z
      .object({
        tkn1: z.string(),
        tkr1: z.string(),
        tkn2: z.string(),
        tkr2: z.string(),
      })
      .optional(),
  }),
});

const matchedbribes = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    bgImage: z.string(),
    briber: z.string().optional(),
    logo: z.string().optional(),
    header: z.string().optional(),
    total: z.string(),
    item1: z.object({
      tkn1: z.string(),
      tkr1: z.string(),
      ttl1: z.string(),
      tkn2: z.string(),
      tkr2: z.string(),
      ttl2: z.string(),
    }),
    item2: z.object({
      tkn1: z.string(),
      tkr1: z.string(),
      tkn2: z.string(),
      tkr2: z.string(),
      apr: z.string(),
    }),
  }),
});

const totalbribes = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    bgImage: z.string(),
    epoch: z.string(),
    total: z.string(),
  }),
});

export const collections = {
  partnerships: partnerships,
  aprs: aprs,
  partnerbribes: partnerbribes,
  matchedbribes: matchedbribes,
  totalbribes: totalbribes,
};
