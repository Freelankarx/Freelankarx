import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { COOKIE_NAME } from '@shared/const';
import { getSessionCookieOptions } from './_core/cookies';
import { systemRouter } from './_core/systemRouter';
import { publicProcedure, protectedProcedure, router } from './_core/trpc';
import { createContactSubmission, getContactSubmissions } from './db';
import { notifyOwner } from './_core/notification';

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, 'Name is required'),
          email: z.string().email('Valid email is required'),
          genre: z.string().min(1, 'Genre is required'),
          wordCount: z.string().optional(),
          servicesNeeded: z.string().min(1, 'Services needed is required'),
          deadline: z.string().optional(),
          message: z.string().optional(),
          manuscriptUrl: z.string().optional(),
          manuscriptFileName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const submission = await createContactSubmission({
          ...input,
          status: 'new',
        });

        if (!submission) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to create submission',
          });
        }

        // Send email notification to owner
        try {
          await notifyOwner({
            title: 'New Book Editing Inquiry',
            content: `New submission from ${input.name}\n\nEmail: ${input.email}\nGenre: ${input.genre}\nServices: ${input.servicesNeeded}\n\nMessage: ${input.message || 'No message provided'}`,
          });
        } catch (error) {
          console.error('Failed to send notification:', error);
        }

        return { success: true, submissionId: submission.id };
      }),

    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== 'admin') {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Only admins can view submissions',
        });
      }
      return await getContactSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
